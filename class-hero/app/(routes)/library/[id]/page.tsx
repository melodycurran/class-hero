import { processIndividualWorksheet } from "@/lib/data"
import Image from "next/image"
import AddToCart from "@/components/ui/addToCartBtn"

export default async function IndividualLibraryWorksheet(props: { params: Promise<{ id: string }> }) {
    const params = await props.params
    const id = params.id

    const worksheetData = await processIndividualWorksheet(id)
    return (
        <div className="individualWorksheetContainer w-4/6 font-sans text-sm">
            {worksheetData &&
                <div className="border border-(--ring) border-solid rounded-(--radius) shadow-lg bg-white">
                    <section className="w-1/2 individualSection flex flex-col items-center">
                        <h3 className="font-bold text-lg">{worksheetData.title}</h3>
                        <Image src={worksheetData.image} alt={worksheetData.alt} width={200} height={300} />
                        <p className="leading-9">{worksheetData.short_desc}</p>
                        <AddToCart title={worksheetData.title} price={worksheetData.price} />
                    </section>
                    <h4 className="font-bold leading-8">Description</h4>
                    <p className="text-xs leading-5">{worksheetData.long_desc}</p>
                </div>
            }
        </div>
    )
}