'use client'
import { useState } from "react"
import { PlusIcon } from "lucide-react"


export default function RecentWorksheet() {
    const [recentWorksheetList, setrecentWorksheetList] = useState([])
    return (
        <div>
            <h2 className="font-bold">
                Recent Worksheet
            </h2>
            {recentWorksheetList.length === 0 ? <div>
                <h2 className="text-xs">You don't have any worksheets created yet</h2>
                <button className="flex items-center justify-center gap-2 recentWorksheetBtn cursor-pointer hover:scale-102 translate-all w-1/4 bg-(--ring) rounded-(--radius)">
                    <PlusIcon /><p className="text-[.75rem]">Create New Worksheet</p>
                </button>

            </div> : ""}


        </div>

    )
}