import ColorPicker from "../Shareable/ColorPicker";
import { useState } from "react";
import { useCanvasInstance } from "@/components/ui/providerDiv";

export default function FillColor() {
    const [fillColor, setFillColor] = useState('#000')
    const { canvasInit } = useCanvasInstance()

    function onColorChange(color: string) {
        setFillColor(color)
        const activeObject = canvasInit?.getActiveObject()
        if (activeObject) {
            activeObject?.set({
                fill: color
            })
            canvasInit?.renderAll()
        }


    }

    return (
        <ColorPicker value={fillColor} onColorChange={(value) => onColorChange(value)} />
    )
}