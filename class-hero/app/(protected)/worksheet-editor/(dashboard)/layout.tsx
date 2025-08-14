import { Suspense } from "react";
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"
import WorksheetSidebar from "@/components/ui/worksheet-sidebar"
import CanvasContext from "@/context/worksheetEditorContext"
import { getAllProjects } from "@/lib/projectQueries"

export default async function EditorLayout({
    children,
}: {
    children: React.ReactNode,

}) {

    return (

        <div id="editor-layout" className="flex w-full py-5">
            <Suspense fallback={<WorksheetSkeleton />}>
                <div className="mr-3 w-15px">
                    <WorksheetSidebar />
                </div>
                {children}
            </Suspense>
        </div>

    );
}