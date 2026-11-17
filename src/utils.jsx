// liste des jeux 
export const jeux = {
   cb: { id: 1, name: "Casse-Brique", description: "Détruis les blocs, récupère un maximum d'or et fais rebondir ta balle sans jamais la faire tomber ! Personalise ton expérience en achetant toute le magasin", lien: "https://maximemb1.github.io/casse-briques/", img: "./src/assets/cb.png", cle_local:"save_case_briques"},
   snake: { id: 2, name: "Snake", description: "Guide ton serpent à travers la grille, mange des pommes pour grandir et fais attention à ne pas percuter les murs ou ta propre queue", lien: "https://maximemb1.github.io/snake/", img: "./src/assets/snake.png", cle_local: "save_snake"},
   pm: { id: 3, name: "Pac-Man", description: "Navigue dans le labyrinthe, engloutis toutes les billes et échappe aux fantômes... à moins que tu ne croques une super-bille pour inverser les rôles !", lien: "https://maximemb1.github.io/pac-man/", img: "./src/assets/pm.png", cle_local: "save_pacman"},
}

export const get_stats = () => {
    const cle_cb = jeux.cb.cle_local;
    const cle_snake = jeux.snake.cle_local;
    const cle_pm = jeux.pm.cle_local;

    try {
        const save_cb = localStorage.getItem(cle_cb);
        const save_snake = localStorage.getItem(cle_snake);
        const save_pm = localStorage.getItem(cle_pm);

        // On passe directement ou on met des valeurs par défaut si vide (null/undefined)
        const stats_cb = save_cb ? JSON.parse(save_cb) : null;
        const stats_snake = save_snake ? JSON.parse(save_snake) : null;
        const stats_pm = save_pm ? JSON.parse(save_pm) : null;

        if (stats_cb) console.log("CB trouvé !");
        if (stats_snake) console.log("SNAKE trouvé !");
        if (stats_pm) console.log("PM trouvé !");

        return {
            cb: stats_cb ?? 0,
            snake: stats_snake ?? 0,
            pm: stats_pm ?? 0
        };

    } catch (err) {
        console.error("ERREUR lors du chargement des stats", err);
        return { cb: 0, snake: 0, pm: 0 };
    }
}