import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Form data for Wordpress
        </h1>

        <p className={styles.description}>
          Made by Zigfrid
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>First name &rarr;</h2>
            <input type="text" id="name" name="name" required
                   minLength="4" maxLength="8" size="20"></input>
          </div>

          <div className={styles.card}>
            <h2>Last name &rarr;</h2>
            <input type="text" id="name" name="name" required
                   minLength="4" maxLength="8" size="20"></input>
          </div>

          <div className={styles.card}>
            <h2>Address &rarr;</h2>
            <input type="text" id="name" name="name" required
                   minLength="4" maxLength="8" size="20"></input>
          </div>

          <div className={styles.card}>
            <h2>Phone &rarr;</h2>
            <input type="text" id="name" name="name" required
                   minLength="4" maxLength="8" size="20"></input>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
