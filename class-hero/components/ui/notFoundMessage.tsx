'use client'
import { Frown, ArrowLeft } from "lucide-react"
import { Button } from "./button"

export default function NotFoundMessage() {
    return (
        <div className="w-1/3 flex flex-col items-center gap-3 my-0 mx-auto pt-6">
            <Frown className="animate-bounce" /><h2>Uh-oh! Page doesn't exist</h2>
            <Button className="w-1/3 font-sans text-xs" onClick={() => history.back()}><ArrowLeft />Go back</Button>
        </div>
    )
}