import Image from "next/image"
import Link from "next/link"
import { processSearchQuery } from "@/lib/worksheetQueries"
import AddToCart from "@/components/ui/addToCartBtn"

export default async function LibrarySection({ term }: { term: string }) {

    const resData = await processSearchQuery(term)

    return (
        <div className="flex justify-center gap-2 flex-wrap relative">
            {resData && resData.map((data, index) => (
                <div key={index} className="w-1/2 max-w-[180px] border border-(--ring) border-solid rounded-(--radius) p-2.5 bg-white flex-1">
                    <Link href={`/library/${data._id}`}>
                        <div className="w-full text-xs font-sans flex flex-col justify-between items-center">
                            {data.image && <Image src={data.image} alt={data.alt} width={150} height={300} className="h-30 object-cover" />}
                            <h3 className="leading-7">{data.title}</h3>
                            <p className="leading-7">{Number(data.price) === 0 ? 'FREE' : `$${Number(data.price).toFixed(2)}`}</p>
                        </div>
                    </Link>
                    <AddToCart title={data.title} price={Number(data.price)} className="w-full" />
                </div>
            ))}
        </div>
    )
}