import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  let mongoose: MongooseCache | undefined;
}

const globalWithMongoose = global as typeof globalThis & {
  mongoose?: MongooseCache;
};

let cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = {
    conn: null,
    promise: null,
  };
}

async function connectMongo(): Promise<typeof mongoose> {
  const localCache = globalWithMongoose.mongoose!;
  
  if (localCache.conn) return localCache.conn;

  if (!localCache.promise) {
    localCache.promise = mongoose.connect(MONGODB_URI);
  }

  localCache.conn = await localCache.promise;
  return localCache.conn;
}


export default connectMongo;
