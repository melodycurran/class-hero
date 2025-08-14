'use client'
import { useActionState, useState, useEffect } from "react"
import { ProjectDataType } from '@/lib/definitions'
import { ProjectDataProps } from "@/lib/definitions"
import { useSession } from "next-auth/react"
import { updateFields } from "@/lib/actions"
import CanvasContext from "@/context/worksheetEditorContext"
import Loading from "./loading"
import { useCanvasInstance } from "./providerDiv";
import { Save, Download } from "lucide-react"
import { Button } from "./button"
import { toast } from "sonner"
import jsPDF from 'jspdf';



export default function SaveProjectToDbForm({ projectId, projectName, width, height, jsonTemplate, children }: ProjectDataProps) {
    const [data, setData] = useState<ProjectDataType>({
        projectId: '',
        created_at: null,
        height: '',
        jsonTemplate: '',
        projectName: '',
        userId: null,
        width: ''
    })
    const { data: session, status } = useSession()
    const [state, action, isPending] = useActionState(updateFields, undefined)
    const { canvasInit } = useCanvasInstance()
    const [canvasObj, setCanvasObj] = useState('')


    useEffect(() => {
        setData({
            projectId: projectId || '',
            projectName: projectName || '',
            width: width || '',
            height: height || '',
            jsonTemplate: jsonTemplate || ''
        })
    }, [projectId, projectName, width, height, jsonTemplate])


    useEffect(() => {
        if (typeof state === 'string' && state !== undefined) {
            const stateObj = JSON.parse(state)
            setData(stateObj)
        }
    }, [state])


    useEffect(() => {

        if (!canvasInit) return
        const stringifyCanvasData = JSON.stringify(canvasInit.toJSON())

        setCanvasObj(stringifyCanvasData)

    }, [canvasInit, state])

    function handleExport() {
        const canvasWidth = Number(width)
        const canvasHeight = Number(height)

        const pngImg = canvasInit?.toDataURL({
            format: 'png',
            quality: 1,
            multiplier: 2
        })

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [canvasWidth, canvasHeight],
        })

        pdf.addImage(pngImg, 'PNG', 0, 0, canvasWidth, canvasHeight)
        pdf.save(projectName + '.pdf')
    }


    if (status === 'loading') {
        return <Loading />
    }

    return (
        <>
            <form className="w-full ml-3 relative" action={action}>
                <div className="w-full flex flex-col items-center">

                    <input type="hidden" name="userId" defaultValue={session?.user?._id} />

                    <input name="projectId" value={data.projectId} type="hidden" />

                    <input name="projectName" type="text" value={data?.projectName || ''} placeholder="Type the name of the project" className="w-[30%] border-b border-(--ring) text-xs text-center" onChange={(e) => setData({
                        ...data,
                        projectName: e.target.value || ''
                    })} />

                    <div className="absolute top-0 right-0 mr-3">

                        <input type="number" min="0" name="width" value={data?.width || ''} placeholder="width" className="border-b border-(--ring) w-[4rem] text-xs leading-5 mr-1 px-1 text-center" onChange={(e) => setData({
                            ...data,
                            width: e.target.value || ''
                        })} />
                        X
                        <input type="number" min="0" name="height" value={data?.height || ''} placeholder="height" className="border-b border-(--ring) w-[4rem] text-xs leading-5 ml-1 px-1 text-center" onChange={(e) => setData({
                            ...data,
                            height: e.target.value || ''
                        })} />px
                        <input type="hidden" name="jsonTemplate" value={canvasObj} />
                    </div>
                </div>

                <Button title="Save Project" type="submit" className="text-xs h-[2rem] flex gap-1 items-center absolute top-0 ">
                    {isPending ? <Loading /> : <Save />}
                </Button>
            </form>
            <Button title="Export as PDF" className="text-xs h-[2rem] flex gap-1 items-center absolute top-20 left-43" onClick={handleExport}>
                <Download />
            </Button>
            <CanvasContext.Provider value={data}>
                {children}
            </CanvasContext.Provider>

        </>
    )
}