import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peter</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="https://portfolio-react-2021.s3.us-west-1.amazonaws.com/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Home />
      </main>
      <Footer />
    </div>
  )
}
