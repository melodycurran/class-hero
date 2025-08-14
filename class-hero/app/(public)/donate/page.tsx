'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useActionState, useEffect, useState } from "react"
import { processPayment } from "@/lib/actions"
import Loading from "@/components/ui/loading"
import { toast } from "sonner"

export default function Donation() {
    const [state, action, isPending] = useActionState(processPayment, { message: '', success: false })
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (state.message) {
            setMessage(state.message)
            toast(state.message)
        }
        setMessage('')
    }, [state.message])


    return (
        <div className="p-5 text-center w-full">
            <h1>We appreciate your Support!</h1>
            <p className="font-sans text-sm">Proceeds will help bear the cost of maintaining this website</p>

            <form className="p-2 w-full md:w-1/2 lg:w-1/3 flex flex-col justify-self-center items-center bg-white my-6 rounded-(--radius)" action={action}>
                <h2 className="font-sans text-xs pt-2">Use this form to send donation</h2>
                <div className="flex gap-2 items-center w-5/6 mt-3 ">
                    <label htmlFor="fname" className="text-xs w-1/3">First Name: </label>
                    <Input type="text" name="fname" id="fname" className="mt-3 w-full" />
                </div>
                <div className="flex gap-2 items-center w-5/6 mt-3">
                    <label htmlFor="lname" className="text-xs w-1/3">Last Name: </label>
                    <Input type="text" name="lname" id="lname" className="mt-3 w-full" />
                </div>
                <div className="flex gap-2  items-center w-5/6 mt-3">
                    <label htmlFor="email" className="text-xs w-1/3">Email: </label>
                    <Input type="text" name="email" id="email" className="mt-3 w-full" />
                </div>
                <div className="flex gap-2 items-center w-5/6 mt-3">
                    <label htmlFor="cardNum" className="text-xs w-1/3">Credit card: </label>
                    <Input type="number" min="0" name="cardNum" id="cardNum" className="mt-3 w-full" />
                </div>
                <div className="flex gap-2  items-center w-5/6 mt-3">
                    <label htmlFor="cvv" className="text-xs w-1/3">CVV: </label>
                    <Input type="number" name="cvv" id="cvv" className="mt-3 w-full" />
                </div>

                <Button type="submit" className="mt-6">{isPending ? <Loading /> : 'Submit Donation'}</Button>
            </form>
        </div>
    )
}