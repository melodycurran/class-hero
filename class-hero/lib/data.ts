import { connectDB } from "@/lib/database"
import { ObjectId } from "mongodb"

export async function processSearchQuery(term: string) {
    const { db } = await connectDB()

    try {
        const data = await db.collection('worksheets').find({
            title: { $regex: term, $options: "i" }
        }).toArray()
        return data
    } catch (error) {
        console.error('Error', error)
    }
}

export async function processIndividualWorksheet(id: string) {
    const { db } = await connectDB()
    const mongoID = new ObjectId(id)

    try {
        const data = await db.collection('worksheets').findOne(mongoID)
        console.log(data)
        return data
    } catch (error) {
        console.error('Error', error)
    }
}