'use client'
import { Page, Text, View, Document, PDFViewer } from "@react-pdf/renderer"
import styles from "../../../page.module.css"
import { useEffect, useState } from "react"


export default function PdfView() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <>
            {loaded && (
                <PDFViewer className={styles.pdfViewer}>
                    <Document>
                        <Page size="A4" >
                            <View >
                                <Text>This is sample PDF</Text>
                            </View>
                        </Page>
                    </Document>
                </PDFViewer>
            )}
        </>

    )

}
