import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { TextSetting } from "../TextSettings"
import FontStyle from "./FontStyle"


export default function TextSettingNav() {
    return (
        <div className="w-1/2 py-1 flex gap-5 justify-center items-center bg-white border border-(--ring) rounded-(--radius) absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
            {TextSetting.map((text, index) => (
                <div key={index} title={text.name} className="flex flex-col items-center hover:scale-115 transition-all">
                    <Popover>
                        <PopoverTrigger asChild>
                            <text.icon className="w-[1rem]" />
                        </PopoverTrigger>
                        <PopoverContent className="font-sans text-xs w-full">
                            {text?.component}
                        </PopoverContent>
                    </Popover>

                </div>

            ))
            }
            <FontStyle />
        </div>
    )
}