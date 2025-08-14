'use client'
import { WorksheetEditorMenu } from "@/app/services/WorksheetEditor"
import { useState } from "react"
import CanvasSizeForm from "./canvas-size-form"
import { Plus } from "lucide-react"
import Link from "next/link"
import { useSession } from "next-auth/react"


export default function WorksheetSidebar() {
    const [openform, setOpenForm] = useState(false)
    const { data: session } = useSession()

    if (!session) return
    const userId = session?.user?._id
    return (
        <>
            <div className="bg-(--sidebar-ring) rounded-(--radius) flex flex-col items-center gap-1 py-3">

                <div onClick={() => { setOpenForm(prev => !prev) }} className='bg-[rgba(255,192,203,.75)] hover:text-black p-2 hover:rounded-(--radius) rounded-(--radius) cursor-pointer text-xs flex flex-col items-center p-2.5 hover:bg-(--french-gray) hover:rounded-(--radius)'>
                    <Plus />
                    <h3>Create</h3>
                </div>

                {WorksheetEditorMenu.map((menu, index) => (
                    <Link href={menu.name === 'Projects' ? `${menu.path}/${userId}` : menu.path} key={index} className='w-[80%] flex flex-col items-center p-2.5 hover:bg-(--french-gray) hover:rounded-(--radius) rounded-(--radius) cursor-pointer text-xs'>
                        <menu.icon />
                        <h3>{menu.name}</h3>
                    </Link>
                ))}
            </div>

            {openform &&
                <CanvasSizeForm onClick={() => setOpenForm(prev => !prev)} />
            }
        </>
    )
}