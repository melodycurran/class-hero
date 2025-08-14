import { SearchComponent } from 'stipop-react-sdk';
import { useSession } from 'next-auth/react'
import { useCanvasInstance } from '@/components/ui/providerDiv';
import { FabricImage } from 'fabric';
import { StickerProps } from '@/lib/definitions';


export default function StipopStickers() {

    const { canvasInit } = useCanvasInstance()


    const appApiKey = process.env.NEXT_STIPOP_API_KEY
    if (!appApiKey) return


    const { data: session } = useSession()
    if (!session?.user?._id) return

    async function setStickerToCanvas(urlObj: StickerProps) {

        if (!canvasInit && !urlObj) return

        const url = urlObj?.url
        const sendUrlToCanvas = await FabricImage.fromURL(url,
            { crossOrigin: 'anonymous' }
        )
        canvasInit.add(sendUrlToCanvas)
        canvasInit.renderAll()
    }

    return (
        <div>
            <SearchComponent params={
                {
                    apikey: appApiKey,
                    userId: session?.user?._id,
                    pageNumber: 1,
                    limit: 49
                }
            }
                stickerClick={(url: StickerProps) => setStickerToCanvas(url)} />
        </div>
    )
}