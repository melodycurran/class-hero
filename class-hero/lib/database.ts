import { Db, MongoClient, ServerApiVersion } from 'mongodb';

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectDB() {

    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.5zlwlvq.mongodb.net/class_hero?retryWrites=true&w=majority&appName=Cluster0`;

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });


    await client.connect();
    cachedClient = client
    cachedDb = client.db("class_hero")

    return { client, db: client.db("class_hero") }

}

