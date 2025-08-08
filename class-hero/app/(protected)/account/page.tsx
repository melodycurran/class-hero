'use client'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter
} from "@/components/ui/sidebar"
import { SidebarOptions } from "@/app/services/SidebarOptions"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { signOutUser } from "@/lib/actions"

export default function Dashboard() {
    const { data: session, status } = useSession()

    if (status === 'loading') return <div>Loading...</div>

    return (
        <div>
            <Sidebar className="p-[2rem]">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Menu</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {SidebarOptions.map((option) => (
                                    <SidebarMenuItem key={option.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={option.url}>
                                                <option.icon />
                                                <span>{option.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <form action={signOutUser}>
                        <Button className="w-full">Log out</Button>
                    </form>
                </SidebarFooter>
            </Sidebar>
            <div className="dashboardSummaryContainer">
                <h2> Hi, {session?.user?.fname}</h2>
                <section><p>Membership: {`${session?.user?.account_type?.charAt(0).toUpperCase()}${session?.user?.account_type?.slice(1)}`}</p></section>
                <div>
                    <h3>Transaction Summary</h3>
                </div>
            </div>

        </div>
    )
}