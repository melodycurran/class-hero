'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import { authenticate } from "@/lib/actions"
import { useActionState } from "react"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { toast } from "sonner"

export default function LoginForm() {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate, undefined
    )
    const [showPw, setshowPw] = useState(false)

    function handlePwVisibility() {
        setshowPw((prevState) => !prevState)
    }

    useEffect(() => {
        if (errorMessage) {
            toast(errorMessage)
        }
    }, [errorMessage])

    useEffect(() => {
        if (callbackUrl) {
            toast(`Log in to proceed to your account`)
        }
    }, [callbackUrl])

    return (
        <>
            <h2>Login</h2>

            <form action={formAction}>
                <label htmlFor="email" className="text-xs text-left">Email</label>
                <Input id="email" name="email" type="email" placeholder="Enter you email address" className=" h-[25px] border-gray-500 loginInput" required />

                <label htmlFor="pw" className="text-xs">Password</label>
                <Input type={showPw ? 'text' : 'password'} id="pw" name="pw" placeholder="Enter your password" className=" h-[25px] border-gray-500 relative p-[10px] pr-[2rem]" required />
                <span className="h-3 bottom-55 right-107 absolute" onClick={handlePwVisibility}>
                    {showPw ? <Eye className="w-4 " /> : <EyeOff className="w-4" />}
                </span>

                <input type="hidden" name="redirectTo" value={callbackUrl} />
                <Button aria-disabled={isPending} disabled={isPending} className="w-full h-[25px] text-[10px] loginbtn">Log in</Button>
            </form>
        </>
    )
}