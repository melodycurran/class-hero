import { processIndividualWorksheet } from "@/lib/worksheetQueries"
import Image from "next/image"
import AddToCart from "@/components/ui/addToCartBtn"

export default async function IndividualLibraryWorksheet(props: { params: Promise<{ id: string }> }) {
    const params = await props.params
    const id = params.id

    const worksheetData = await processIndividualWorksheet(id)
    return (
        <div className="my-[1rem] mx-auto w-full md:w-1/2 lg:w-2/5 font-sans text-sm pb-6">
            {worksheetData &&
                <div className="border border-(--ring) border-solid rounded-(--radius) shadow-lg bg-white">
                    <section className="w-5/6 my-[1.5rem] mx-auto flex flex-col items-center">
                        <h3 className="font-bold text-lg">{worksheetData.title}</h3>
                        <Image src={worksheetData.image} alt={worksheetData.alt} width={200} height={300} />
                        <p className="pt-3">{Number(worksheetData.price) === 0 ? 'FREE' : `$${Number(worksheetData.price).toFixed(2)}`}</p>
                        <p className="leading-9">{worksheetData.short_desc}</p>
                        <AddToCart title={worksheetData.title} price={Number(worksheetData.price)} className="w-full" />
                    </section>
                    <section className="p-6">
                        <h4 className="font-bold leading-8">Description</h4>
                        <p className="text-xs leading-5">{worksheetData.long_desc}</p>
                    </section>

                </div>
            }
        </div>
    )
}