import { WorksheetEditorMenu } from "@/app/services/WorksheetEditor"

export default function WorksheetSidebar() {
    return (
        <div className="bg-(--sidebar-ring) h-full w-(--worksheetsidebarwidth) rounded-(--radius) flex flex-col items-center justify-center gap-1">

            {WorksheetEditorMenu.map((menu, index) => (
                <div key={index} className="worksheet-editor-menu-div flex flex-col items-center hover:bg-(--french-gray) hover:rounder-(--radius) rounded-(--radius) cursor-pointer text-xs">
                    <menu.icon />
                    <h3>{menu.name}</h3>
                </div>
            ))}

        </div>
    )
}