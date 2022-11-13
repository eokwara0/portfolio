import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar, { Body, Footer, Nell, Section1, Section2, Section3 } from './_nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>porfolio-Site</title>
        <meta name="description" content="SovTech portfolio Website Submission" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.maindiv}>
      <Section1/>
      <Section2/>
      <Section3/>
      </div>
      <Footer/> 
    </div>
  )
}
