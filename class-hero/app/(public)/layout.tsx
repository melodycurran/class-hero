import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "../../components/ui/header";
import { Suspense } from "react";
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Class Hero",
  description: "A library and editor of K-12 printable classroom worksheet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Suspense fallback={<WorksheetSkeleton />}>
        <main className="row-start-2 row-end-3">
          {children}
        </main>
        <Toaster />
      </Suspense>
    </div>
  );
}
