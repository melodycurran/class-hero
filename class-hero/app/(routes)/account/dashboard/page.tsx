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
import { toast } from "sonner"
import { useRouter } from "next/navigation"


export default function Dashboard() {
    const router = useRouter()

    async function handleLogout() {
        try {
            const response = await fetch("/account/api/logout", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
            })

            if (!response.ok) {
                const error = await response.json()
                toast(error.message)
                throw new Error(error.message || 'Logout unsuccessful')
            } else {
                toast('Logout Successful')
                router.push('/account')
            }

        } catch (error) {
            console.error(error)
        }
    }
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
                    <Button onClick={handleLogout}>Log out</Button>
                </SidebarFooter>
            </Sidebar>
            <div className="dashboardSummaryContainer">
                <h2> Hi, User</h2>
                <section><p>Membership: </p></section>
                <div>
                    <h3>Transaction Summary</h3>
                </div>
                <div>
                    <h3>Latest Worksheet Design</h3>
                </div>

            </div>

        </div>
    )
}