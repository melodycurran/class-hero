import { Shapes } from "../ShapesOptions";
import { Circle, Line, Rect, Triangle } from "fabric";
import { useCanvasInstance } from "@/components/ui/providerDiv";
import { ShapesTypes } from "@/lib/definitions";

export default function ShapesOptions() {

    const { canvasInit } = useCanvasInstance()

    function handleShapeSelection(shape: ShapesTypes) {
        const properties = {
            top: 100,
            left: 100,
            radius: 50,
        }

        if (shape.name === 'Circle') {
            const circle = new Circle({
                ...properties
            })
            canvasInit.add(circle)
        } else if (shape.name === 'Square') {
            const square = new Rect({
                ...properties,
                width: 100,
                height: 100
            })
            canvasInit.add(square)
        } else if (shape.name === 'Rectangle') {
            const rect = new Rect({
                ...properties,
                width: 200,
                height: 100
            })
            canvasInit.add(rect)
        } else if (shape.name === 'Triangle') {
            const triangle = new Triangle({
                ...properties,
                width: 100,
                height: 100
            })
            canvasInit.add(triangle)
        } else if (shape.name === 'Line') {
            const line = new Line([50, 50, 200, 200], {
                ...properties,
                stroke: 'black',
                strokeWidth: 3
            })
            canvasInit.add(line)
        }
        canvasInit.renderAll()
    }


    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-4 gap-1 font-sans my-1">
                {Shapes.map((shape, index) => (
                    <div key={index} className="h-[50px] flex flex-col items-center justify-center hover:cursor-pointer">
                        <shape.icon className="stroke-(--chart-2) stroke-1" onClick={() => handleShapeSelection(shape)} />
                        <h2 className="text-[8px]">{shape.name}</h2>
                    </div>
                ))}
            </div>

        </div>
    )
}