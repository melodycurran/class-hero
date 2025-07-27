import Image from "next/image"
import Link from "next/link"
import { processSearchQuery } from "@/lib/data"
import AddToCart from "@/components/ui/addToCartBtn"

export default async function LibrarySection({ term }: { term: string }) {

    const resData = await processSearchQuery(term)
    return (
        <div className="flex justify-center gap-4 libraryWorksheets">
            {resData && resData.map((data, index) => (
                <div key={index} className="border border-(--ring) border-solid rounded-(--radius) libraryItems">
                    <Link href={`/library/${data._id}`}>
                        <div className=" text-xs font-sans flex flex-col justify-between">
                            {data.image && <Image src={data.image} alt={data.alt} width={150} height={300} className="h-30 object-cover" />}
                            <h3 className="leading-7">{data.title}</h3>
                            <p className="leading-7">{data.price === 0 ? 'FREE' : `$${data.price.toFixed(2)}`}</p>
                        </div>
                    </Link>
                    <AddToCart _id={data._id.toString()} title={data.title} price={data.price} />
                </div>
            ))}
        </div>
    )
}