import type { Metadata } from "next";
import "@/app/globals.css";
import { jua } from '../components/ui/fonts'
import Header from "../components/ui/header";
import Footer from "../components/ui/footer"
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton"
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

        <div id="app" className="w-5/6 h-screen grid gap-2 grid-rows-[10%_1fr_50px] justify-self-center">
          <Header />
          <main>
            <Suspense fallback={<Skeleton className="h-[20px] w-[100px] rounded-full" />}>
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
