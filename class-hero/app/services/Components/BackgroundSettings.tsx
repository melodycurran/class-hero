'use client'
import ColorPicker from "../Shareable/ColorPicker"
import { useContext, useState } from "react"
import CanvasContext from "@/context/worksheetEditorContext"


export default function BackgroundSettings() {
    const [bgColor, setBgColor] = useState('')

    function onColorChange(color: string) {
        setBgColor(color)
    }
    console.log(bgColor)

    return (

        <ColorPicker value={bgColor}
            onColorChange={(v) => onColorChange(v)}
        />

    )
}
