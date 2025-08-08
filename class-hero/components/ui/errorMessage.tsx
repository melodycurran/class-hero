import { Frown } from "lucide-react"


export default function ErrorMessage() {
    return (
        <>
            <Frown className="animate-bounce" /><h2>Ooops, something went wrong!</h2>
        </>
    )
}