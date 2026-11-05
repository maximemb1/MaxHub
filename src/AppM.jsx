import "./AppM.css";
import React, { useState, useEffect } from 'react';

function Nom_jeux() {
        // Nom Jeux défilement
    const games = ["CASSE-BRIQUES", "SNAKE", "PAC-MAN"];
    
    //L'index du jeu affiché actuellement
    const [currentIndex, setCurrentIndex] = useState(0);

    // timer qui change de jeu toutes les 3 secondes (3000 ms)
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((index_act) => (index_act + 1) % games.length);
        }, 4000);

        // Nettoyage du timer si le composant est démonté
        return () => clearInterval(interval);
    }, [games.length]);

    return (
        <div className="hero-art-gaming">
            <span key={currentIndex} className="star-wars-text">
                {games[currentIndex]}
            </span>
            <p className="art-badge">Gaming</p>
        </div>
    );
}

// liste des jeux 
const jeux = [
    { id: 1, name: "Casse-Brique", description: "A voir", lien: "https://maximemb1.github.io/casse-briques/"},
    { id: 2, name: "Snake", description: "A voir", lien: "https://maximemb1.github.io/snake/"},
    { id: 3, name: "Pac-Man", description: "A voir", lien: "https://maximemb1.github.io/pac-man/"},
]

function AppM() {
    return (
     <>
        <header className="site-header">
            <a className="wordmark" href="#accueil" aria-label="MaxHub, accueil">
                MaxHub<span>.</span>
            </a>

            <nav className="main-nav" aria-label="Navigation principale">
                <a href="#jeux">JEUX DISPONIBLES</a>
                <a href="#stats">STATS</a>
                <a href="#boutique" className="nav-cta">BOUTIQUE<span>↗</span></a>
            </nav>
        </header>

        <main>
            <section className="hero page-width" id="accueil">
                <p className="version"><span className="version-dot" />SERVEURS EN LIGNE • MAXHUB v1.0</p>

                <h1 className="hero-title">Joue, progresse, obtient <br/> des <span className="title-gradient"> récompenses exclusives. </span> </h1>

                <div className="hero-bottom">
                    <p>Une plateforme pensée pour regrouper tout tes jeux web préférés, suivre tes performances et débloquer des items exclusifs dans tes jeux ! </p>
                    <a className="hero-cta" href="#jeux">
                        Découvre les jeux <span>↓</span>
                    </a>
                </div>
                
                {Nom_jeux()}
            </section>

            <section className="stats">

            </section>

            <section className="jeux">

            </section>
        </main>

        <footer className="footer page-width">
            <a className="wordmark" href="#accueil" aria-label="MaxHub, accueil">
                MaxHub<span>.</span>
            </a>
            <p> © 2026 MaxHub. Tous droits réservés.</p>
            <a className="footer-cta" href="accueil">Retour en haut <span>↑</span></a>
        </footer>
        
     </>        
    )
}

export default AppM;