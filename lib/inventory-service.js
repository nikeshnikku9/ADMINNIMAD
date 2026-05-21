import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { inventoryProducts } from "@/lib/inventory-defaults";

export function getStockStatus(stock, threshold) {
  const currentStock = Number(stock || 0);
  const lowStockThreshold = Number(threshold || 0);

  if (currentStock <= 0) {
    return "out-of-stock";
  }

  if (currentStock <= lowStockThreshold) {
    return "low-stock";
  }

  return "in-stock";
}

export function toClientProduct(product) {
  return {
    ...product,
    _id: product._id?.toString(),
    createdAt: product.createdAt?.toISOString?.() || product.createdAt,
    updatedAt: product.updatedAt?.toISOString?.() || product.updatedAt,
    status: getStockStatus(product.stock, product.lowStockThreshold),
  };
}

export function toClientLog(log) {
  return {
    ...log,
    _id: log._id?.toString(),
    productId: log.productId?.toString?.() || log.productId,
    createdAt: log.createdAt?.toISOString?.() || log.createdAt,
  };
}

export function cleanProductPayload(data) {
  const now = new Date();
  const stock = Number(data.stock || 0);
  const lowStockThreshold = Number(data.lowStockThreshold || 10);

  return {
    name: String(data.name || "").trim(),
    sku: String(data.sku || "").trim().toUpperCase(),
    barcode: String(data.barcode || "").trim(),
    category: String(data.category || "Uncategorized").trim(),
    unit: String(data.unit || "pcs").trim(),
    stock,
    lowStockThreshold,
    purchasePrice: Number(data.purchasePrice || 0),
    sellingPrice: Number(data.sellingPrice || 0),
    gst: Number(data.gst || 0),
    image: String(data.image || "/placeholder-spice.svg").trim(),
    description: String(data.description || "").trim(),
    updatedAt: now,
  };
}

export async function ensureInventorySeeded() {
  const db = await getDb();
  const products = db.collection("products");
  await products.createIndex({ sku: 1 }, { unique: true });
  await products.createIndex({ barcode: 1 }, { unique: true });
  await products.createIndex({ name: "text", sku: "text", barcode: "text", category: "text" });
  await db.collection("stock_logs").createIndex({ createdAt: -1 });
  await db.collection("stock_logs").createIndex({ productId: 1 });
  await db.collection("invoices").createIndex({ invoiceNumber: 1 }, { unique: true });
  const count = await products.countDocuments();

  if (count > 0) {
    return;
  }

  const now = new Date();
  const docs = inventoryProducts.map((product) => ({
    ...product,
    createdAt: now,
    updatedAt: now,
  }));

  await products.insertMany(docs);
  const insertedProducts = await products.find({}).toArray();

  if (insertedProducts.length > 0) {
    await db.collection("stock_logs").insertMany(
      insertedProducts.map((product) => ({
        productId: product._id,
        productName: product.name,
        sku: product.sku,
        barcode: product.barcode,
        type: "opening",
        quantity: Number(product.stock || 0),
        previousStock: 0,
        newStock: Number(product.stock || 0),
        reason: "Opening stock created during system setup",
        supplierNote: "Seed stock",
        invoiceRef: "",
        adminName: "System",
        createdAt: now,
      }))
    );
  }
}

export function parseMongoId(id) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid database id");
  }

  return new ObjectId(id);
}

export async function createStockLog({
  product,
  type,
  quantity,
  previousStock,
  newStock,
  reason,
  supplierNote,
  invoiceRef,
  adminName,
}) {
  const db = await getDb();

  await db.collection("stock_logs").insertOne({
    productId: product._id,
    productName: product.name,
    sku: product.sku,
    barcode: product.barcode,
    type,
    quantity: Number(quantity || 0),
    previousStock: Number(previousStock || 0),
    newStock: Number(newStock || 0),
    reason: reason || "Stock updated",
    supplierNote: supplierNote || "",
    invoiceRef: invoiceRef || "",
    adminName: adminName || "Admin",
    createdAt: new Date(),
  });
}

export async function updateProductStock({
  productId,
  type,
  quantity,
  reason,
  supplierNote,
  invoiceRef,
  adminName,
}) {
  const db = await getDb();
  const products = db.collection("products");
  const id = parseMongoId(productId);
  const product = await products.findOne({ _id: id });

  if (!product) {
    throw new Error("Product not found");
  }

  const numericQuantity = Math.max(0, Number(quantity || 0));
  const previousStock = Number(product.stock || 0);
  let newStock = previousStock;

  if (type === "add" || type === "return") {
    newStock = previousStock + numericQuantity;
  }

  if (type === "remove" || type === "damage" || type === "sale") {
    newStock = previousStock - numericQuantity;
  }

  if (type === "adjustment") {
    newStock = numericQuantity;
  }

  if (newStock < 0) {
    throw new Error("Stock cannot go below zero");
  }

  await products.updateOne(
    { _id: id },
    {
      $set: {
        stock: newStock,
        updatedAt: new Date(),
      },
    }
  );

  await createStockLog({
    product,
    type,
    quantity: type === "adjustment" ? Math.abs(newStock - previousStock) : numericQuantity,
    previousStock,
    newStock,
    reason,
    supplierNote,
    invoiceRef,
    adminName,
  });

  const updated = await products.findOne({ _id: id });
  return toClientProduct(updated);
}
