import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import styles from './Resume.module.css';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className={styles['resume-container']}>
            <a href='https://portfolio-react-2021.s3.us-west-1.amazonaws.com/pdfs/Peter_s_Resume.pdf' download>
                <CloudDownloadIcon />
            </a>
            <Document
                file="https://portfolio-react-2021.s3.us-west-1.amazonaws.com/pdfs/Peter_s_Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} scale={2.0} />
            </Document>
        </div>
    )
}

export default Resume
