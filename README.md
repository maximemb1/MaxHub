# MaxHub

MaxHub est une plateforme web de type hub gaming qui regroupe plusieurs mini-jeux, affiche les statistiques du joueur et met en avant une expérience immersive de progression et de récompenses.

Le projet a été conçu pour centraliser l'accès à des jeux web, suivre les performances via le stockage local du navigateur et offrir une interface moderne et ludique.

## ✨ Fonctionnalités

- Accueil moderne avec mise en avant des jeux et des performances
- Affichage des statistiques globales pour plusieurs jeux
- Liste des jeux disponibles avec accès direct
- Suivi des scores et progression via `localStorage`
- Interface responsive et adaptable à plusieurs tailles d'écran
- Design inspiré d'un portail gaming / dashboard

## 🎮 Jeux disponibles

- Casse-Brique : jeu de casse-briques avec score, briques cassées et ressources collectées
- Snake : jeu de serpent avec pommes mangées, longueur maximale et score
- Pac-Man : jeu classique avec points, fantômes mangés et parties jouées

Liens directs :

- Casse-Brique : https://maximemb1.github.io/casse-briques/
- Snake : https://maximemb1.github.io/snake/
- Pac-Man : https://maximemb1.github.io/pac-man/

## 🛠️ Stack technique

- React 19
- Vite 8
- JavaScript / JSX
- CSS personnalisé

## 🚀 Installation

Clonez le projet puis installez les dépendances :

```bash
git clone https://github.com/maximemb1/MaxHub.git
cd MaxHub
npm install
```

Lancez le projet en mode développement :

```bash
npm run dev
```


Ou directement via Vite :

```bash
npx vite
```

## 📁 Structure du projet

```text
MaxHub/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── AppM.jsx
│   ├── AppM.css
│   ├── main.jsx
│   ├── utils.jsx
│   ├── jeux.jsx
│   ├── stats.jsx
│   └── assets/
└── README.md
```

## 🧠 Comportement principal

L'application charge les données de statistiques enregistrées dans le navigateur pour chaque jeu, puis les affiche dans des cartes dédiées. Les jeux eux-mêmes sont accessibles directement depuis la page d'accueil.

## 📌 Notes

Ce projet est pensé comme un hub personnel gaming, avec une logique simple de récupération des scores et de présentation de l'expérience de jeu.


## ⚙️ Idées

Apparition jeux en bille, L'or total sera convertie en crédits pour acheter des items exclus


