'use client'
import { useState } from "react"
import { PlusIcon } from "lucide-react"
import CanvasSizeForm from "./canvas-size-form"
import { ProjectDataType } from "@/lib/definitions"


export default function RecentWorksheet({ worksheet }: { worksheet: ProjectDataType[] | null }) {
    const [openform, setOpenForm] = useState(false)
    if (!worksheet) return
    return (
        <div>
            {worksheet.length < 0 ?
                <div>
                    <h2 className="text-xs">You don't have any worksheets created yet</h2>
                    <button className="w-[80%] flex items-center justify-center gap-2 cursor-pointer hover:scale-102 translate-all w-1/4 bg-(--ring) rounded-(--radius) p-2 mt-5" onClick={() => { setOpenForm(prev => !prev) }}>
                        <PlusIcon /><p className="text-[.75rem]">Create New Worksheet</p>
                    </button>

                </div>
                :
                "" //Call the function that fetches worksheet designs using userId
            }

            {openform &&
                <CanvasSizeForm onClick={() => setOpenForm(prev => !prev)} />
            }


        </div>

    )
}