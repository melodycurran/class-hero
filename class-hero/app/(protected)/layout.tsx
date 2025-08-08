
import { Suspense } from "react";
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"
import Providers from "@/app/providers";
import { Toaster } from "@/components/ui/sonner"

export default function ProtectedRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="w-full h-screen">
            <Suspense fallback={<WorksheetSkeleton />}>
                <Providers>
                    {children}
                </Providers>
                <Toaster />
            </Suspense>
        </div>
    );
}