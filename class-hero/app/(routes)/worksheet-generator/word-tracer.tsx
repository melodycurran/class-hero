import styles from "../../page.module.css"
import { ralewayDots } from "../../ui/fonts"


export default function WordTracer({ children }: { children: string }) {
    // const handleEnter = (e:KeyboardEvent) => {
    //     if (e.key === 'Enter') {
    //         return < div className={`${ralewayDots.className} ${styles.tracer}`
    //         }> {children}</div >
    //     }
    // }

    return < span className={`${ralewayDots.className} ${styles.tracer}`
    }> {children}</span >
}