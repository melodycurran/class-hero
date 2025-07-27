'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Suspense } from "react";
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"
import { useState } from "react";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [openSidebar, setopenSidebar] = useState(false)

    return (
        <>
            <SidebarProvider open={openSidebar} onOpenChange={setopenSidebar}>
                <AppSidebar />
                <SidebarTrigger />
                <Suspense fallback={<WorksheetSkeleton />}>
                    {children}
                </Suspense>
            </SidebarProvider>

        </>

    );
}