# Galerie Azurine — site web

Site vitrine de la **Galerie Azurine**, galerie d'art (fictive) située près du port de Nice et consacrée à la peinture expressionniste et méditerranéenne.
Projet de Licence 3 — Université Côte d'Azur — **étape 2 : intégration de la maquette graphique**.

- Site en ligne : https://VOTRE-PSEUDO.github.io/galerie-azurine/
- Maquette Figma (étape 1) : https://www.figma.com/design/HSxMldJ6epFSlYWjUEFkRc
- Prototype interactif : https://www.figma.com/proto/HSxMldJ6epFSlYWjUEFkRc?node-id=6-4&starting-point-node-id=6:4

## Pages

| Page | Fichier |
| --- | --- |
| Accueil | `index.html` |
| Collection (avec filtres) | `collection.html` |
| Fiches des 6 œuvres | `oeuvres/*.html` |
| Expositions | `expositions.html` |
| La galerie | `galerie.html` |
| Visite & contact (formulaire d'inscription) | `contact.html` |
| Confirmation d'inscription | `merci.html` |
| Mentions légales | `mentions-legales.html` |

## Respect de la charte graphique

La transcription reprend fidèlement la maquette Figma :

- **Logo** : soleil et vagues (`assets/img/logo.svg`), favicon dérivé.
- **Couleurs** : Encre `#141414`, Papier `#FAF8F4`, Bleu Azur `#2340A0`, Bleu survol `#152B73`, Ocre `#D9A23A`, Lin `#F0EBE1`, Gris texte `#5B5B5B`, Bordure `#CFC7B8`.
- **Typographies** : Instrument Serif (titres) et Manrope (textes), hébergées localement dans `assets/fonts/`.
- **Composants** : boutons (principal, action, secondaire) avec états survol et « pressé » (ocre), cartes d'œuvres avec survol, champs de formulaire avec état focus, en-tête fixe au défilement.

## Responsive — mobile first

Les styles de base sont écrits pour le smartphone ; les media queries élargissent la mise en page :

- `≥ 600 px` : grilles sur 2 colonnes, boutons côte à côte ;
- `≥ 768 px` : tablette, marges et titres agrandis ;
- `≥ 1024 px` : desktop, menu horizontal, mises en page en deux colonnes, grilles sur 3 colonnes.

Sur mobile, le menu s'ouvre avec le bouton « hamburger » (accessible au clavier, touche Échap pour fermer).

## Technologies

HTML5, CSS3 et un petit fichier JavaScript (`assets/js/main.js`) pour le menu mobile, les filtres de la collection et la personnalisation de la page de confirmation. Aucun framework, aucune dépendance. Sans JavaScript, le site reste entièrement utilisable.

## Validation W3C

Toutes les pages HTML et la feuille de style ont été vérifiées avec le validateur du W3C (Nu Html Checker) : **0 erreur, 0 alerte**.

- HTML : https://validator.w3.org/
- CSS : https://jigsaw.w3.org/css-validator/

## Accessibilité

Lien d'évitement, textes alternatifs sur toutes les images, contrastes conformes WCAG AA, libellés visibles sur les champs, navigation au clavier, respect de la préférence « réduire les animations ».

## Publication

Le site est publié avec **GitHub Pages** (branche `main`, dossier racine).

## Crédits

Images créées pour ce projet avec un outil de génération d'images (Figma AI). Polices sous licence SIL Open Font License. Plan © contributeurs OpenStreetMap.
