'use client'
import { Suspense } from "react";
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"
import WorksheetSidebar from "@/components/ui/worksheet-sidebar"

export default function WorksheetEditorLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex gap-4 h-full">
            <Suspense fallback={<WorksheetSkeleton />}>
                <WorksheetSidebar />
                {children}
            </Suspense>
        </div>

    );
}