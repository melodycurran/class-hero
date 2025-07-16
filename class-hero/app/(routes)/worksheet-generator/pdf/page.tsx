'use client'
import { Page, Text, View, Document } from "@react-pdf/renderer"
import styles from "../../../page.module.css"
import dynamic from "next/dynamic"

const PDFViewer = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
    {
        ssr: false,
        loading: () => <p>...Loading</p>
    })

export default function PdfView() {

    return (
        <PDFViewer className={styles.pdfViewer}>
            <Document>
                <Page size="A4" >
                    <View >
                        <Text>This is sample PDF</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )

}
