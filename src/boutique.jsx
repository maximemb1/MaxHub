import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './AppM.css'
import './boutique.css'

const articles = [
  {
    id: 'paddle-neon',
    name: 'Paddle néon',
    game: 'Casse-Brique',
    description: 'Un style lumineux pour faire rebondir la balle.',
    price: 250,
    symbol: '✦',
    style: 'neon',
  },
  {
    id: 'serpent-prisme',
    name: 'Serpent prisme',
    game: 'Snake',
    description: 'Un nouveau look coloré pour ton prochain record.',
    price: 180,
    symbol: '〰',
    style: 'prism',
  },
  {
    id: 'pack-pixel',
    name: 'Pack pixel',
    game: 'Pac-Man',
    description: 'Une touche rétro pour tes parties dans le labyrinthe.',
    price: 320,
    symbol: '▦',
    style: 'pixel',
  },
]

function Boutique() {
  const [panier, setPanier] = useState({})
  const nombreArticles = Object.values(panier).reduce((total, quantite) => total + quantite, 0)
  const total = articles.reduce(
    (somme, article) => somme + article.price * (panier[article.id] ?? 0),
    0,
  )

  function ajouterAuPanier(id) {
    setPanier((contenu) => ({
      ...contenu,
      [id]: (contenu[id] ?? 0) + 1,
    }))
  }

  function retirerDuPanier(id) {
    setPanier((contenu) => {
      const quantite = contenu[id] ?? 0
      if (quantite <= 1) {
        const nouveauContenu = { ...contenu }
        delete nouveauContenu[id]
        return nouveauContenu
      }
      return { ...contenu, [id]: quantite - 1 }
    })
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="./index.html#accueil" aria-label="MaxHub, accueil">
          MaxHub<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Navigation principale">
          <a href="./index.html#stats">STATS</a>
          <a href="./index.html#jeux">JEUX DISPONIBLES</a>
          <a href="./boutique.html" className="nav-cta" aria-current="page">
            BOUTIQUE<span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main className="boutique page-width">
        <section className="boutique-intro">
          <p className="eyebrow"><span className="eyebrow-dot" />LA BOUTIQUE MAXHUB</p>
          <h1>Personnalise <span className="title-gradient">ta partie.</span></h1>
          <p className="boutique-description">
            Découvre des objets inspirés de tes jeux préférés. Ces articles et crédits sont des exemples :
            aucun achat réel n’est effectué.
          </p>
        </section>

        <div className="boutique-layout">
          <section className="catalogue" aria-labelledby="titre-catalogue">
            <div className="boutique-section-heading">
              <div>
                <p className="eyebrow">SÉLECTION MAXHUB</p>
                <h2 id="titre-catalogue">Les articles</h2>
              </div>
              <span className="cart-count" aria-live="polite">
                {nombreArticles} article{nombreArticles > 1 ? 's' : ''}
              </span>
            </div>

            <div className="product-grid">
              {articles.map((article) => (
                <article className="product-card" key={article.id}>
                  <div className={`product-art product-art-${article.style}`} aria-hidden="true">
                    <span>{article.symbol}</span>
                    <small>{article.game}</small>
                  </div>
                  <div className="product-info">
                    <p className="product-game">{article.game}</p>
                    <h3>{article.name}</h3>
                    <p className="product-description">{article.description}</p>
                    <div className="product-buy">
                      <strong>{article.price} <span>crédits</span></strong>
                      <button type="button" onClick={() => ajouterAuPanier(article.id)}>
                        Ajouter <span aria-hidden="true">+</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="cart-panel" aria-labelledby="titre-panier">
            <p className="eyebrow">TA SÉLECTION</p>
            <h2 id="titre-panier">Panier</h2>
            {nombreArticles === 0 ? (
              <p className="cart-empty">Ton panier est vide. Ajoute un article pour le voir ici.</p>
            ) : (
              <>
                <ul className="cart-list">
                  {articles.filter((article) => panier[article.id]).map((article) => (
                    <li className="cart-item" key={article.id}>
                      <div>
                        <strong>{article.name}</strong>
                        <span>{article.price * panier[article.id]} crédits</span>
                      </div>
                      <div className="cart-quantity">
                        <button
                          type="button"
                          aria-label={`Retirer un ${article.name} du panier`}
                          onClick={() => retirerDuPanier(article.id)}
                        >
                          −
                        </button>
                        <span>{panier[article.id]}</span>
                        <button
                          type="button"
                          aria-label={`Ajouter un ${article.name} au panier`}
                          onClick={() => ajouterAuPanier(article.id)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="cart-total">
                  <span>Total démo</span>
                  <strong>{total} crédits</strong>
                </div>
                <p className="cart-note">Panier de démonstration — aucun paiement n’est disponible.</p>
              </>
            )}
          </aside>
        </div>
      </main>

      <footer className="footer page-width">
        <a className="wordmark" href="./index.html#accueil" aria-label="MaxHub, accueil">
          MaxHub<span>.</span>
        </a>
        <p>© 2026 MaxHub. Tous droits réservés.</p>
        <a className="footer-cta" href="./index.html#accueil">Retour à l’accueil <span>↗</span></a>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<Boutique />)
