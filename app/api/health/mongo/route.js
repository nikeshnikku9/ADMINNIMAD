import { getDb } from "@/lib/mongodb";

function maskMongoUrl(value) {
  if (!value) {
    return "";
  }

  return value.replace(/\/\/([^:]+):([^@]+)@/, "//$1:********@");
}

export async function GET() {
  const startedAt = Date.now();

  try {
    const db = await getDb();
    const result = await db.command({ ping: 1 });

    return Response.json({
      ok: true,
      message: "MongoDB connected successfully.",
      dbName: process.env.DB_NAME || "nimad_zayka",
      mongoUrl: maskMongoUrl(process.env.MONGO_URL),
      ping: result,
      responseMs: Date.now() - startedAt,
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        message: "MongoDB connection failed.",
        dbName: process.env.DB_NAME || "nimad_zayka",
        mongoUrl: maskMongoUrl(process.env.MONGO_URL),
        errorName: error.name,
        errorMessage: error.message,
        responseMs: Date.now() - startedAt,
      },
      { status: 500 }
    );
  }
}
