import React from 'react'
import styles from './Home.module.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core';
import Link from 'next/link';

const Home = () => {
    return (
        <div className={styles.container}>
            <div>Hello, I&apos;m <span className={styles.name}>Peter Alexander.</span></div>
            <div>I&apos;m a full-stack developer/consultant.</div>
            <div className={styles.button}>
                <Link passHref={true} href='/projects'>
                    <Button variant="outlined">View my work <ArrowForwardIcon /></Button>
                </Link>
            </div>
        </div>
    )
}

export default Home
