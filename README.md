# OrgaAfrica — Landing page du système d'exploitation des restaurants et points de vente en Afrique

![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Hébergement-Vercel-000000?logo=vercel&logoColor=white)

🔗 **Site officiel** : <https://www.orga-africa.com/> · miroir Vercel : <https://orag-africa.vercel.app>
📦 **Code source** : <https://github.com/Georginio-prod/Orag-Africa>

---

## 📌 Présentation

**OrgaAfrica** est une startup togolaise (Agoé Avédji, Lomé) qui propose deux solutions
formant le « système d'exploitation » des restaurants et points de vente en Afrique :
commandes, paiements digitaux, files d'attente, réservations, fidélité, POS et reporting
sur une seule plateforme.

Ce dépôt contient la **landing page marketing** du produit, réalisée en tant que projet
client : présentation des solutions, profils cibles, traction, équipe, témoignages,
boutons de téléchargement des apps et formulaire de **demande de démo**.

## ✨ Fonctionnalités

- **Héros** avec accroche, badge d'utilisateurs et appels à l'action (« Demander une démo », « Commencer gratuitement »).
- **Solutions** : paiements digitaux sécurisés, commandes rapides sans attente, POS simple, analyse & reporting.
- **Plateforme** : commandes & gestion de file d'attente, infrastructure de paiements.
- **Profils** : restaurants, vendeurs & commerçants informels, entreprises.
- **Pourquoi choisir** OrgaAfrica (« Pas une app de livraison », « Conçu pour la croissance »).
- Sections **Traction**, **Équipe**, **Témoignages**, **Store buttons** (iOS / Android), **CTA** et **Footer**.
- Page **/demo** : formulaire de demande de démonstration.
- Entièrement **responsive** (mobile → desktop) avec Tailwind CSS v4.

## 🛠️ Stack technique

| Couche | Technologie |
|---|---|
| UI | Vue 3 (`<script setup>`), Vue Router 4 |
| Build | Vite 7, `vue-tsc` (vérification de types) |
| Styles | Tailwind CSS v4 via `@tailwindcss/vite` |
| Langage | TypeScript |
| Hébergement | Vercel (rewrites SPA dans `vercel.json`) + domaine `orga-africa.com` |

## 📁 Structure du projet

```
Orag-Africa/
├── index.html
├── vercel.json                 # Rewrite /* → index.html (routing côté client)
├── vite.config.ts · tsconfig*.json
├── public/                     # Images, captures d'app, logos
└── src/
    ├── main.ts · App.vue · style.css
    ├── router/index.ts         # Routes : / (Home) et /demo
    ├── views/Home.vue          # Assemble toutes les sections
    └── components/
        ├── Navbar.vue · Footer.vue
        ├── HeroSection.vue · StoreButtons.vue · CTASection.vue
        ├── Solution.vue · SolutionCard.vue · SolutionProfil.vue
        ├── Plateforme.vue · PourquoiChoisir.vue · Traction.vue
        ├── Team.vue · Testimonial.vue
        └── Demo.vue            # Formulaire de demande de démo
```

## 🚀 Installation & lancement

Prérequis : Node.js ≥ 18.

```bash
git clone https://github.com/Georginio-prod/Orag-Africa.git
cd Orag-Africa
npm install
npm run dev          # http://localhost:5173
```

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Vérification TypeScript + build de production |
| `npm run preview` | Prévisualisation du build |

## 🌐 Déploiement

Déployé sur **Vercel** (framework détecté : Vite). Le fichier `vercel.json` redirige toutes
les URL vers `index.html` pour que Vue Router fonctionne en mode *history*. Aucune variable
d'environnement requise.

## 🎓 Ce que ce projet démontre

Intégration fidèle d'une maquette marketing, découpage en composants réutilisables,
responsive design avancé avec Tailwind v4, mise en production pour un client réel.

---

## 👤 Auteur

**Komla Etonam Georges EKLOU** (Georginio) — Développeur Full Stack Web & Web3

[![GitHub](https://img.shields.io/badge/GitHub-Georginio--prod-181717?logo=github)](https://github.com/Georginio-prod)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-0A66C2?logo=linkedin)](https://www.linkedin.com/in/komla-etonam-georges-eklou-68518b23b)
[![Portfolio](https://img.shields.io/badge/Portfolio-georginio.w3frame.com-6C63FF)](https://georginio.w3frame.com/)

> 📚 Tous mes projets sont listés et documentés sur mon [profil GitHub](https://github.com/Georginio-prod).
