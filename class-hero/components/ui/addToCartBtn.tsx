'use client'
import { Button } from "./button"

interface DataProps {
    title: string,
    price: number,
}
export default function AddToCart({title, price }: DataProps) {
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
        } className="text-xs w-full" >Add to Cart</Button>
    )
}