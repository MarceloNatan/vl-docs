import { MongoClient, Db } from 'mongodb';
import { config } from './config';

let clientPromise: Promise<MongoClient> | undefined;

export async function getDb(): Promise<Db> {
  clientPromise ??= new MongoClient(config.MONGODB_URI, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
  }).connect();
  return (await clientPromise).db(config.MONGODB_DATABASE);
}
