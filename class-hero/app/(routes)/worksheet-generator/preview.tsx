import React, { forwardRef } from "react"
import styles from "../../page.module.css"
import Button from "@/app/ui/button"

interface PreviewProps {
    children: React.ReactNode,
    clickAction: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type RefElement = HTMLDivElement

export const Preview = forwardRef<RefElement, PreviewProps>(
    ({ children, clickAction }, ref) => {
        return (

            <div className={styles.worksheetPreviewContainer}>
                <h3>Preview</h3>
                <div className={styles.worksheetPreview} ref={ref}>
                    {children}
                </div>
                <Button onClick={clickAction}>Download</Button>
            </div>


        );
    }
);

