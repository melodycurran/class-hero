
import LoginForm from "@/components/ui/login-form"
import { Suspense } from "react"
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"
import FacebookSignIn from "@/components/ui/facebookSignIn"
import GmailSignIn from "@/components/ui/gmailSignIn"
import Link from "next/link"


export default function Login() {

    return (
        <div className="w-1/3 min-w-64 loginFormContainer font-sans bg-white rounded-(--radius)">
            <Suspense fallback={<WorksheetSkeleton />}>
                <LoginForm />
                <p className="text-center text-sm leading-6">- Or Log in with -</p>
                <div className="flex items-center justify-center w-full">
                    <FacebookSignIn />
                    <GmailSignIn />
                </div>
            </Suspense>
            <div className="leading-8 text-[10px] text-center">
                <Link href="/account/signup" className="text-[10px]">Create Account</Link> | <Link href="/account/newpassword" className="text-[10px]">Forgot Password</Link>
            </div>
        </div>
    )
}