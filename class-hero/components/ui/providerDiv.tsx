'use client'
import CanvasContext from "@/context/worksheetEditorContext"
import { ProviderDivProps } from "@/lib/definitions"

export default function ProviderDiv({ children, className, value }: ProviderDivProps) {

    return (
        <CanvasContext.Provider value={value}>
            <div className={className}>
                {children}
            </div>
        </CanvasContext.Provider>
    )
}