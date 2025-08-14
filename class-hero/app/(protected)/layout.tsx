import { Suspense } from "react";
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"
import Providers from "@/app/providers";
import { Toaster } from "@/components/ui/sonner"


export default function ProtectedRootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className="row-start-2 row-end-3 w-full h-[100vh]">

            <Suspense fallback={<WorksheetSkeleton />}>
                <Providers>
                    {children}
                </Providers>
                <Toaster />
            </Suspense>

        </main>
    );
}