import { Db, MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.5zlwlvq.mongodb.net/class_hero?retryWrites=true&w=majority&appName=Cluster0`;

declare global {
    var _mongoClientPromise: Promise<MongoClient>
}

let cachedClient: MongoClient | null = null
let clientPromise: Promise<MongoClient>
let cachedDb: Db | null = null

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        cachedClient = new MongoClient(uri, {
            maxPoolSize: 10,
            minPoolSize: 0,
        })
        global._mongoClientPromise = cachedClient.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    cachedClient = new MongoClient(uri, {
        maxPoolSize: 10,
        minPoolSize: 0,
    })
    clientPromise = cachedClient.connect()
}

export async function connectDB() {

    const client = await clientPromise;
    cachedDb = client.db("class_hero")

    return { client, db: client.db("class_hero") }

}

