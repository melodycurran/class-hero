'use client'
import { WorksheetCanvasSize } from "@/app/services/WorksheetEditor"
import CanvasSizeForm from "./canvas-size-form"
import { useState } from "react"

export default function CanvasSize() {
    const [openform, setOpenForm] = useState(false)
    const [width, setWidth] = useState<number>()
    const [height, setheight] = useState<number>()

    function handleCanvasSize(width: number, height: number) {
        setOpenForm(prev => !prev)
        setWidth(width)
        setheight(height)
    }

    return (
        <div className="flex gap-8 items-center">
            {WorksheetCanvasSize.map((size, index) => (
                <div key={index} id="canvasSize" className="text-[10px] hover:bg-red-500" onClick={() => handleCanvasSize(size.width, size.height)}>
                    <size.icon />
                    <h2>{size.name}</h2>
                </div>
            ))}
            {openform && <CanvasSizeForm width={width} height={height} onClick={() => { setOpenForm(prev => !prev) }} />}
        </div>
    )
}