import Head from 'next/head'
import useCounter from '@/hooks/increment'
import styles from './Button.module.css'

export default function Button() {

  let {counter, add, minus} = useCounter();

  return (
    <>
      <main className={styles.main}>
        <button className={styles.button}
        onClick={add}>Increment</button>
        {counter}
      </main>
    </>
  )
}
