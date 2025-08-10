'use client'
import React, { useRef, useEffect, useState, useContext } from "react"
import * as fabric from 'fabric'
import CanvasContext from "@/context/worksheetEditorContext"
import { useCanvasInstance } from "./providerDiv"

export default function WorksheetCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const canvasContext = useContext(CanvasContext)
    const { canvasInit, setcanvasInstance } = useCanvasInstance()
    console.log('Context', canvasInit?.backgroundColor)


    useEffect(() => {

        const canvasWidth = Number(canvasContext?.width)
        const canvasheight = Number(canvasContext?.height)

        let scale = (canvasWidth > 700 || canvasheight > 1000) ? .25 : .75

        if (!canvasRef.current) return

        const canvasInstance = new fabric.Canvas(canvasRef.current, {
            width: canvasWidth * scale,
            height: canvasheight * scale,
            backgroundColor: canvasInit?.backgroundColor ?? '#fff',
            preserveObjectStacking: true
        })

        canvasInstance?.renderAll();

        const deviceRatio = window.devicePixelRatio || 1

        if (deviceRatio !== 1) {
            canvasInstance.set({
                width: canvasWidth * deviceRatio,
                height: canvasheight * deviceRatio,
                zoom: 1 / deviceRatio
            })
        } else {
            let scale = (canvasWidth > 700 || canvasheight > 1000) ? 0.25 : 0.75;
            canvasInstance.set({
                width: canvasWidth * scale,
                height: canvasheight * scale
            });
        }

        canvasInstance.renderAll()
        setcanvasInstance(canvasInstance)

        return () => {
            canvasInstance.dispose()
        }

    }, [canvasContext.width, canvasContext.height, canvasContext.projectName])


    useEffect(() => {
        function handleDelete(event: KeyboardEvent) {

            if (event.key === 'Delete') {
                if (canvasInit) {
                    const active = canvasInit.getActiveObject()
                    if (active) {
                        canvasInit.remove(active)
                        canvasInit.renderAll()
                    }
                }
            }
        }

        document.addEventListener('keydown', handleDelete)
        return () => document.removeEventListener('keydown', handleDelete)
    }, [canvasInit])

    return (
        <div className="w-full h-full mt-4 ml-3 flex justify-center drop-shadow-lg">
            <canvas id="canvas" ref={canvasRef} />
        </div>
    )
}

