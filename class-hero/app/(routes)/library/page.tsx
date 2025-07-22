import Categories from "@/app/(routes)/worksheet-generator/categories"
import styles from "../../page.module.css"
import { Suspense } from "react"
import { WorksheetSkeleton } from "@/app/ui/loadingSkeleton"
import Image from "next/image"



export default function WorksheetLibrary() {

    return (
        <div className={styles.libraryContainer}>
            <Suspense fallback={<WorksheetSkeleton />}>
                <Categories />
            </Suspense>
            <h1>Worksheet Library</h1>

            <div className={styles.worksheets}>
                <section>
                    <Image src="/worksheets/placeholder.webp" width={80} height={100} alt="Sample Image" />
                    <h3>Worksheet title</h3>
                    <p>$3.00</p>
                    <button>Add to Cart</button>
                </section>
 
            </div>
        </div>
    )
}