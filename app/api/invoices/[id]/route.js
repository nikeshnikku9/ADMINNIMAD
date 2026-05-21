import { getDb } from "@/lib/mongodb";
import { parseMongoId, updateProductStock } from "@/lib/inventory-service";

export async function DELETE(_req, { params }) {
  try {
    const db = await getDb();
    const id = parseMongoId(params.id);
    const invoice = await db.collection("invoices").findOne({ _id: id });

    if (!invoice) {
      return Response.json({ error: "Invoice not found." }, { status: 404 });
    }

    if (invoice.status === "deleted") {
      return Response.json({ ok: true });
    }

    for (const item of invoice.items || []) {
      await updateProductStock({
        productId: item.productId || item._id,
        type: "return",
        quantity: item.quantity,
        reason: "Stock restored because invoice was deleted",
        invoiceRef: invoice.invoiceNumber,
        adminName: "System",
      });
    }

    await db.collection("invoices").updateOne(
      { _id: id },
      {
        $set: {
          status: "deleted",
          deletedAt: new Date(),
        },
      }
    );

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
