import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || 'nimad_zayka';

let client;
let clientPromise;

if (uri && !global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    tls: true,
    serverSelectionTimeoutMS: 10000,
  });
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export async function getDb() {
  if (!uri) {
    throw new Error('MONGO_URL is missing. Add it to your .env.local file before using backend APIs.');
  }

  const c = await clientPromise;
  return c.db(dbName);
}

export default clientPromise;
