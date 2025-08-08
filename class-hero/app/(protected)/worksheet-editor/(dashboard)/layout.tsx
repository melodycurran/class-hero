import { Suspense } from "react";
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"
import { Toaster } from "@/components/ui/sonner"
import Providers from "@/app/providers";
import WorksheetSidebar from "@/components/ui/worksheet-sidebar"


export default function EditorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div id="editor-layout" className="flex w-full p-5">
            <Suspense fallback={<WorksheetSkeleton />}>
                <Providers>
                    <div className="mr-3 w-15px">
                        <WorksheetSidebar />
                    </div>
                    {children}
                </Providers>
                <Toaster />
            </Suspense>
        </div>
    );
}