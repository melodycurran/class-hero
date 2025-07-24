'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export default function RootLayout({
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
                <Suspense fallback={<Skeleton className="h-[20px] w-full rounded-full" />}>
                    {children}
                </Suspense>
            </SidebarProvider>

        </>

    );
}