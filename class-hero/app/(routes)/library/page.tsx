import Categories from "@/app/(routes)/worksheet-generator/categories"
import { Suspense } from "react"

import Image from "next/image"



export default function WorksheetLibrary() {

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Categories />
            </Suspense>
            <h1>Worksheet Library</h1>

            <div>
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