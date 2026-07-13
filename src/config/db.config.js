import { MongoClient } from 'mongodb';

export const client = new MongoClient(process.env.DB_URI);
export const db = client.db();
