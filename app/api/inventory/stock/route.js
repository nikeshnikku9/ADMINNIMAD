import { updateProductStock } from "@/lib/inventory-service";

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.productId || !data.type) {
      return Response.json(
        { error: "Product and stock update type are required." },
        { status: 400 }
      );
    }

    const product = await updateProductStock(data);
    return Response.json(product);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
