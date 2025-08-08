import { CircleUserIcon, PencilRulerIcon, Settings2Icon, BadgeCheckIcon, DollarSignIcon } from "lucide-react"

export const SidebarOptions = [
    {
        title: "Dashboard",
        url: "/account",
        icon: CircleUserIcon
    },

    {
        title: "Worksheet Editor",
        url: "/worksheet-editor",
        icon: PencilRulerIcon
    },
    {
        title: "Subscription",
        url: "/account/subscription",
        icon: BadgeCheckIcon
    },

    {
        title: "Billing",
        url: "/account/billing",
        icon: DollarSignIcon
    },

    {
        title: "Settings",
        url: "/account/settings",
        icon: Settings2Icon
    },
]