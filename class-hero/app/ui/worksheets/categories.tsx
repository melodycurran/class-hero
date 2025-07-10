import styles from "../../page.module.css"

export default function Categories() {
    return (
        <ul className={styles.categoriesList}>
            <li>Reading</li>
            <li>Science</li>
            <li>Mathematics</li>
            <li>Filipino</li>
        </ul>
    )
}