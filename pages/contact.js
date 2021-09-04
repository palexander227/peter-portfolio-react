import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Contact from '../src/components/Contact'

const contact = () => {
    return (
        <div className={styles.container}>
        <Head>
          <title>Peter</title>
          <meta name="description" content="My portfolio" />
          <link rel="icon" href="https://portfolio-react-2021.s3.us-west-1.amazonaws.com/favicon.ico" />
        </Head>
        <Navbar />
        <main className={styles.main}>
          <Contact />
        </main>
        <Footer />
      </div>
    )
}

export default contact
