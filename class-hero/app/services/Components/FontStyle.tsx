import { useCanvasInstance } from "@/components/ui/providerDiv"
import { Toggle } from "@/components/ui/toggle"
import { Italic, Bold, Underline } from "lucide-react"
import { MdFormatOverline } from 'react-icons/md';
import { FaStrikethrough } from "react-icons/fa6";
import { CgBorderStyleSolid, CgBorderStyleDashed, CgBorderStyleDotted } from "react-icons/cg";
import { useState } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function FontStyle() {
    const { canvasInit } = useCanvasInstance()

    if (!canvasInit) return

    const activeObject = canvasInit?.getActiveObject()

    if (!activeObject) return

    function onStyleClick(style: string) {

        if (activeObject) {
            if (style === 'bold')
                activeObject?.set({
                    fontWeight: activeObject?.fontWeight === 'bold' ? null : 'bold'
                })
            console.log('Active', activeObject)
        }
        if (style === 'italic') {
            activeObject?.set({
                fontStyle: activeObject?.fontStyle === 'italic' ? 'normal' : 'italic'
            })


        }
        if (style === 'underline') {
            activeObject?.set({
                underline: activeObject?.underline ? false : true
            })

        }
        if (style === 'overline') {
            activeObject?.set({
                overline: activeObject?.overline ? false : true
            })

        }
        if (style === 'linethrough') {
            activeObject?.set({
                linethrough: activeObject?.linethrough ? false : true,
            })

        }
        canvasInit.renderAll()


    }
    return (
        <div className="flex items-center gap-1">
            <Toggle size="sm" aria-label="Toggle bold"
                defaultPressed={activeObject?.fontWeight === 'bold'}
                onClick={() => onStyleClick('bold')}>
                <Bold />
            </Toggle>
            <Toggle size="sm" aria-label="Toggle italic"
                defaultPressed={activeObject?.fontStyle === 'italic'}
                onClick={
                    () => onStyleClick('italic')}>
                <Italic />
            </Toggle>
            <Toggle size="sm" aria-label="Toggle underline"
                defaultPressed={activeObject?.underline}
                onClick={() => onStyleClick('underline')}>
                <Underline />
            </Toggle>
            <Toggle size="sm" aria-label="Toggle overline"
                defaultPressed={activeObject?.overline}
                onClick={() => onStyleClick('overline')}>
                <MdFormatOverline />
            </Toggle>
            {/* <Toggle size="sm" aria-label="Toggle linethrough"
                defaultPressed={activeObject?.linethrough} */}
            {/* // onClick={() => onStyleClick('linethrough')} */}
            {/* > */}
            <Popover>
                <PopoverTrigger asChild>
                    <FaStrikethrough />
                </PopoverTrigger>
                <PopoverContent className="font-sans text-2xl w-full p-3">
                    <CgBorderStyleSolid className="hover:cursor-pointer hover:bg-(--french-gray) px-1" />
                    <CgBorderStyleDashed className="hover:cursor-pointer hover:bg-(--french-gray) px-1" />
                    <CgBorderStyleDotted className="hover:cursor-pointer hover:bg-(--french-gray) px-1" />
                </PopoverContent>
            </Popover>


            {/* </Toggle> */}
        </div>
    )
}