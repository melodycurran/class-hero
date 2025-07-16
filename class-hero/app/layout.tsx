import type { Metadata } from "next";
import "./ui/globals.css";
import { jua } from './ui/fonts'
import styles from './page.module.css'
import Header from "./ui/header";
import Footer from "./ui/footer"
import { Suspense } from "react";
import { WorksheetSkeleton } from "./ui/loadingSkeleton";


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

        <div id="app" className={styles.app}>
          <Header />
          <main className={styles.main}>
            <Suspense fallback={<WorksheetSkeleton />}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>

      </body>
    </html>
  );
}
