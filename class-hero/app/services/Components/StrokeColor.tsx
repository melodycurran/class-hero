import ColorPicker from "../Shareable/ColorPicker";
import { useState } from "react";
import { useCanvasInstance } from "@/components/ui/providerDiv";

export default function StrokeColor() {
    const [strokeColor, setstrokeColor] = useState('#000')
    const { canvasInit } = useCanvasInstance()

    function onColorChange(color: string) {
        setstrokeColor(color)
        const activeObject = canvasInit?.getActiveObject()
        if (activeObject) {
            activeObject?.set({
                stroke: color
            })

            canvasInit?.renderAll()
        }
    }

    return (
        <ColorPicker value={strokeColor} onColorChange={onColorChange} />
    )
}