import { useEffect, useState } from "react"
import Image from "next/image"
import { UnsplashListType } from "@/lib/definitions"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { useDebounce } from "use-debounce"
import { useCanvasInstance } from "@/components/ui/providerDiv"
import { FabricImage } from "fabric"


export default function SearchImages() {
    const [imageList, setImageList] = useState<UnsplashListType[]>([])
    const [searchTerm, setSearchTerm] = useState('gradient')
    const [debouncedState] = useDebounce(searchTerm, 2000)
    const { canvasInit } = useCanvasInstance()

    useEffect(() => {

        async function fetchImageList(term: string) {
            const params = {
                query: term,
                page: (1).toString(),
                per_page: (30).toString()
            }

            const queryString = new URLSearchParams(params).toString()
            const url = `https://api.unsplash.com/search/photos?${queryString}`

            const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY

            const headers = new Headers()
            if (accessKey) headers.set('Authorization', 'Client-ID ' + accessKey)

            const result = await fetch(url, {
                headers: headers
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data', data)
                    return data
                })
            setImageList(result?.results)
            console.log('Result', result?.results)
        }

        fetchImageList(searchTerm)

    }, [debouncedState])



    async function handleSendtoCanvas(url: string) {
        const canvasRef = await FabricImage.fromURL(url)
        canvasInit.add(canvasRef)
        canvasInit.renderAll()
    }

    return (
        <>
            <label className="relative" htmlFor="searchImage">
                <Input type="text" name="term" id="searchImage" placeholder="Search images..." className="h-[25px] mt-6 font-sans p-1.5 pr-6 text-[8px]" onChange={(e) => setSearchTerm(e.target.value || 'gradient')} />
                <SearchIcon className="absolute right-0 top-0 p-1 stroke-(--ring)" />
            </label>

            <div className="grid grid-cols-2 gap-2 mt-3 h-[58vh] overflow-auto">
                {imageList && imageList.map((image, index) => (
                    <div key={index} onClick={() => handleSendtoCanvas(image?.urls?.small_s3)} className="hover:cursor-pointer">
                        <Image src={image?.urls?.thumb} alt={image?.alt_description} width={300} height={300} className="w-full h-[70px] object-cover" />
                    </div>
                ))}
            </div>
        </>
    )
}