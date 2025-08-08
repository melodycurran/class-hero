'use client'
import { useEffect } from "react"
import ErrorMessage from "@/components/ui/errorMessage";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="w-1/3 flex flex-col items-center gap-3 my-0 mx-auto pt-6">
            <ErrorMessage />
            <Button className="w-1/3 font-sans text-xs" onClick={() => reset()}>Try Again</Button>
        </div>
    )

}

