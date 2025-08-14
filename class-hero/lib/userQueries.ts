import connectDB from "./database"
import User from "@/app/models/User"

export async function saveNewUserData(data: object | undefined) {
    await connectDB()
    try {
        const response = await User.insertMany(data)
        return response
    } catch (error: any) {
        return {
            message: error.message,
            errors: { error }
        }
    }
}