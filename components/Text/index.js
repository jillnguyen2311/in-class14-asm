import Head from 'next/head'
import styles from './Text.module.css'
import Image from 'next/image'

export default function Text() {

  return (
    <>
      <main className={styles.main}>
       <h1 className={styles.greenbox}>EDUCATION FOR A COMPLEX WORLD</h1>
       <h3>Your studies, your way.</h3>
      </main>
    </>
  )
}
