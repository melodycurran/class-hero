import { useCanvasInstance } from "@/components/ui/providerDiv"
import { IText } from "fabric"
import { useEffect, useState } from "react"


export default function AddText() {

    const { canvasInit } = useCanvasInstance()

    function addText(textType: string) {

        if (!canvasInit) return

        const options = {
            fontWeight: 'bold',
            fontFamily: 'Arial',
            fill: 'black',
            top: 100,
            left: 100
        }

        if (textType === 'heading') {
            const text = new IText('Heading', {
                ...options,
                fontSize: 30
            })
            canvasInit.add(text)
            canvasInit.renderAll()

        } else if (textType === 'subheading') {
            const text = new IText('SubHeading', {
                ...options,
                fontSize: 20
            })
            canvasInit.add(text)
            canvasInit.renderAll()

        } else if (textType === 'paragraph') {
            const text = new IText('Paragraph', {
                ...options,
                fontSize: 12,
                fontWeight: 'normal'
            })
            canvasInit.add(text)
            canvasInit.renderAll()
        }


    }

    return (
        <div className="font-sans mt-5">
            <p className="text-[10px] mb-5 italic">Use BACKSPACE to change the text. DELETE will remove the whole text from the canvas</p>
            <h2 className="font-bold text-2xl p-2 bg-(--french-gray) rounded-(--radius) my-2 text-center cursor-pointer" onClick={() => addText('heading')}>Add Heading</h2>
            <h2 className="font-bold text-md p-2 bg-(--french-gray) rounded-(--radius) my-2 text-center cursor-pointer" onClick={() => addText('subheading')}>Add SubHeading</h2>
            <p className="font-bold text-sm p-2 bg-(--french-gray) rounded-(--radius) my-2 text-center cursor-pointer" onClick={() => addText('paragraph')}>Add Paragraph</p>

        </div>
    )
}