"use client"

import styles from "../../page.module.css"
import Categories from "@/app/ui/worksheets/categories"
import Button from "@/app/ui/button"
// import Preview from "@/app/ui/worksheets/preview"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import WorksheetType from "@/app/ui/worksheets/worksheet-types"

export default function WorksheetGenerator() {
    const [input, setInput] = useState("")
    const searchParams = useSearchParams()
    const params = searchParams.get('category')?.toString()

    function handleChange(e) {
        setInput(e.target.value)
    }

    return (

        <div className={styles.generatorContainer}>
            <Categories />
            <WorksheetType type={params} />
            {/* <h1>Worksheet Generator</h1>
            <textarea
                value={input}
                onChange={handleChange}
            />

            <Button>Generate</Button> */}
        </div>


    )
}