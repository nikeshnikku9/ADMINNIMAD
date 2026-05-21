import { getDb } from "@/lib/mongodb";
import { updateProductStock } from "@/lib/inventory-service";

function calculateInvoice(items, discount = 0) {
  const rows = items.map((item) => {
    const quantity = Number(item.quantity || 1);
    const price = Number(item.sellingPrice || item.price || 0);
    const gst = Number(item.gst || 0);
    const taxable = quantity * price;
    const gstAmount = (taxable * gst) / 100;

    return {
      ...item,
      quantity,
      price,
      taxable,
      gst,
      cgst: gstAmount / 2,
      sgst: gstAmount / 2,
      total: taxable + gstAmount,
    };
  });

  const subtotal = rows.reduce((sum, item) => sum + item.taxable, 0);
  const gstTotal = rows.reduce((sum, item) => sum + item.cgst + item.sgst, 0);
  const grandTotal = subtotal + gstTotal - Number(discount || 0);

  return { rows, subtotal, gstTotal, discount: Number(discount || 0), grandTotal };
}

export async function GET(req) {
  try {
    const db = await getDb();
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const query = search
      ? {
          $or: [
            { invoiceNumber: { $regex: search, $options: "i" } },
            { "customer.name": { $regex: search, $options: "i" } },
            { "customer.phone": { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const invoices = await db.collection("invoices").find(query).sort({ createdAt: -1 }).toArray();

    return Response.json({
      invoices: invoices.map((invoice) => ({
        ...invoice,
        _id: invoice._id.toString(),
        createdAt: invoice.createdAt?.toISOString?.() || invoice.createdAt,
      })),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const db = await getDb();
    const data = await req.json();

    if (!Array.isArray(data.items) || data.items.length === 0) {
      return Response.json({ error: "Invoice must have at least one product." }, { status: 400 });
    }

    const invoiceCount = await db.collection("invoices").countDocuments();
    const invoiceNumber =
      data.invoiceNumber || `NZ-${new Date().getFullYear()}-${String(invoiceCount + 1).padStart(5, "0")}`;
    const totals = calculateInvoice(data.items, data.discount);
    const now = new Date();

    for (const item of totals.rows) {
      await updateProductStock({
        productId: item.productId || item._id,
        type: "sale",
        quantity: item.quantity,
        reason: "Auto stock deduction from GST invoice",
        invoiceRef: invoiceNumber,
        adminName: data.adminName || "Billing Staff",
      });
    }

    const invoice = {
      invoiceNumber,
      customer: data.customer || {},
      items: totals.rows,
      subtotal: totals.subtotal,
      gstTotal: totals.gstTotal,
      discount: totals.discount,
      grandTotal: totals.grandTotal,
      status: "active",
      createdAt: now,
      updatedAt: now,
    };

    const result = await db.collection("invoices").insertOne(invoice);
    const created = await db.collection("invoices").findOne({ _id: result.insertedId });

    return Response.json({
      ...created,
      _id: created._id.toString(),
      createdAt: created.createdAt.toISOString(),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
