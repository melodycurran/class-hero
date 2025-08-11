import { Slider } from "@/components/ui/slider"
import { useCanvasInstance } from "@/components/ui/providerDiv"

export default function BorderWidth() {
    const { canvasInit } = useCanvasInstance()

    function onWidthChange(width: number) {

        const activeObject = canvasInit?.getActiveObject()
        if (activeObject) {
            activeObject?.set({
                strokeWidth: width
            })
            canvasInit?.renderAll()
        }

    }
    return (
        <div className="w-[15rem]">
            <h2 className="mb-2">Border Width</h2>
            <Slider defaultValue={[33]} max={100} step={1} onValueChange={(value) => onWidthChange(value[0])} />
        </div>
    )
}