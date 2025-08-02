import connectDB from "@/lib/database"
import Worksheet from "@/app/models/Worksheet"
import UserData from "@/app/models/UserData"

await connectDB()
export async function processSearchQuery(term: string) {

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
    try {
        const data = await Worksheet.findById(id).exec()
        return data
    } catch (error) {
        console.error('Error', error)
    }
}

export async function insertWorksheetFromEditor() {
    return
}

export async function saveNewUserData(data: object | undefined) {
    try {
        const response = await UserData.insertMany(data)
        if (response) {
            return {
                success: true
            }
        }
    } catch (error:any) {
        return {
            message: error.message,
            errors: {error}
        }
    }
}