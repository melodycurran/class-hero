'use client'
import { useRef, useEffect, useState, useContext } from "react"
import * as fabric from 'fabric'
import CanvasContext from "@/context/worksheetEditorContext"

export default function WorksheetCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const fabricRef = useRef<fabric.Canvas | null>(null)
    const canvasContext = useContext(CanvasContext)
    console.log('Context', canvasContext)


    useEffect(() => {

        const canvasWidth = Number(canvasContext?.width)
        const canvasheight = Number(canvasContext?.height)

        let scale = (canvasWidth > 700 || canvasheight > 700) ? .25 : .75

        if (!canvasRef.current) return

        const canvasInstance = new fabric.Canvas(canvasRef.current, {
            width: canvasWidth * scale,
            height: canvasheight * scale,
            backgroundColor: 'white'
        })

        canvasInstance?.renderAll();

        fabricRef.current = canvasInstance

        const deviceRatio = window.devicePixelRatio || 1

        if (deviceRatio !== 1) {
            canvasInstance.set({
                width: canvasWidth * deviceRatio,
                height: canvasheight * deviceRatio,
                zoom: 1 / deviceRatio
            })
        } else {
            let scale = (canvasWidth > 700 || canvasheight > 700) ? 0.25 : 0.75;
            canvasInstance.set({
                width: canvasWidth * scale,
                height: canvasheight * scale
            });
        }

        canvasInstance.renderAll()

        return () => {
            canvasInstance.dispose()
        }

    }, [canvasContext.width, canvasContext.height, canvasContext.projectName])

    return (
        <div className="w-full h-full mt-4 ml-3 flex justify-center drop-shadow-lg">
            <canvas id="canvas" ref={canvasRef} />
        </div>
    )
}

