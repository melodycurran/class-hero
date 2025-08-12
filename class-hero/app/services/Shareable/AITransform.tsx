import { AITransformSettings } from "../AISettings"

export default function AITransform() {
    return (
        <div className="mt-4">
            <div className="flex gap-2 justify-center mt-1 ">
                {AITransformSettings.map((setting, index) => (
                    <div key={index} className="py-2 hover:scale-115 translate-all" title={setting.name}>
                        <setting.icon className="stroke-(--muted-foreground)" />
                    </div>
                ))}
            </div>
        </div>
    )
}