import styles from "../page.module.css"

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    children: React.ReactNode,
}

export default function Button({ onClick, children }: ButtonProps) {
    return <button className={styles.button} onClick={onClick}>{children}</button>
}