"use client"

import styles from "../../page.module.css"
import Categories from "@/app/(routes)/worksheet-generator/categories"
import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import WorksheetType from "@/app/(routes)/worksheet-generator/worksheet-types"
import { WorksheetSkeleton } from "../../ui/loadingSkeleton"
import { Suspense } from "react"
import { ralewayDots } from "../../ui/fonts"
import { Preview } from "./preview"

export default function WorksheetGenerator() {
    const [input, setInput] = useState("")
    const searchParams = useSearchParams()
    const category = searchParams.get('category')?.toString()
    const type = searchParams.get('type')?.toString()
    const previewElement = useRef<HTMLDivElement>(null)

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setInput(e.target.value)
    }

    async function handleGeneratePDF() {
        const html2pdf = (await import("html2pdf.js")).default
        const opt = {
            html2canvas: {
                scale: 4,
                letterRendering: true,

            },
        }

        html2pdf().set(opt).from(previewElement.current).save()
    }

    return (
        <div className={styles.generatorContainer}>
            <Suspense fallback={<WorksheetSkeleton />}>
                <Categories />
            </Suspense>
            {category === 'reading' && type === 'word-tracer' ? (
                <>
                    <h2>Worksheet Generator - {(type.charAt(0).toUpperCase() + type.slice(1)).split("-").join(" ")}</h2>

                    <textarea value={input} onChange={handleChange} />

                    <Preview clickAction={handleGeneratePDF} ref={previewElement}>
                        <span className={`${ralewayDots.className} ${styles.tracer}`}>{input}</span>
                    </Preview>

                </>) : category === 'reading' && type === 'spelling-test' ? (
                    <>
                        <h2>Worksheet Generator - {(type.charAt(0).toUpperCase() + type.slice(1)).split("-").join(" ")}</h2>
                        <textarea value={input} onChange={handleChange} />
                        <Preview clickAction={handleGeneratePDF} ref={previewElement}>
                            {input}
                        </Preview>
                    </>
                ) :

                (
                    <Suspense fallback={<WorksheetSkeleton />}><WorksheetType type={category ?? ""} /></Suspense>
                )

            }
        </div>
    )
}