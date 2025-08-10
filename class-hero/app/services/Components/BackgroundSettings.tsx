'use client'
import ColorPicker from "../Shareable/ColorPicker"
import { useState } from "react"
import { useCanvasInstance } from "@/components/ui/providerDiv"


export default function BackgroundSettings() {
    const [bgColor, setBgColor] = useState('')
    const { canvasInit } = useCanvasInstance()

    function onColorChange(color: string) {
        setBgColor(color)
        canvasInit?.set({
            backgroundColor: color,
            backgroundImage: null
        })
        canvasInit.renderAll()
    }

    return (
        <ColorPicker value={bgColor}
            onColorChange={(v) => onColorChange(v)}
        />

    )
}
