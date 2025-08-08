'use client'
import { Button } from "./button"
import { DataProps } from "@/lib/definitions"

export default function AddToCart({ title, price, className }: DataProps) {
    const data =
    {
        title: title,
        price: price
    }

    return (
        <Button onClick={
            () => {
                window.localStorage.setItem("cart-items", JSON.stringify(data))
            }
        } className={className}>Add to Cart</Button>
    )
}