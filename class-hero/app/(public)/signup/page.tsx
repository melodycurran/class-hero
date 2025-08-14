import SignUpForm from "@/components/ui/signup"
import { Suspense } from "react"
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"

export default function Signup() {
    return (

        <div className="my-0 mx-auto bg-white mt-3 w-full md:w-1/2 lg:w-1/3 p-6 rounded-(--radius)">
            <h2>Register for new account</h2>
            <Suspense fallback={<WorksheetSkeleton />}>
                <SignUpForm />
            </Suspense>
        </div>

    )
}