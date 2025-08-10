'use client'
import { WorksheetProjectMenu } from "@/app/services/WorksheetEditor"
import { CircleXIcon } from "lucide-react"
import { useState } from "react"


export default function ProjectSidebar() {
    const [selected, setselected] = useState<Number>()
    const [optionClosed, setoptionClosed] = useState('')

    return (
        <>
            <div className="bg-(--sidebar-ring) rounded-(--radius) flex flex-col items-center justify-center py-1 h-full relative">
                {WorksheetProjectMenu.map((menu, index) => (
                    <div key={index} className="w-full flex flex-col items-center p-1" >
                        <div className={`w-full hover:rounded-(--radius) flex flex-col items-center rounded-(--radius) mb-1 cursor-pointer text-xs hover:bg-(--french-gray) p-1 ${selected === index && 'bg-(--french-gray)'}`} onClick={() => {
                            setselected(index)
                            setoptionClosed('open')
                        }}>
                            <menu.icon />
                            <h3>{menu.name}</h3>
                        </div>
                        {selected === index && optionClosed === 'open' ?
                            <div className={`absolute top-7 left-20 w-[15rem] z-1 p-2 bg-white drop-shadow-lg`}>
                                <CircleXIcon className="w-4 flex justify-self-end absolute hover:stroke-(--chart-4)" onClick={(e) => {
                                    e.stopPropagation()
                                    setoptionClosed('close')
                                }} />
                                <h2 className="text-sm">{menu.name}</h2>
                                <p className="text-xs text-(--chart-3)">{menu.desc}</p>
                                <div>
                                    {menu.component}
                                </div>

                            </div>
                            : ""}

                    </div>
                ))}
            </div>
        </>
    )
}
