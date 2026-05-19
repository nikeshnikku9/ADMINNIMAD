let products = [
  {
    id: 1,
    name: 'Haldi Powder',
    slug: 'haldi-powder',
    price: 70,
    barcode: '9201234567890',
  },
  {
    id: 2,
    name: 'Lal Mirch Powder',
    slug: 'lal-mirch-powder',
    price: 90,
    barcode: '9201234567891',
  },
];

export async function GET() {
  return Response.json(products);
}

export async function POST(req) {
  const data = await req.json();

  const newProduct = {
    id: Date.now(),
    ...data,
  };

  products.push(newProduct);

  return Response.json(newProduct);
}
