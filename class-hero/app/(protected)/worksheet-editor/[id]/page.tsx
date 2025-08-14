import ProjectSidebar from "@/components/ui/worksheetProjectSidebar"
import SaveProjectToDbForm from "@/components/ui/project-form"
import WorksheetCanvas from "@/components/ui/worksheetCanvas"
import { getOneProject } from "@/lib/projectQueries"
import ProviderDiv from "@/components/ui/providerDiv"

export default async function CreateWorksheet(props: { params: Promise<{ id: string }> }) {
    const params = await props.params
    const id = params.id

    const data = await getOneProject(id)

    if (!data || 'message' in data) {
        return <div>An server error occured</div>
    }

    const { projectId, projectName, width, height, jsonTemplate } = data

    return (
        <ProviderDiv className="flex w-full pt-5 px-4">
            <ProjectSidebar />
            <div className="flex flex-col w-full">
                <SaveProjectToDbForm projectId={projectId} projectName={projectName} width={width} height={height} jsonTemplate={jsonTemplate}>
                    <WorksheetCanvas projectName={projectName} width={width} height={height} jsonTemplate={jsonTemplate} />
                </SaveProjectToDbForm>
            </div>
        </ProviderDiv>
    )
}