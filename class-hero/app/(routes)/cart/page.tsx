'use client'

import { useEffect, useState } from "react"

export default function Cart() {
    const [dataTitle, setdataTitle] = useState("")
    const [dataPrice, setdataPrice] = useState("")

    useEffect(() => {
        const cartData = window.localStorage.getItem("cart-items")
        if (cartData) {
            let parsedData = JSON.parse(cartData)
            let title = parsedData.title
            let price = parsedData.price
            setdataTitle(title)
            setdataPrice(price)
        }
    }, [])

    return (
        <section>
            <p>{dataTitle}</p>
            <p>{dataPrice}</p>
        </section>
    )
}