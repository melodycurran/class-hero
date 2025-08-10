'use client'
import DesignContext from "@/context/designContext"
import { ProviderDivProps } from "@/lib/definitions"
import { useState, useContext } from "react"

export default function ProviderDiv({ children, className }: ProviderDivProps) {
    const [canvasInit, setcanvasInstance] = useState()

    return (
        <DesignContext.Provider value={{ canvasInit, setcanvasInstance }}>
            <div className={className}>
                {children}
            </div>
        </DesignContext.Provider>
    )
}

export function useCanvasInstance() {
    const context = useContext(DesignContext)
    if (!context) return
    return context
}