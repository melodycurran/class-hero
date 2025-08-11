import { Square, Circle, RectangleHorizontal, Triangle, Minus, PaintBucketIcon, SquareRoundCorner, Blend, VectorSquare, SquareDashedTopSolid } from "lucide-react"
import FillColor from "./Components/FillColor"
import StrokeColor from "./Components/StrokeColor"
import BorderWidth from "./Components/BorderWidth"
import Opacity from "./Components/Opacity"
import BorderRadius from "./Components/BorderRadius"

export const Shapes = [
    {
        name: 'Square',
        icon: Square
    },
    {
        name: 'Circle',
        icon: Circle
    },
    {
        name: 'Rectangle',
        icon: RectangleHorizontal
    },
    {
        name: 'Triangle',
        icon: Triangle
    },
    {
        name: 'Line',
        icon: Minus
    },
]

export const ShapesSettings = [
    {
        name: 'Fill',
        icon: PaintBucketIcon,
        component: <FillColor />
    },
    {
        name: 'Border Color',
        icon: SquareDashedTopSolid,
        component: <StrokeColor />
    },
    {
        name: 'Border Width',
        icon: VectorSquare,
        component: <BorderWidth />
    },
    {
        name: 'Opacity',
        icon: Blend,
        component: <Opacity />
    },
    {
        name: 'Border Radius',
        icon: SquareRoundCorner,
        component: <BorderRadius />
    },
]