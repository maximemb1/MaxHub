import "./AppM.css";
import React, { useState, useEffect } from 'react';
import { jeux, get_stats } from "./utils";
import { CardStats, CardCB, CardSnake, CardPM } from "./stats";
import { CardJeux } from "./jeux";


const {cb, snake, pm} = get_stats();

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
            <span key={currentIndex} className="text-nom-jeux">
                {games[currentIndex]}
            </span>
            <p className="art-badge">Gaming</p>
        </div>
    );
}



function AppM() {
    return (
     <>
        <div className="progress"></div>

        <header className="site-header">
            <a className="wordmark" href="#accueil" aria-label="MaxHub, accueil">
                MaxHub<span>.</span>
            </a>

            <nav className="main-nav" aria-label="Navigation principale">
                <a href="#stats">STATS</a>
                <a href="#jeux">JEUX DISPONIBLES</a>
                <a href="#./boutique.html" className="nav-cta">BOUTIQUE<span>↗</span></a>
            </nav>
        </header>

        <main>
            <section className="hero page-width" id="accueil">
                <p className="eyebrow"><span className="eyebrow-dot" />SERVEURS EN LIGNE • MAXHUB v1.0</p>

                <h1 className="hero-title">Joue, progresse, obtient <br/> des <span className="title-gradient"> items exclusives. </span> </h1>

                <div className="hero-bottom">
                    <p>Une plateforme pensée pour regrouper tout tes jeux web préférés, suivre tes performances et débloquer des items exclusifs dans tes jeux ! </p>
                    <a className="hero-cta" href="#jeux">
                        Découvre les jeux <span>↓</span>
                    </a>
                </div>
                
                <Nom_jeux />
            </section>

            <section className="stats" id="stats">
                <div className="s-heading page-width">
                    <p className="eyebrow">TES PERFORMANCES</p>
                    <h2>Statistiques globales</h2>
                </div>

                <div className="grille-stats page-width">
                    <CardStats titre={jeux.cb.name} content={<CardCB stats={cb} />} />
                    <CardStats titre={jeux.snake.name} content={<CardSnake stats={snake} />} />
                    <CardStats titre={jeux.pm.name} content={<CardPM stats={pm} />} />
                </div>
            </section>

            <section className="jeux" id="jeux">
                <div className="j-heading page-width">
                    <p className="eyebrow">TES JEUX PREFÉRÉS</p>
                    <h2>Jeux Web</h2>
                </div>

                <div className="grille-jeux">
                    <CardJeux jeux={jeux.cb}></CardJeux>
                    <CardJeux jeux={jeux.snake}></CardJeux>
                    <CardJeux jeux={jeux.pm}></CardJeux>
                </div>

            </section>
        </main>

        <footer className="footer page-width">
            <a className="wordmark" href="#accueil" aria-label="MaxHub, accueil">
                MaxHub<span>.</span>
            </a>
            <p> © 2026 MaxHub.</p>
            <a className="footer-cta" href="#accueil">Retour en haut <span>↑</span></a>
        </footer>
        
     </>        
    )
}

export default AppM;