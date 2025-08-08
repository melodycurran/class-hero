'use client'
import { CloudCheck } from "lucide-react"
import { useActionState, useState, useEffect, useRef } from "react"
import { ProjectDataType } from '@/lib/definitions'
import { ProjectDataProps } from "@/lib/definitions"
import { useSession } from "next-auth/react"
import { useDebounce } from "use-debounce"
import { updateFields } from "@/lib/actions"
import CanvasContext from "@/context/worksheetEditorContext"



export default function SaveProjectToDbForm({ projectId, projectName, width, height, children }: ProjectDataProps) {
    const [data, setData] = useState<ProjectDataType>({})
    const { data: session, status } = useSession()
    const [debouncedState] = useDebounce(data, 5000)
    const formRef = useRef<HTMLFormElement | null>(null)
    const [state, action, isPending] = useActionState(updateFields, undefined)

    useEffect(() => {
        setData({
            projectId: projectId || '',
            projectName: projectName || '',
            width: width || '',
            height: height || '',
        })
    }, [projectId, projectName, width, height])


    useEffect(() => {
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { bubbles: true }))
        }
    }, [debouncedState])


    useEffect(() => {
        if (typeof state === 'string' && state !== undefined) {
            const stateObj = JSON.parse(state)
            setData(stateObj)
        }
    }, [state])


    if (status === 'loading') {
        return <div>...Loading</div>
    }

    return (
        <>
            <form className="w-full ml-3 relative" ref={formRef} action={action}>
                <div className="w-full flex flex-col items-center">

                    <input type="hidden" name="userId" defaultValue={session?.user?._id} />

                    <input name="projectId" value={data.projectId} type="hidden" />

                    <input name="projectName" type="text" value={data?.projectName || ''} placeholder="Type the name of the project" className="w-[30%] border-b border-(--ring) text-xs text-center" onChange={(e) => setData({
                        ...data,
                        projectName: e.target.value || ''
                    })} />

                    <div className="absolute top-0 right-0">

                        <input type="number" min="0" name="width" value={data?.width || ''} placeholder="width" className="border-b border-(--ring) w-[4rem] text-xs leading-5 mr-1 px-1 text-center" onChange={(e) => setData({
                            ...data,
                            width: e.target.value || ''
                        })} />
                        X
                        <input type="number" min="0" name="height" value={data?.height || ''} placeholder="height" className="border-b border-(--ring) w-[4rem] text-xs leading-5 ml-1 px-1 text-center" onChange={(e) => setData({
                            ...data,
                            height: e.target.value || ''
                        })} />
                    </div>
                </div>

                <div className="text-xs w-[30%] h-[2rem] flex gap-1 items-center absolute top-0">{isPending ? <p className="animation-pulse">Saving...</p> : <><p>Saved</p><CloudCheck className="w-4" /></>}</div>
            </form>
            <CanvasContext.Provider value={data}>
                <>
                    {children}
                </>
            </CanvasContext.Provider>
        </>
    )
}