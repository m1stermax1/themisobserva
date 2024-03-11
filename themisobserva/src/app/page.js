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
        <h1 className="title">soluciones activas para la toma de decisiones</h1>
        <p className="subtitle">Somo un grupo de personas que nos unimos para crear una entidad privada sin fines de lucro, armando propuestas para mejorar el pais.</p>
        <Image
          alt="Mountains"
          src="/img/presentacionbackground2.jpg"

          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            borderRadius: '2rem',
            filter: 'brightness(0.5)'
          }}
        />

        <div className="navigation">
          <div className="container">
            <p>articulos</p>
            <button>Ver mas</button>
          </div>
          <div className="container">
            <p>Estadisticas</p>
            <button>Ver mas</button>
          </div>
          <div className="container">
            <p>Talleres</p>
            <button>Ver mas</button>
          </div>
        </div>
      </section>

      <section className="aboute">
        <h2>acerca de <span className="title">themis observa</span></h2>
        <p><span className="subtitle">THEMIS OBSERVA</span> representa a una generacion comprometida con la importancia de la politica para el Bien Comun. Este grupo de profesionales busca formarse en aspectos tecnicos, eticos y politicos. Sus actividades respaldadas por la conciencia social, buscan abordar la realidad politica desde la recta razon, con la esperanza de fomentar un nuevo humanismo y una sociedad que valore la dignidad de cada individuo.</p>
        <button>Contactanos</button>
      </section>

      <section className="ourProposals">
        <h2>nuestras propuestas</h2>

        <div className="proposalList">
          <div className="proposal">
            <Image
              alt="Mountains"
              src="/img/presentacionbackground2.jpg"
              quality={100}
              fill
              sizes="100%"
              style={{
                objectFit: 'cover',
                borderRadius: '10px',
                filter: 'brightness(0.8)',
                gridArea: '1/1/2/2',
                boxShadow: '0 0px 40px -38px black'
              }}
            />
            <p className="title">formacion de dirigentes</p>
            <p className="subtitle">Organizamos encuentros politicos de distintos partidos y asistimos a eventos realizados tanto en el interior como en el exterior, invitados por diversas instituciones y ONG. Fomentamos viajes de especializacion y participamos en misiones politicas y agendas de visitas internacionales.</p>
          </div>
          <div className="proposal">
            <Image
              alt="Mountains"
              src="/img/presentacionbackground2.jpg"
              quality={100}
              fill
              sizes="100%"
              style={{
                objectFit: 'cover',
                borderRadius: '10px',
                filter: 'brightness(0.8)',
                gridArea: '1/1/2/2',
                boxShadow: '0 0px 40px -38px black'
              }}
            />
            <p className="title">formacion de dirigentes</p>
            <p className="subtitle">Organizamos encuentros politicos de distintos partidos y asistimos a eventos realizados tanto en el interior como en el exterior, invitados por diversas instituciones y ONG. Fomentamos viajes de especializacion y participamos en misiones politicas y agendas de visitas internacionales.</p>
          </div>
          <div className="proposal">
            <Image
              alt="Mountains"
              src="/img/presentacionbackground2.jpg"
              quality={100}
              fill
              sizes="100%"
              style={{
                objectFit: 'cover',
                borderRadius: '10px',
                filter: 'brightness(0.8)',
                gridArea: '1/1/2/2',
                boxShadow: '0 0px 40px -38px black'
              }}
            />
            <p className="title">formacion de dirigentes</p>
            <p className="subtitle">Organizamos encuentros politicos de distintos partidos y asistimos a eventos realizados tanto en el interior como en el exterior, invitados por diversas instituciones y ONG. Fomentamos viajes de especializacion y participamos en misiones politicas y agendas de visitas internacionales.</p>
          </div>
        </div>
      </section>

      <section className="participate">
        <div className="section">
          <div className="text">
            <h2>contactanos!</h2>
            <p>¿queres saber como participar?</p>
          </div>
        </div>

        <form className="form">
          <div className="input-label">
            <label>Nombre y apellido</label>
            <input type="text"></input>
          </div>
          <div className="input-label">
            <label>Locallidad</label>
            <input type="text"></input>
          </div>
          <div className="input-label">
            <label>Pais</label>
            <input type="text"></input>
          </div>
          <div className="input-label">
            <label>Email</label>
            <input type="email"></input>
          </div>
          <div className="input-label">
            <label>Provincia</label>
            <input type="text"></input>
          </div>
          <div className="input-label">
            <label>Profesion/Carrera</label>
            <input type="text"></input>
          </div>
          <div className="input-label">
            <label>Consulta</label>
            <textarea></textarea>
          </div>
          <div className="checkbox-label">
            <input type="checkbox"></input>
            <label>Deseo recibir Newsletters de fundacion contemporanea</label>
          </div>
          <div className="checkbox-label">
            <input type="checkbox"></input>
            <label>Deseo recibir el Boletin Oficial</label>
          </div>
          <div className="checkbox-label">
            <input type="checkbox"></input>
            <label>Deseo recibir el Boletin Provincial</label>
          </div>
          <div className="checkbox-label">
            <input type="checkbox"></input>
            <label>Deseo recibir el Boletin Informe Estrategico (INES)</label>
          </div>
          <button>Enviar</button>
        </form>
      </section>

      <footer>
        <div className="topSection">
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
          <h2>mira todas</h2>
          <h2>nuestras propuestas!</h2>

          <div className="links">
            <div className="sectionLinks">
              <p>Que hacemos?</p>
              <ul>
                <li>Acerca de nosotros</li>
                <li>Nuestras propuestas</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="sectionLinks">
              <p>De interes</p>
              <ul>
                <li>Articulos</li>
                <li>Estadisticas</li>
                <li>Encales de interes</li>
                <li>Analisis de textos politicos</li>
              </ul>
            </div>
            <div className="sectionLinks">
              <p>Comunicacion</p>
              <ul>
                <li>Prensa</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottomSection">
          <p>mail@mail.com</p>
          <p>telefono 112345678</p>
          <div className="redes">
            <Link href="/"><Image
                src="/img/fb.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={20}
                height={20}
                priority
              /></Link>
            <Link href="/"><Image
                src="/img/x.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={20}
                height={20}
                priority
              /></Link>
            <Link href="/"><Image
                src="/img/ig.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={20}
                height={20}
                priority
              /></Link>
            <Link href="/"><Image
                src="/img/linkedin.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={20}
                height={20}
                priority
              /></Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
