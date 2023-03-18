import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

const OPERATING_SYSTEMS = {
  "Windows NT 10.0": "Windows 10",
  "Windows NT 6.3": "Windows 8.1",
  "Windows NT 6.2": "Windows 8",
  "Windows NT 6.1": "Windows 7",
  "Windows NT 6.0": "Windows Vista",
  "Windows NT 5.1": "Windows XP",
  "Windows NT 5.0": "Windows 2000",
  "Mac": "macOS",
  "X11": "UNIX",
  "Linux": "Linux"
};

export default function Home ({
  handleAPIResponse,
  showNotification
}) {
  const [OSName, setOSName] = useState();

  useEffect(() => {
    for (const userAgent of Object.keys(OPERATING_SYSTEMS)) {
      const OS = OPERATING_SYSTEMS[userAgent];

      if (window.navigator.userAgent.includes(userAgent)) {
        setOSName(OS);
      }
    }
  }, []);

  return (
    <>
      <header className={styles.hero}>
        <Image
          alt="Darkwave"
          src="/img/darkwave-light.png"
          className={styles.branding}
          width={100}
          height={14}
        />
        <section className={[styles.container, styles.cta].join(' ')}>
          <h2>Welcome to the Internet.</h2>
          <p>Dusk browser is a free &amp; open-source browser for a decentralized future.</p>
          <div className={styles.appicon}>
            <Image
              alt="Dusk Browser"
              src="/img/icon.png"
              width={128}
              height={128}
            />
          </div>
          <button disabled title="Summer 2023">
            Download{OSName ? ` for ${OSName}` : ''}
          </button>
          {OSName && <button disabled title="Summer 2023" className={styles.link}>
            Other versions
          </button>}
        </section>
      </header>
      <main className={styles.main}>
        <div className={styles.product}>
          <Image
            alt="Dusk Browser"
            src="/img/product.png"
            width={500}
            height={446}
          />
        </div>
        <div className={styles.info}>
          <h3>Browse the decentralized web.</h3>
          <p>Find and do things online without the need of &ldquo;Big Tech&rdquo; &amp; social media platforms who are known to censor, prevent access, show ads, and charge unwanted fees.</p>
        </div>
        <div className={styles.info}>
          <h3>Discover the web&apos;s true potential.</h3>
          <p>Enjoy unbridled, worldwide access to the free &amp; open web the way it was intended to be. Peer-to-peer &ldquo;de-platforms&rdquo; the Internet, similar to the way browsers broke down the &ldquo;walled gardens&rdquo; of the early web.</p>
        </div>
        <div className={styles.product}>
          <Image
            alt="Dusk Browser"
            src="/img/product2.png"
            width={500}
            height={446}
          />
        </div>
      </main>
      <section className={[styles.container, styles.creators].join(' ')}>
        <h4>Create the Internet.</h4>
        <div>
          <p>Platforms don&apos;t create content, people do.</p>
          <p>Peer-to-peer tech enables people to connect directly.</p>
        </div>
      </section>
      <div className={styles.detail}>
        <h3>Twitter for tweets... Yelp for reviews... YouTube for videos...</h3>
        <p>Monolithic platforms were worth using when they used to add value to the user, but now &mdash; even for basic access to content &mdash; there are auth walls, pay walls, excessive fees, invasive ads, and even outright censorship of up-and-comers.</p>
        <p>It&apos;s gotten to the point that companies actively prevent good content from being seen, and even eliminate new creators from becoming successful when they challenge the viewpoints of their investors.</p>
        <p>Dusk Browser is a way out of this mess by open-sourcing the entire model.</p>
      </div>
      <section className={[styles.container, styles.promo].join(' ')}>
        <div className={styles.product}>
          <Image
            alt="Dusk Browser"
            src="/img/promo.png"
            width={800}
            height={510}
          />
        </div>
        <button disabled title="Summer 2023">
          Download Dusk
        </button>
      </section>
      <footer className={[styles.container, styles.footer].join(' ')}>
        <Image
          alt="Darkwave"
          src="/img/darkwave-light.png"
          className={styles.branding}
          width={100}
          height={14}
        />
      </footer>
    </>
  );
}
