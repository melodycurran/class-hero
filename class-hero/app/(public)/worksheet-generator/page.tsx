"use client"

import Categories from "@/app/(public)/worksheet-generator/categories"
import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import WorksheetType from "@/app/(public)/worksheet-generator/worksheet-types"
import { Suspense } from "react"
import { ralewayDots } from "../../../components/ui/fonts"
import { Preview } from "./preview"
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"


export default function WorksheetGenerator() {
    const [input, setInput] = useState("")
    const searchParams = useSearchParams()
    const subject = searchParams.get('subject')?.toString()
    const type = searchParams.get('type')?.toString()
    const previewElement = useRef<HTMLDivElement>(null)

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setInput(e.target.value)
    }

    async function handleGeneratePDF() {
        const html2pdf = await import("html2pdf.js")
        const opt = {
            html2canvas: {
                scale: 2,
                letterRendering: true,
                useCORS: true,
            }
        }

        html2pdf().set(opt).from(previewElement).toPdf().save()
    }

    return (
        <div>
            <Suspense fallback={<WorksheetSkeleton />}>
                <Categories />
            </Suspense>
            {subject === 'reading' && type === 'word-tracer' ? (
                <div className="flex flex-col gap-6 items-center pt-[3rem] font-sans">
                    <h3>Worksheet Generator - {(type.charAt(0).toUpperCase() + type.slice(1)).split("-").join(" ")}</h3>

                    <textarea value={input} onChange={handleChange} className="bg-white w-2/5 h-25 rounded-md font-sans text-xs p-[10px]" />

                    <Preview onClick={handleGeneratePDF} ref={previewElement}>
                        <span className={`${ralewayDots.className} textInput`}>{input}</span>
                    </Preview>
                </div>) : subject === 'reading' && type === 'spelling-test' ? (
                    <>
                        <h2>Worksheet Generator - {(type.charAt(0).toUpperCase() + type.slice(1)).split("-").join(" ")}</h2>
                        <textarea value={input} onChange={handleChange} />
                        <Preview onClick={handleGeneratePDF} ref={previewElement}>
                            {input}
                        </Preview>
                    </>
                ) :
                (
                    <Suspense fallback={<WorksheetSkeleton />}><WorksheetType type={subject ?? ""} /></Suspense>
                )

            }
        </div>
    )
}