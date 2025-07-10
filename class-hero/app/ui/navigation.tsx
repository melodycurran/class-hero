import styles from '../page.module.css'

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>Browse</li>
                <li>Worksheet Generator</li>
                <li>Donate</li>
                <li>Account</li>
            </ul>
        </nav>
    )
}