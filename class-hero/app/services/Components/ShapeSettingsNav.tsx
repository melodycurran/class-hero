import { ShapesSettings } from "../ShapesOptions"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


export default function ShapeSettingsNav() {
    return (
        <div className="w-1/4 py-2 flex gap-5 justify-center bg-white border border-(--ring) rounded-(--radius) absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
            {ShapesSettings.map((setting, index) => (
                <div key={index} title={setting.name} className="flex flex-col items-center hover:scale-115 transition-all">
                    <Popover>
                        <PopoverTrigger asChild>
                            <setting.icon className="w-[1rem]" />
                        </PopoverTrigger>
                        <PopoverContent className="font-sans text-xs w-full">
                            {setting?.component}
                        </PopoverContent>
                    </Popover>

                </div>
            ))}
        </div>

    )
}