'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

export default function Login() {
    const [inputdata, setInputData] = useState({
        email: '',
        pw: ''
    })
    const [showPw, setshowPw] = useState(false)
    const router = useRouter()

    function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setInputData({
            ...inputdata,
            email: e.target.value
        })
    }

    function handlePw(e: React.ChangeEvent<HTMLInputElement>) {
        setInputData({
            ...inputdata,
            pw: e.target.value
        })
    }

    function handlePwVisibility() {
        setshowPw((prevState) => !prevState)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (inputdata.email === '' || inputdata.pw === '') {
            toast("Please supply the login details")
        } else {
            const data = { data: inputdata }

            try {
                const response = await fetch("/api/login", {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })

                if (response.ok) {
                    const responseData = await response.json()
                    toast('Logged in successfully')
                    setInputData({ email: '', pw: '' })

                    setTimeout(() => {
                        router.push('/account/dashboard')
                        toast('Routing to Dashboard')
                    }, 2000)
                } else {
                    toast("HTTP error occured")
                }
            } catch (error: any) {
                toast(`Error: ${error.message || 'There\'s an error loggin in'}`)
            }
        }
    }
    return (
        <div className="w-1/3 min-w-64 loginFormContainer font-sans bg-white rounded-(--radius)">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="text-xs text-left">Email</label>
                <Input value={inputdata.email} id="email" name="email" type="email" className=" h-[25px] border-gray-500 loginInput" onChange={handleEmail} />

                <label htmlFor="pw" className="text-xs">Password</label>
                <Input type={showPw ? 'text' : 'password'} value={inputdata.pw} id="pw" name="pw" className=" h-[25px] border-gray-500 loginInput" onChange={handlePw} />
                <span className="h-3 absolute bottom-55 right-107" onClick={handlePwVisibility}>
                    {showPw ? <EyeOff className="w-4 " /> : <Eye className="w-4" />}
                </span>

                <Button type="submit" className="w-full h-[25px] text-[10px] loginbtn">Log in</Button>
            </form>

            <div className="leading-8 text-red-600 text-[10px] text-center">
                <Link href="/account/signup" className="text-[10px]">Create Account</Link> | <Link href="/account/newpassword" className="text-[10px]">Forgot Password</Link>
            </div>

        </div>
    )
}