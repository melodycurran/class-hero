import CanvasSize from "@/components/ui/canvasSize"
import RecentWorksheet from "@/components/ui/recentWorksheet"


export default function WorksheetEditor() {
    return (
        <div className="flex flex-col font-sans text-sm gap-4 w-full">
            <h2 className="font-bold">Worksheet Editor</h2>
            <section>
                <CanvasSize />
            </section>
            <RecentWorksheet />
        </div>
    )
}