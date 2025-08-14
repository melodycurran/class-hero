import { useEffect, useState, useRef } from "react"
import { ImageKitImagesType } from "@/lib/definitions"
import Image from "next/image"
import { useCanvasInstance } from "@/components/ui/providerDiv"
import { FabricImage } from "fabric";
import AITransform from "../Shareable/AITransform";
import { Button } from "@/components/ui/button";



export default function ImageKitAI() {
    const [images, setImages] = useState<ImageKitImagesType[]>()
    const [url, setUrl] = useState('')
    const { canvasInit } = useCanvasInstance()
    const divRef = useRef(null)


    useEffect(() => {

        async function fetchImageKitImages() {
            const privateKey = process.env.NEXT_IMAGEKIT_PRIVATE_KEY

            if (!privateKey) return
            const creds = privateKey + ':'

            const params = {
                page: 1,
                per_page: 20,
            }

            const encodedKey = Buffer.from(creds).toString('base64')
            const url = `https://api.imagekit.io/v1/files?${params}`

            const response = await fetch(url, {
                headers: {
                    Authorization: 'Basic ' + encodedKey
                }
            })
                .then((res) => res.json())
                .then((res) => {
                    const resArray: ImageKitImagesType[] = res
                    return resArray
                })
            if (!response) {
                return response
            }

            const images = response.filter((file) => file?.fileType === 'image')

            setImages(images)

        }

        fetchImageKitImages()


    }, [])


    async function AddImageToCanvas() {
        if (!url) return

        const fabricImage = await FabricImage.fromURL(url,
            { crossOrigin: 'anonymous' }
        )
        canvasInit.add(fabricImage)
        canvasInit.renderAll()

    }

    if (!divRef.current) return
    const div = divRef.current

    return (
        <>
            <div className=" grid grid-cols-2 mt-4">
                {images?.map((image, index) => (
                    <div key={index} className="w-full mb-3" onClick={() => setUrl(image.url)}>
                        <Image src={image.thumbnail} alt={image.name} width={100} height={50}></Image>
                    </div>
                ))}
            </div>
            {url &&
                <div className="absolute w-[400px] p-5 bg-white top-100 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-(--radius) flex flex-col items-center"
                    ref={divRef}>
                    <Image src={url} alt="Transform AI Image" width={300} height={300} />
                    <AITransform />
                    <Button className="mt-2" onClick={AddImageToCanvas}>Apply to Canvas</Button>
                </div>
            }
        </>
    )
}