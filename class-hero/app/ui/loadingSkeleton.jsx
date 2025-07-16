import styles from '../page.module.css'

export function WorksheetSkeleton() {
    return (
        <div className={styles.skeletonContainer}>
            <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>

            <div className={`${styles.skeleton} ${styles.skeletonDiv}`}></div>

            <div className={`${styles.skeleton} ${styles.skeletonText}}`}></div>

            <div className={`${styles.skeleton} ${styles.skeletonText}}`}></div>

            <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>

            <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
        </div>
    )
}