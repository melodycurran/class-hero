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
import Loading from "@/components/ui/loading"

export default function Dashboard() {
    const { data: session, status } = useSession()

    if (status === 'loading') return <Loading />

    return (
        <div className="w-full">
            <Sidebar className="p-[2rem]">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Menu</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {SidebarOptions.map((option) => (
                                    <SidebarMenuItem key={option.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={option.title === 'Worksheet Editor' ? `${option.url}/${session?.user?._id}` : option.url}>
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
            <div className="font-sans h-full m-3 flex flex-col items-center">
                <section className="w-full md:w-1/2 h-[100px] shadow-md mb-3 p-2 px-3 bg-slate-200 rounded-(--radius)"> Hi, {session?.user?.fname}</section>
                <section className="w-full md:w-1/2 h-[100px] shadow-md mb-3 p-2 px-3 bg-slate-200 rounded-(--radius)"><p>Membership: {`${session?.user?.account_type?.charAt(0).toUpperCase()}${session?.user?.account_type?.slice(1)}`}</p>
                    <p>Up to 60 designs</p>
                </section>
                <section className="w-full md:w-1/2 h-[100px] shadow-md mb-3 p-2 px-3 bg-slate-200 rounded-(--radius)">
                    <p>Create beautiful Worksheet Designs for free!</p>
                    <p></p>
                </section>
            </div>

        </div>
    )
}