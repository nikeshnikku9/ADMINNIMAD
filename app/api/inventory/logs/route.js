import { getDb } from "@/lib/mongodb";
import { toClientLog } from "@/lib/inventory-service";

export async function GET(req) {
  try {
    const db = await getDb();
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const limit = Math.min(200, Math.max(1, Number(searchParams.get("limit") || 50)));

    const query = search
      ? {
          $or: [
            { productName: { $regex: search, $options: "i" } },
            { sku: { $regex: search, $options: "i" } },
            { barcode: { $regex: search, $options: "i" } },
            { reason: { $regex: search, $options: "i" } },
            { invoiceRef: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const logs = await db
      .collection("stock_logs")
      .find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();

    return Response.json({ logs: logs.map(toClientLog) });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
