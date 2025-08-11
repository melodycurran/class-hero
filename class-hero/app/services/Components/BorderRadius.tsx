import { Slider } from "@/components/ui/slider"
import { useCanvasInstance } from "@/components/ui/providerDiv"

export default function BorderRadius() {
    const { canvasInit } = useCanvasInstance()

    function onBorderRadiusChange(radius: number) {
        const activeObject = canvasInit?.getActiveObject()
        if (activeObject) {
            activeObject?.set({
                rx: radius,
                ry: radius
            })
            canvasInit?.renderAll()
        }

    }
    return (
        <div className="w-[15rem]">
            <h2 className="mb-2">Border Radius</h2>
            <Slider defaultValue={[0]} max={100} step={1} onValueChange={(value) => onBorderRadiusChange(value[0])} />
        </div>
    )
}