import styles from "../page.module.css"


export default function Button({onclick, children}) {
    return <button className={styles.button} onClick={onclick}>{children}</button>
}