'use client'
import { usePathname } from "next/navigation";
import Header from "@/components/ui/header";

export default function SampleLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const pathname = usePathname();
    const hideHeaderPaths = ['/sample'];

    const shouldHideHeader = hideHeaderPaths.includes(pathname);
    return (

        <>
            {children}

        </>
    );
}
