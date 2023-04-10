import Head from 'next/head'
import styles from './Logo.module.css'
import Image from 'next/image'

export default function Logo() {

  return (
    <>
      <main className={styles.main}>
       <Image src='/bcit-logo.png' width='100' height='100'/>
      </main>
    </>
  )
}
