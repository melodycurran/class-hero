import worksheetGenerator from "./generator"
import styles from "../../page.module.css"
import Categories from "@/app/ui/worksheets/categories"

export default function WorksheetGenerator() {
    return (
        <div className={styles.generatorContainer}>
            <Categories />
            <h1>Worksheet Generator</h1>
            <textarea></textarea>
            <button className={styles.button}>Preview</button>
        </div>


    )
}