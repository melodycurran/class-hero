import styles from '../page.module.css'
import { barrio } from './fonts'
import Navigation from './navigation'
import Link from 'next/link'


export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={barrio.className}><Link href="/">Class Hero</Link></h1>
            <Navigation />
        </header>
    )
}