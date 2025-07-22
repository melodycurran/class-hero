import { connectDB } from "@/lib/database";


export async function GET() {
    const { db } = await connectDB()
    const worksheets = await db.collection("worksheets").find({}).toArray()

    return new Response(JSON.stringify(worksheets)), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    }
}