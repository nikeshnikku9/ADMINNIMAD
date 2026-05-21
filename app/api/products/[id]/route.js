import { getDb } from "@/lib/mongodb";
import {
  cleanProductPayload,
  parseMongoId,
  toClientProduct,
} from "@/lib/inventory-service";

export async function GET(_req, { params }) {
  try {
    const db = await getDb();
    const product = await db.collection("products").findOne({
      _id: parseMongoId(params.id),
    });

    if (!product) {
      return Response.json({ error: "Product not found." }, { status: 404 });
    }

    return Response.json(toClientProduct(product));
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const db = await getDb();
    const id = parseMongoId(params.id);
    const data = await req.json();
    const product = cleanProductPayload(data);

    if (!product.name || !product.sku || !product.barcode) {
      return Response.json(
        { error: "Product name, SKU and barcode are required." },
        { status: 400 }
      );
    }

    const duplicate = await db.collection("products").findOne({
      _id: { $ne: id },
      $or: [{ sku: product.sku }, { barcode: product.barcode }],
    });

    if (duplicate) {
      return Response.json(
        { error: "Another product already uses this SKU or barcode." },
        { status: 409 }
      );
    }

    await db.collection("products").updateOne({ _id: id }, { $set: product });
    const updated = await db.collection("products").findOne({ _id: id });

    return Response.json(toClientProduct(updated));
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(_req, { params }) {
  try {
    const db = await getDb();
    const id = parseMongoId(params.id);

    await db.collection("products").deleteOne({ _id: id });
    await db.collection("stock_logs").deleteMany({ productId: id });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
