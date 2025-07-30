import connectDB from "@/lib/database"
import Worksheet from "@/app/models/Worksheet"

export async function processSearchQuery(term: string) {
    await connectDB()

    try {
        let query: any = {}
        query.$or = [{ title: { $regex: term, $options: "i" } }]

        let result = await Worksheet.find(query)
        return result
    } catch (error) {
        console.error('Error', error)
    }
}

export async function processIndividualWorksheet(id: string) {
    await connectDB()
    try {
        const data = await Worksheet.findById(id).exec()
        return data
    } catch (error) {
        console.error('Error', error)
    }
}

export async function insertWorksheetFromEditor() {
    await connectDB()
}

export async function saveNewUserData() {
    return
}