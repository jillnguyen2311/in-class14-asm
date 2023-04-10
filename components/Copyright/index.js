import Head from 'next/head'
import styles from './Copyright.module.css'
import Image from 'next/image'

export default function Copyright() {

  return (
    <>
      <main className={styles.main}>
       <p>©️ Jill Nguyen</p>
      </main>
    </>
  )
}
