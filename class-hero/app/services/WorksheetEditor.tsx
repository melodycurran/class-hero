import {
    HomeIcon, ComponentIcon, LayoutTemplateIcon, Plus, CircleUserIcon, File, SquareArrowUpRightIcon
} from "lucide-react"

export const WorksheetEditorMenu = [
    {
        name: 'Create',
        path: '/worksheet-editor/create',
        icon: Plus,
    },
    {
        name: 'Account',
        path: '/account/dashboard',
        icon: CircleUserIcon,
    },
    {
        name: 'Home',
        path: '/worksheet-editor',
        icon: HomeIcon,
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