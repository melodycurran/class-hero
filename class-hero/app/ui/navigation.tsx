import styles from '../page.module.css'
import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/library">Browse</Link></li>
                <li><Link href="/worksheet-generator">Worksheet Generator</Link></li>
                <li><Link href="/donate">Donate</Link></li>
                <li><Link href="/account">Account</Link></li>
            </ul>
        </nav>
    )
}