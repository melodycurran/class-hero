import connectDB from "@/lib/database"
import Worksheet from "@/app/models/Worksheet"
import UserData from "@/app/models/UserData"
import WorksheetDesign from "@/app/models/WorksheetDesign"

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

export async function insertWorksheetFromEditor(id: string | null, data: object | undefined) {
    try {
        const response = await WorksheetDesign.findOneAndUpdate({ projectId: id }, data, { new: true, upsert: true })
        if (response) {
            return {
                success: true
            }
        }
    } catch (error: any) {
        return {
            message: error.message,
            errors: { error }
        }
    }
}

export async function saveNewUserData(data: object | undefined) {
    try {
        const response = await UserData.insertMany(data)
        if (response) {
            return {
                success: true
            }
        }
    } catch (error: any) {
        return {
            message: error.message,
            errors: { error }
        }
    }
}

export async function getProjectData(id: string) {
    try {
        const data = await WorksheetDesign.findOne({ projectId: id }, { _id: 0, __v: 0 }).exec()
        if (data) {
            console.log('Data from server', data)
            return data
        }
    } catch (error: any) {
        return {
            message: error.message,
            errors: { error }
        }
    }
}

export async function updateProjectFields(projectId: string, updatedObject: object) {
    try {
        const data = await WorksheetDesign.findOneAndUpdate(
            { projectId: projectId },
            { $set: updatedObject },
            { new: true, runValidators: true }
        )
        return data
    } catch (error) {
        console.error('Error', error)
        return error
    }
}