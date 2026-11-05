import './App.css'

const services = [
  {
    number: '01',
    title: 'Une idée, un projet',
    description:
      'Présentez ici votre première offre ou expliquez simplement ce que vous faites.',
  },
  {
    number: '02',
    title: 'Une approche claire',
    description:
      'Mettez en avant votre méthode, vos valeurs ou ce qui vous rend unique.',
  },
  {
    number: '03',
    title: 'Un résultat concret',
    description:
      'Aidez vos visiteurs à comprendre ce qu’ils peuvent accomplir avec vous.',
  },
]

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#accueil" aria-label="Atelier, accueil">
          atelier<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Navigation principale">
          <a href="#services">Ce que l’on fait</a>
          <a href="#apropos">À propos</a>
          <a className="nav-cta" href="#contact">
            Parlons de votre projet <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero page-width" id="accueil">
          <p className="eyebrow"><span className="status-dot" /> VOTRE PROCHAIN CHAPITRE COMMENCE ICI</p>
          <h1>
            Les bonnes idées
            <br />
            méritent <span className="highlight">de prendre vie.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Une phrase pour expliquer votre activité, votre projet ou ce que
              vous avez envie de construire. Faites-en votre point de départ.
            </p>
            <a className="button button-dark" href="#services">
              Découvrir notre approche <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-shape art-shape-one" />
            <div className="art-shape art-shape-two" />
            <div className="art-shape art-shape-three" />
            <span className="art-caption">FAIT AVEC CURIOSITE</span>
            <span className="art-mark">a.</span>
          </div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading page-width">
            <p className="eyebrow">CE QUE L’ON FAIT</p>
            <h2>Un bon début, c’est déjà beaucoup.</h2>
          </div>
          <div className="service-grid page-width">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about page-width" id="apropos">
          <p className="eyebrow">À PROPOS</p>
          <div>
            <h2>
              Votre histoire est
              <br />
              le meilleur point de départ.
            </h2>
            <p>
              Remplacez ce texte par quelques mots sur vous. Qui êtes-vous,
              pourquoi avez-vous lancé ce projet et à qui souhaitez-vous vous
              adresser ?
            </p>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-inner page-width">
            <p className="eyebrow">ET MAINTENANT ?</p>
            <h2>On fait connaissance ?</h2>
            <a className="button button-light" href="mailto:bonjour@exemple.fr">
              Écrivez-nous <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#accueil">
          atelier<span>.</span>
        </a>
        <p>Un projet à votre image. © Atelier</p>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </>
  )
}

export default App
