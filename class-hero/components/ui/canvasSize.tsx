import { WorksheetCanvasSize } from "@/app/services/WorksheetEditor"


export default function CanvasSize() {
    return (
        <div className="flex gap-8 items-center">
            {WorksheetCanvasSize.map((size, index) => (
                <div key={index} className="text-[10px] font-sans flex flex-col items-center justify-center cursor-pointer hover:scale-110 translate-all canvasSize">
                    <size.icon />
                    <h2>{size.name}</h2>
                </div>
            ))}
        </div>
    )
}