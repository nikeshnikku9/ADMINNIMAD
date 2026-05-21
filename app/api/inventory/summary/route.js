import { getDb } from "@/lib/mongodb";
import { ensureInventorySeeded, getStockStatus, toClientLog } from "@/lib/inventory-service";

export async function GET() {
  try {
    await ensureInventorySeeded();
    const db = await getDb();
    const products = await db.collection("products").find({}).toArray();
    const logs = await db
      .collection("stock_logs")
      .find({})
      .sort({ createdAt: -1 })
      .limit(8)
      .toArray();

    const totalProducts = products.length;
    const totalStock = products.reduce((sum, product) => sum + Number(product.stock || 0), 0);
    const lowStock = products.filter(
      (product) => getStockStatus(product.stock, product.lowStockThreshold) === "low-stock"
    ).length;
    const outOfStock = products.filter(
      (product) => getStockStatus(product.stock, product.lowStockThreshold) === "out-of-stock"
    ).length;

    const categoryMap = products.reduce((acc, product) => {
      const key = product.category || "Uncategorized";
      acc[key] = (acc[key] || 0) + Number(product.stock || 0);
      return acc;
    }, {});

    const statusMap = products.reduce(
      (acc, product) => {
        acc[getStockStatus(product.stock, product.lowStockThreshold)] += 1;
        return acc;
      },
      { "in-stock": 0, "low-stock": 0, "out-of-stock": 0 }
    );

    const inventoryValue = products.reduce(
      (sum, product) => sum + Number(product.stock || 0) * Number(product.purchasePrice || 0),
      0
    );

    return Response.json({
      cards: {
        totalProducts,
        totalStock,
        lowStock,
        outOfStock,
        inventoryValue,
      },
      categoryStock: Object.entries(categoryMap).map(([category, stock]) => ({
        category,
        stock,
      })),
      stockStatus: statusMap,
      recentLogs: logs.map(toClientLog),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
