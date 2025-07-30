import mongoose from 'mongoose'

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.5zlwlvq.mongodb.net/class_hero?retryWrites=true&w=majority&appName=Cluster0`;

interface MongooseCache {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
}

declare global {
    var mongooseGlobal: MongooseCache
}

const globalMongoose: MongooseCache = globalThis.mongooseGlobal || (globalThis.mongooseGlobal = { conn: null, promise: null })

export default async function connectDB(): Promise<typeof mongoose> {
    if (globalMongoose.conn) {
        console.log('Initializing Mongoose connection');
        return globalMongoose.conn;
    }

    if (!globalMongoose.promise) {
        const opts = {
            bufferCommands: false,
            dbName: 'class_hero',
            maxPoolSize: 10,
            minPoolSize: 0,
        };
        globalMongoose.promise = mongoose.connect(uri, opts);
        console.log('Establishing new Mongoose connection...');
    }

    try {
        globalMongoose.conn = await globalMongoose.promise;
        console.log('Mongoose connected successfully.');
        return globalMongoose.conn;
    } catch (error) {
        console.error('Mongoose connection failed:', error);
        globalMongoose.promise = null;
        globalMongoose.conn = null;
        throw error;
    }
}