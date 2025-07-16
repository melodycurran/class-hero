'use client'
import { Page, Text, View, Document, PDFViewer, PDFDownloadLink, StyleSheet } from "@react-pdf/renderer"
import styles from "../../../page.module.css"


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
