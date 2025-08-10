import ImageKit from "imagekit"
import { nanoid } from "nanoid";
import { useState } from "react";
import Loading from "@/components/ui/loading";
import { useCanvasInstance } from "@/components/ui/providerDiv";
import { toast } from "sonner";
import { FabricImage } from "fabric";

export default function UploadImage() {
    const [uploading, setUploading] = useState(false)
    const { canvasInit } = useCanvasInstance()


    var imagekit = new ImageKit({
        publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY ?? '',
        privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY ?? '',
        urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ?? ''
    });

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files && e.target.files[0]
        if (file === null) return
        
        if (file && !file?.type.startsWith('image/')) {
            toast(`${file?.type} is not valid. Upload image types only!`)
            setUploading(false)
            return
        }

        const imageType = file?.type.split("/")[1]
        const fileName = nanoid()

        setUploading(true)
        try {
            const imageRef = await imagekit.upload({
                file: file,
                fileName: fileName + '.' + imageType,
                isPublished: true
            })

            setUploading(false)

            if (typeof imageRef === 'object' && imageRef !== null) {
                const imageReftoCanvas = await FabricImage.fromURL(imageRef?.url)

                canvasInit.add(imageReftoCanvas)
                canvasInit.renderAll()
            }
        } catch (error) {
            setUploading(false)
            console.error(error)
        }

    }
    return (
        <div className="w-full flex justify-center">
            <label htmlFor="uploadImage">
                <h2 className="bg-black text-white p-2 w-[5rem] rounded-(--radius) text-center text-[10px] font-sans mt-2 hover:bg-(--chart-2)">{uploading ? <Loading /> : 'Upload'}</h2>
            </label>
            <input type="file" accept="image/*" id="uploadImage" className="hidden" onChange={handleFileUpload} multiple={false} />
        </div>
    )
}