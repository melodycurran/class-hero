import styles from "../../page.module.css"


export default function Preview({ children }) {
    return (
        <div className={styles.worksheetPreviewContainer}>
            <h3>Preview</h3>
            <div className={styles.worksheetPreview}>
                {children}
            </div>
        </div>
    )
}