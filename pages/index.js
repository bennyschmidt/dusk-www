import styles from '../styles/Home.module.css';

export default function Home ({
  handleAPIResponse,
  showNotification
}) {
  return (
    <>
      <header className={styles.hero}>
        Darkwave
      </header>
      <main className={styles.main}>
        [dusk browser]
      </main>
      <footer className={styles.footer}>
        Darkwave
      </footer>
    </>
  );
}
