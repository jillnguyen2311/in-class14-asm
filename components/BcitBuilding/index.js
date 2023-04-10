import Head from 'next/head'
import styles from './BcitBuilding.module.css'
import Image from 'next/image'

export default function BcitBuilding() {

  return (
    <>
      <main className={styles.main}>
       <Image src='/bcit-building.png' width='300' height='400'/>
      </main>
    </>
  )
}
