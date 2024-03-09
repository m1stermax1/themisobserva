import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <header>

        <Link href="/">
          <div className="brand">
            <Image
              src="/img/themislogo.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={70}
              height={55}
              priority
            />
            <p>THEMIS OBSERVA</p>
          </div>
        </Link>


        <ul className="menu">
          <li>
            <Link href="/">inicio</Link>
          </li>
          <li>
            <Link href="/">acerca de</Link>
          </li>
          <li>
            <Link href="/">propuestas</Link>
          </li>
          <li>
            <Link href="/">FAQs</Link>
          </li>


        </ul>

        <button className="donate">Colaborar</button>


      </header>
      
      <section className="presentation">
      {/* <Image
              src="/img/presentationbackground.jpg"
              alt="Vercel Logo"
              className="background"
              fill
              priority
            /> */}
      </section>
    </main>
  );
}
