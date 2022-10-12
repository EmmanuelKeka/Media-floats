import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SideNav from '../components/sideNav'
export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Media Floats</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Services/>
      <Contact/>
      <SideNav/>
      <Footer/>
    </div>
  )
}
