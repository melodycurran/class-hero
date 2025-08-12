import {
    HomeIcon, ComponentIcon, LayoutTemplateIcon, Plus, CircleUserIcon, File, SquareArrowUpRightIcon, ALargeSmallIcon, Component, Sparkles, ImageIcon, ImageUp, ShellIcon
} from "lucide-react"
import BackgroundSettings from "./Components/BackgroundSettings"
import ImageUploadSettings from "./Components/ImageUploadSettings"
import ShapesSetting from "./Components/ShapesSettings"
import TextSetting from "./Components/AddText"
// import ImageKitAI from "./Components/ImageKitAI"
// import AITransform from "./Shareable/AITransform"

export const WorksheetEditorMenu = [
    {
        name: 'Home',
        path: '/worksheet-editor',
        icon: HomeIcon,
    },
    {
        name: 'Account',
        path: '/account',
        icon: CircleUserIcon,
    },
    {
        name: 'Projects',
        path: '/worksheet-editor/projects',
        icon: ComponentIcon,
    },
    {
        name: 'Templates',
        path: '/worksheet-editor/templates',
        icon: LayoutTemplateIcon,
    },
]

export const WorksheetCanvasSize = [
    {
        name: "Letter",
        width: 2550,
        height: 3300,
        icon: File
    },

    {
        name: "A4",
        width: 2480,
        height: 3508,
        icon: File
    },

    {
        name: "Legal",
        width: 2550,
        height: 4200,
        icon: File
    },
    {
        name: "Custom",
        width: 0,
        height: 0,
        icon: SquareArrowUpRightIcon
    },
]

export const WorksheetProjectMenu = [
    {
        name: "Template",
        desc: "View Templates",
        icon: LayoutTemplateIcon
    },
    {
        name: "Text",
        desc: "Add text and heading",
        icon: ALargeSmallIcon,
        component: <TextSetting />
    },
    {
        name: "Background",
        desc: "Pick canvas background color",
        icon: ShellIcon,
        component: <BackgroundSettings />
    },
    {
        name: "Elements",
        desc: "Select shapes and elements",
        icon: Component,
        component: <ShapesSetting />
    },

    {
        name: "Images",
        desc: "Add images or Upload",
        icon: ImageIcon,
        component: <ImageUploadSettings />
    },
    // {
    //     name: "Uploaded",
    //     desc: "View Uploaded Images",
    //     icon: ImageUp,
    //     component: <ImageKitAI />
    // },
    // {
    //     name: "AI",
    //     desc: "Use AI to transform images",
    //     icon: Sparkles,
    //     component: <AITransform />
    // },
]