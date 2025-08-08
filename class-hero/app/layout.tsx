import type { Metadata } from "next";
import "@/app/globals.css";
import { jua } from '@/components/ui/fonts'
import Footer from "@/components/ui/footer"
import { Suspense } from "react";
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
    title: "Class Hero",
    description: "A library of K-12 printable classroom worksheet",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${jua.className} `}>
                <main>
                    <div id="app">
                        <Suspense fallback={<WorksheetSkeleton />}>
                            {children}
                            <Toaster />
                        </Suspense>
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
