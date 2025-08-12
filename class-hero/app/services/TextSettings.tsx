import { Blend, PaintBucketIcon, SquareDashedTopSolid, VectorSquare, CaseSensitiveIcon } from "lucide-react";
import FillColor from "./Components/FillColor";
import StrokeColor from "./Components/StrokeColor";
import BorderWidth from "./Components/BorderWidth";
import Opacity from "./Components/Opacity";
import FontFamily from "./Shareable/FontFamily";
import FontStyle from "./Components/FontStyle";


export const TextSetting = [
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
        name: 'Font Family',
        icon: CaseSensitiveIcon,
        component: <FontFamily />
    },
    
]