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
    const date = new Date()
    const stringifiedDate = JSON.stringify(date)

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
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5/6 md:w-1/2 h-[300px] lg:w-1/4 max-h-330px bg-white px-3 drop-shadow-lg rounded-(--radius) flex flex-col justify-center font-sans z-1">
            <CircleXIcon className='absolute top-1 right-3 w-[1rem]' onClick={onClick} />
            <form action={action} className="flex flex-col gap-3">
                <Input type="hidden" name="userId" value={session?.user?._id} />
                <Input type="text" name="projectName" placeholder="Enter project name" />
                <Input type="number" name="width" value={canvasWidth || ''} onChange={(e) => setcanvasWidth(Number(e.target.value))} placeholder="Enter width" />
                <Input type="number" name="height" value={canvasHeight || ''} onChange={(e) => setcanvasHeight(Number(e.target.value))} placeholder="Enter height" />
                <input type="hidden" name="created_at" value={stringifiedDate} />
                <Button>{isPending ? <LoaderPinwheelIcon className='animate-spin' /> : 'Create'}</Button>
            </form>
        </div>
    )

}