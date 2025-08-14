'use client'
import { deleteOneProject } from "@/lib/projectQueries"
import { toast } from "sonner"

export default function DeleteProjectButton({ id, name }: { id: string, name: string }) {

    async function handleDelete() {
        if (window.confirm('Are you sure you want to delete this project?')) {
            const result = await deleteOneProject(id)
            toast(name + ' has been deleted')
        }
    }
    return (
        <button onClick={handleDelete} >Delete</button>
    )
}