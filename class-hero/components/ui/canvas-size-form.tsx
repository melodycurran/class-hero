'use client'
import { useState, useActionState, useEffect } from "react"
import { Input } from "./input"
import { Button } from "./button"
import { CanvasProps } from "@/lib/definitions"
import { saveDesignData } from '@/lib/actions'
import { CircleXIcon, LoaderPinwheelIcon } from 'lucide-react'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function CanvasSizeForm({ width, height, onClick }: CanvasProps) {
    const [state, action, isPending] = useActionState(saveDesignData, undefined)
    const [canvasWidth, setcanvasWidth] = useState<number>(0)
    const [canvasHeight, setcanvasHeight] = useState<number>(0)
    const { data: session, status } = useSession()

    console.log('User', session)
    console.log('State', state)

    useEffect(() => {
        setcanvasWidth(width ?? 0)
        setcanvasHeight(height ?? 0)
    }, [width, height])

    if (status === 'loading') {
        return <div>...Loading</div>
    } else if (status !== 'authenticated') {
        redirect('/login')
    }

    return (
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/4 h-1/2 bg-white px-3 drop-shadow-lg rounded-(--radius) flex flex-col justify-center font-sans">
            <CircleXIcon className='absolute top-1 right-3 w-[1rem]' onClick={onClick} />
            <form action={action} className="flex flex-col gap-3">
                <Input type="hidden" name="userId" value={session?.user?._id} />
                <Input type="text" name="projectName" placeholder="Enter project name" />
                <Input type="number" name="width" value={canvasWidth || ''} onChange={(e) => setcanvasWidth(Number(e.target.value))} placeholder="Enter width" />
                <Input type="number" name="height" value={canvasHeight || ''} onChange={(e) => setcanvasHeight(Number(e.target.value))} placeholder="Enter height" />
                <Button>{isPending ? <LoaderPinwheelIcon className='animate-spin' /> : 'Create'}</Button>
            </form>
        </div>
    )

}