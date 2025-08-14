'use server'
import connectDB from "@/lib/database"
import Project from "@/app/models/Project"
import { revalidatePath } from "next/cache"

export async function insertWorksheetFromEditor(id: string | null, data: object | undefined) {
    await connectDB()
    try {
        const response = await Project.findOneAndUpdate({ projectId: id }, data, { new: true, upsert: true })
        return response
    } catch (error: any) {
        return {
            message: error.message,
            errors: { error }
        }
    }
}

export async function getOneProject(id: string) {
    await connectDB()
    try {
        const data = await Project.findOne({ projectId: id }, { _id: 0, __v: 0 }).exec()
        if (data) {
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
    await connectDB()
    try {
        const data = await Project.findOneAndUpdate(
            { projectId: projectId },
            { $set: updatedObject },
            { new: true, runValidators: true }
        )
        return data
    } catch (error) {
        console.error('Error', error)
        return null
    }
}

export async function getAllProjects(id: string | undefined) {
    await connectDB()
    try {
        const result = await Project.find({ userId: id }, { _id: 0, __v: 0 })

        if (result.length === 0) console.log('error', result)
        return JSON.stringify(result)

    } catch (error) {
        console.error(error)
        return null
    }
}

export async function deleteOneProject(projectId: string | undefined) {
    await connectDB()
    try {
        const result = await Project.deleteOne({ projectId: projectId })

        revalidatePath('/worksheet-editor/projects')

    } catch (error) {
        console.error(error)
        return null
    }
}