import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 style={{color:"tomato",fontFamily:"Tahoma",textAlign:"center"}}>FITBYTES</h1>
      </header>
      <main class={styles.main}>
      <button><Link href="/terms">Terms and Conditions</Link></button>
     <button><Link href="/privacy">Privacy</Link></button>
      </main>

     
     <a></a>   
    </div>
  )
}
