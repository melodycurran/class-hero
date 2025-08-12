import { useCanvasInstance } from "@/components/ui/providerDiv";
import { FontFamilyList } from "../FontFamilyList";


export default function FontFamily() {

    const { canvasInit } = useCanvasInstance()

    function onFontChange(fontFamily: string) {
        const activeObject = canvasInit?.getActiveObject()
        if (activeObject) {
            activeObject?.set({
                fontFamily: fontFamily
            })
            canvasInit?.renderAll()
        }

    }
    return (
        <div className="h-[300px] overflow-auto">
            {FontFamilyList.map((font, index) => (
                <h2 key={index} className='mb-2 hover:cursor-pointer'
                    style={{ fontFamily: font }}
                    onClick={() => onFontChange(font)}>
                    {font}
                </h2>
            ))}
        </div>
    )
}