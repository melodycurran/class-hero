import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "../../components/ui/header";
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
    <div className="w-full h-screen grid gap-2 grid-rows-[10%_1fr_10px] justify-self-center px-6">
      <Header />
      <Suspense fallback={<WorksheetSkeleton />}>
        {children}
        <Toaster />
      </Suspense>
    </div>
  );
}
