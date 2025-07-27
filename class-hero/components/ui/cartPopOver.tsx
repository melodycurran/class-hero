'use client'
import { useEffect, useState } from "react"

export default function CartPopOver() {
    const [dataTitle, setdataTitle] = useState("")
    const [dataPrice, setdataPrice] = useState(0)

    useEffect(() => {
        const cartData = window.localStorage.getItem("cart-items")
        if (cartData) {
            let parsedData = JSON.parse(cartData)
            let title = parsedData.title
            let price = parsedData.price
            setdataTitle(title)
            setdataPrice(Number(price))
        }
    }, [])

    return (
        <section className="text-[10px] flex justify-between cartSection leading-6">
            <p>{dataTitle}</p>
            <p>{`$${dataPrice.toFixed(2)}`}</p>
        </section>
    )
}