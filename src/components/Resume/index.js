import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import styles from './Resume.module.css';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const skills = [
    'Python',
    'Java',
    'Scheme',
    'R',
    'Matlab',
    'LaTeX',
    'HTML',
    'JavaScript',
    'Node.js',
    'Express.js',
    'React',
    'Next.js',
    'MySQL',
    'Mongodb',
    'Linux',
    'MS Office'

]

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className={''}>


                <Card className={styles.container}>
            <div className={styles.details}>
                <CardContent className={styles.content}>
                    <Typography component="h5" variant="h5">
                        Skills
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                       Common developer skills
                    </Typography>
                </CardContent>
                <List component="nav" aria-label="main mailbox folders"><ListItem  className={styles.listitem} >
                    {skills.map(x=><ListItemText key={x} primary={x} className={styles.listitemtext} />)}</ListItem>
                </List>
            </div>
        </Card>


        <Card className={styles.container}>
            <div className={styles.details}>
                <CardContent className={styles.content}>
                    <Typography component="h5" variant="h5">
                        Resume
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
               <a href='https://portfolio-react-2021.s3.us-west-1.amazonaws.com/pdfs/Peter_s_Resume.pdf' download>
                Download Resume{' '} <CloudDownloadIcon />
             </a>
                    </Typography>
                </CardContent>
            </div>
        </Card>



           

            
            {/* <Document
                file="https://portfolio-react-2021.s3.us-west-1.amazonaws.com/pdfs/Peter_s_Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} scale={2.0} />
            </Document> */}
        </div>
    )
}

export default Resume
