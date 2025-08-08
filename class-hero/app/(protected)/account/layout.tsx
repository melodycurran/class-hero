'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useState } from "react";

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [openSidebar, setopenSidebar] = useState(false)

    return (
        <div className="pt-5 px-3">
            <SidebarProvider open={openSidebar} onOpenChange={setopenSidebar}>
                <AppSidebar />
                <SidebarTrigger />
                {children}
            </SidebarProvider>
        </div>
    );
}