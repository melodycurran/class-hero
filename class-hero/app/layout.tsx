import type { Metadata } from "next";
import "@/app/globals.css";
import { jua } from '../components/ui/fonts'
import Header from "../components/ui/header";
import Footer from "../components/ui/footer"
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
      <body className={`${jua.className}`}>

        <div id="app" className="w-5/6 h-screen grid gap-2 grid-rows-[10%_1fr_20px] justify-self-center">
          <Header />
          <main>
            <Suspense fallback={<WorksheetSkeleton />}>
              {children}
              <Toaster />
            </Suspense>
          </main>
          <Footer />
        </div>

      </body>
    </html>
  );
}
