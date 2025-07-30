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
import { toast } from "sonner"

import { signOut } from "@/auth"

export default function Dashboard() {



    return (
        <div>
            <Sidebar className="dashboardSidebar">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Menu</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {SidebarOptions.map((option) => (
                                    <SidebarMenuItem key={option.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={option.url} target='_blank'>
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
                    <form action={async () => {
                        'use server'
                        await signOut({ redirectTo: '/account' })
                    }}>
                        <Button className="w-full">Log out</Button>
                    </form>
                </SidebarFooter>
            </Sidebar>
            <div className="dashboardSummaryContainer">
                <h2> Hi, User</h2>
                <section><p>Membership: </p></section>
                <div>
                    <h3>Transaction Summary</h3>
                </div>
            </div>
        </div>
    )
}