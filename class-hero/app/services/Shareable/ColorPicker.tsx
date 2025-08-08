import { SketchPicker } from 'react-color'
import { ColorPickerProps } from '@/lib/definitions'


export default function ColorPicker({ value, onColorChange }: ColorPickerProps) {
    return (
        <>
            <SketchPicker
                color={value}
                onChange={(e) => onColorChange(e.hex)}
            />
        </>
    )
}