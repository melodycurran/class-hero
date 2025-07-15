import styles from "../../page.module.css"
import { ralewayDots } from "../fonts"

export default function WordTracer({ children }: { children: string }) {
    return <span className={ralewayDots.className}>{children}</span>
}