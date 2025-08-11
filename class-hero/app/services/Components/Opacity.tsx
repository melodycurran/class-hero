import { Slider } from "@/components/ui/slider"
import { useCanvasInstance } from "@/components/ui/providerDiv"

export default function Opacity() {
    const { canvasInit } = useCanvasInstance()

    function onOpacityChange(opacity: number) {
        const activeObject = canvasInit?.getActiveObject()
        if (activeObject) {
            activeObject?.set({
                opacity: opacity
            })
            canvasInit?.renderAll()
        }

    }
    return (
        <div className="w-[15rem]">
            <h2 className="mb-2">Opacity</h2>
            <Slider defaultValue={[1]} max={1} step={0.1} onValueChange={(value) => onOpacityChange(value[0])} />
        </div>
    )
}