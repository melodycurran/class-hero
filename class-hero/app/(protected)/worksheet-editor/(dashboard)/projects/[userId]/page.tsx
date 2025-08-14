import { getAllProjects } from "@/lib/projectQueries"
import Link from "next/link"
import DeleteProjectButton from "@/components/ui/deleteProject"
import { EllipsisVertical } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import CanvasSize from "@/components/ui/canvasSize"
import RecentWorksheet from "@/components/ui/recentWorksheet"
import { ProjectDataType } from "@/lib/definitions"

export default async function Projects(props: { params: { userId: string } }) {
    const params = props.params
    const id = params.userId

    const projectData = await getAllProjects(id)
    if (!projectData) return
    const parsed: ProjectDataType[] = JSON.parse(projectData)

    return (
        <div className="font-sans w-full">
            <div className="flex flex-col font-sans text-sm gap-4 ">
                <h2 className="font-bold">Worksheet Editor</h2>
                <section>
                    <CanvasSize />
                </section>
                <RecentWorksheet worksheet={parsed} />
            </div>
            <h2 className="font-bold">Recent Projects</h2>
            <p className="text-xs">All your projects are saved here</p>
            <div className="flex gap-4 w-full flex-wrap mt-5">
                {parsed?.map((project, index) => (
                    <div key={index} className="w-1/3 md:w-1/2 md:max-w-[150px] bg-white drop-shadow-md p-2 rounded-(--radius) flex justify-center relative flex-1 h-[100px]">
                        <Popover >
                            <PopoverTrigger className=" bg-white drop-shadow-md p-1 rounded-[50%] drop-shadow-none hover:bg-(--ring) flex justify-center absolute right-2"><EllipsisVertical className="w-[1.5rem] p-1" /></PopoverTrigger>
                            <PopoverContent className="font-sans text-xs w-full p-2 cursor-pointer font-bold" >
                                <DeleteProjectButton id={project?.projectId} name={project?.projectName} />
                            </PopoverContent>
                        </Popover>
                        <Link href={`/worksheet-editor/${project?.projectId}`} target='_blank' className="pt-6 w-full  ">
                            <h2 className="text-xs px-2 break-words text-wrap">{project.projectName}</h2>
                        </Link>
                    </div>

                ))}
            </div>

        </div >

    )
}