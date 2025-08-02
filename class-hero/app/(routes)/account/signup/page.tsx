import SignUpForm from "@/components/ui/signup"
import { Suspense } from "react"
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"

export default function Signup() {
    return (
        <div className="bg-white my-8 mx-auto w-1/3 min-w-[400px] p-6 rounded-(--radius)">
            <h2>Register for new account</h2>
            <Suspense fallback={<WorksheetSkeleton />}>
                <SignUpForm />
            </Suspense>
        </div>
    )
}