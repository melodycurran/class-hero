import {
    HomeIcon, ComponentIcon, LayoutTemplateIcon, Plus, CircleUserIcon, File, SquareArrowUpRightIcon, ALargeSmallIcon, Component, Sparkles, ImageIcon, Settings, ShellIcon
} from "lucide-react"
import BackgroundSettings from "./Components/BackgroundSettings"
// import ImageUploadSettings from "./Components/ImageUploadSettings"

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
        desc: "Select texts",
        icon: ALargeSmallIcon
    },
    {
        name: "Background",
        desc: "Pick background color",
        icon: ShellIcon,
        component: <BackgroundSettings />
    },
    {
        name: "Elements",
        desc: "Choose elements",
        icon: Component
    },
    {
        name: "AI",
        desc: "Use AI",
        icon: Sparkles
    },
    {
        name: "Images",
        desc: "Add images or Upload",
        icon: ImageIcon,
        // component: <ImageUploadSettings />
    },
    {
        name: "Settings",
        desc: "Change design settings",
        icon: Settings
    },
]