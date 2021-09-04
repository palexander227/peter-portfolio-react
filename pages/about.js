import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import About from '../src/components/About'

const about = () => {
  return (
    <div className={styles.container}>
      <Head>
      <title>Peter</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="https://portfolio-react-2021.s3.us-west-1.amazonaws.com/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <About />
      </main>

      <Footer />
    </div>
  )
}

export default about
