import { getDb } from "@/lib/mongodb";
import {
  cleanProductPayload,
  ensureInventorySeeded,
  toClientProduct,
} from "@/lib/inventory-service";

export async function GET(req) {
  try {
    await ensureInventorySeeded();
    const db = await getDb();
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "all";
    const status = searchParams.get("status") || "all";
    const page = Math.max(1, Number(searchParams.get("page") || 1));
    const limit = Math.min(100, Math.max(1, Number(searchParams.get("limit") || 10)));

    const query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { sku: { $regex: search, $options: "i" } },
        { barcode: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }

    if (category !== "all") {
      query.category = category;
    }

    const allMatching = await db
      .collection("products")
      .find(query)
      .sort({ updatedAt: -1 })
      .toArray();

    const filtered = allMatching
      .map(toClientProduct)
      .filter((product) => status === "all" || product.status === status);

    const total = filtered.length;
    const products = filtered.slice((page - 1) * limit, page * limit);

    return Response.json({
      products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
      },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const product = cleanProductPayload(data);

    if (!product.name || !product.sku || !product.barcode) {
      return Response.json(
        { error: "Product name, SKU and barcode are required." },
        { status: 400 }
      );
    }

    const db = await getDb();
    const exists = await db.collection("products").findOne({
      $or: [{ sku: product.sku }, { barcode: product.barcode }],
    });

    if (exists) {
      return Response.json(
        { error: "SKU or barcode already exists." },
        { status: 409 }
      );
    }

    const now = new Date();
    const result = await db.collection("products").insertOne({
      ...product,
      createdAt: now,
      updatedAt: now,
    });

    const created = await db.collection("products").findOne({ _id: result.insertedId });

    if (created.stock > 0) {
      await db.collection("stock_logs").insertOne({
        productId: created._id,
        productName: created.name,
        sku: created.sku,
        barcode: created.barcode,
        type: "opening",
        quantity: created.stock,
        previousStock: 0,
        newStock: created.stock,
        reason: "Opening stock while creating product",
        supplierNote: data.supplierNote || "",
        invoiceRef: "",
        adminName: data.adminName || "Admin",
        createdAt: now,
      });
    }

    return Response.json(toClientProduct(created), { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
