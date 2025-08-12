'use client'
import React, { useRef, useEffect, useState, useContext } from "react"
import * as fabric from 'fabric'
import CanvasContext from "@/context/worksheetEditorContext"
import { useCanvasInstance } from "./providerDiv"
import ShapeSettingsNav from "@/app/services/Components/ShapeSettingsNav"
import { CanvasObject } from "@/lib/definitions"
import TextSettingNav from "@/app/services/Components/TextSettingsNav"

export default function WorksheetCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const canvasContext = useContext(CanvasContext)
    const { canvasInit, setcanvasInstance } = useCanvasInstance()
    const [displayShapeShettings, setDisplayShapeShettings] = useState(false)
    const [displayTextSettings, setdisplayTextSettings] = useState(false)

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
            if (event?.key === 'Delete') {
                if (canvasInit) {
                    const active = canvasInit?.getActiveObject()
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


    if (canvasInit) {
        canvasInit.on('selection:created', function (event: fabric.TEventsExtraData) {
            const selectedArray: CanvasObject = event?.selected[0]
            const active = canvasInit?.getActiveObject()

            if (!('text' in selectedArray) && selectedArray?.cornerStyle == 'rect') {
                setDisplayShapeShettings(true)
            }
            else if (active.text) {
                setdisplayTextSettings(true)
            }

        })

        canvasInit.on('selection:cleared', function () {
            setDisplayShapeShettings(false)
            setdisplayTextSettings(false)
        })
    }


    return (
        <div className="relative">
            {displayShapeShettings && <ShapeSettingsNav />}
            {displayTextSettings && <TextSettingNav />}
            <div className="w-full h-full mt-6 ml-3 flex justify-center drop-shadow-lg">
                <canvas id="canvas" ref={canvasRef} />
            </div>
        </div>

    )
}