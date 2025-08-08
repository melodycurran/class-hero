'use client'
import LoginForm from "@/components/ui/login-form"
import { Suspense } from "react"
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"
import FacebookSignIn from "@/components/ui/facebookSignIn"
import GmailSignIn from "@/components/ui/gmailSignIn"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { useEffect, useState } from "react"


export default function Login() {
    const params = useSearchParams()
    const isRegistered = params.get("registered")
    const [toastShown, settoastShown] = useState(false)

    useEffect(() => {
        if (isRegistered === 'true' && !toastShown) {
            toast("Registration successful. You may now log in.")
            settoastShown(true)
        } else if (isRegistered === '' && toastShown) {
            settoastShown(false)
        }
    }, [isRegistered, toastShown])


    return (
        <div className="w-1/3 min-w-64 my-[4rem] mx-auto py-[1rem] px-5 font-sans bg-white rounded-(--radius)">
            <Suspense fallback={<WorksheetSkeleton />}>
                <LoginForm />
                <p className="text-center text-sm leading-6">- Or Log in with -</p>
                <div className="flex items-center justify-center w-full">
                    <FacebookSignIn />
                    <GmailSignIn />
                </div>
            </Suspense>
            <div className="leading-8 text-[10px] text-center">
                <Link href="/signup" className="text-[10px]">Create Account</Link> | <Link href="/newpassword" className="text-[10px]">Forgot Password</Link>
            </div>
        </div>
    )
}