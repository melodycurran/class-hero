import { ImageOffIcon, ImageUpIcon, PaintBucketIcon, DropletIcon, BrushIcon, ImageUpscaleIcon, CropIcon } from "lucide-react"

export const AITransformSettings = [
    {
        name: 'Remove background',
        command: 'e-bgremove',
        icon: ImageOffIcon
    },
    {
        name: 'Change background',
        command: 'e-changebg-prompt-',
        input: true,
        icon: ImageUpIcon
    },
    {
        name: 'Generative Fill',
        command: 'bg-genfill',
        icon: PaintBucketIcon
    },
    {
        name: 'Drop Shadow',
        command: 'e-dropshadow',
        icon: DropletIcon
    },
    {
        name: 'Retouch',
        command: 'e-retouch',
        icon: BrushIcon
    },
    {
        name: 'Upscale',
        command: 'e-upscale',
        icon: ImageUpscaleIcon
    },
    {
        name: 'Crop',
        command: 'fo-auto',
        icon: CropIcon
    },
]