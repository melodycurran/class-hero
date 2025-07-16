"use client"

import styles from "../../page.module.css"
import Categories from "@/app/(routes)/worksheet-generator/categories"
import Button from "@/app/ui/button"
import Preview from "./preview"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import WorksheetType from "@/app/(routes)/worksheet-generator/worksheet-types"
import { WorksheetSkeleton } from "../../ui/loadingSkeleton"
import { Suspense } from "react"
import WordTracer from "./word-tracer"
import Link from "next/link"

export default function WorksheetGenerator() {
    const [input, setInput] = useState("")
    const searchParams = useSearchParams()
    const category = searchParams.get('category')?.toString()
    const type = searchParams.get('type')?.toString()

    function handleChange(e) {
        setInput(e.target.value)
    }


    return (

        <Suspense fallback={<WorksheetSkeleton />}>
            <div className={styles.generatorContainer}>
                <Suspense fallback={<WorksheetSkeleton />}>
                    <Categories />
                </Suspense>
                {category === 'reading' && type === 'word-tracer' ? (
                    <>
                        <h1>Worksheet Generator - {type.split("-")}</h1>
                        <textarea value={input} onChange={handleChange}
                        />
                        <Preview>
                            <WordTracer>{input}</WordTracer>
                        </Preview>

                        <Button>
                            <Link href='/worksheet-generator/pdf' target='_blank'>Generate PDF</Link>
                        </Button>
                    </>) : (
                    <Suspense fallback={<WorksheetSkeleton />}><WorksheetType type={category} /></Suspense>)}
            </div>
        </Suspense>

    )

}