import styles from '../page.module.css'
import { barrio } from './fonts'
import Navigation from './navigation'


export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={barrio.className}>Class Hero</h1>
            <Navigation />
        </header>
    )
}