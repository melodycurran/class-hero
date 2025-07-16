import Categories from "@/app/(routes)/worksheet-generator/categories"
import styles from "../../page.module.css"
import { Suspense } from "react"

export default function WorksheetLibrary() {
    function Fallback() {
        return <div>Loading types...</div>
    }

    return (
        <div className={styles.libraryContainer}>
            <Suspense fallback={<Fallback />}>
                <Categories />
            </Suspense>
            <h1>Worksheet Library</h1>
        </div>
    )
}