'use client'
import styles from "../../page.module.css"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { Suspense } from "react"

export default function Categories() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    function handleCategory(category: string) {
        const params = new URLSearchParams(searchParams)

        params.set('category', category)
        const splitParams = params.toString().split("&")

        replace(`${pathname}?${splitParams[0]}`)
    }


    return (
        <ul className={styles.categoriesList}>
            
                <li onClick={() => handleCategory('reading')}>Reading</li>
                <li onClick={() => handleCategory('science')}>Science</li>
                <li onClick={() => handleCategory('mathematics')}>Mathematics</li>
                <li onClick={() => handleCategory('filipino')}>Filipino</li>
           
        </ul>
    )
}