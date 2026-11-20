# Audit de migration Wix → Astro

Branche de travail : `migration-complete`

## État vérifié le 20 novembre 2026

- Le build Astro GitHub Actions du commit `42702fe4a94a8cb9006d2ad49f412bdb6ed9efe8` est **réussi** : [run 29](https://github.com/Ishaq74/danslebateau/actions/runs/44756133894).
- La navigation desktop sépare maintenant le lien de la page parente du bouton d’ouverture du sous-menu.
- Sur mobile, le lien de la page parente est également accessible dans le menu déroulant.
- L’ancienne URL Wix `/le-livre-de-dieu-1` redirige en 301 vers `/le-livre-de-dieu`.

## Anomalie bloquante dans les sources Wix archivées

Les deux fichiers suivants ne constituent pas deux sources de page distinctes :

- `oldsite/le-livre-de-dieu.html`
- `oldsite/messagers.html`

Ils ont des SHA Git différents, mais leurs titres HTML sont tous les deux `Le Livre De Dieu | Dans Le Bateau` et leurs 82 blocs de texte Wix extraits sont identiques, dans le même ordre. Le fichier `oldsite/messagers.html` est donc un doublon éditorial de la page « Le Livre de Dieu » et ne peut pas servir de cahier des charges fiable pour « Les Messagers ».

La page Wix publique « Les Messagers » est accessible à l’adresse https://www.danslebateau.com/messagers. Elle montre bien le contenu attendu : introduction, réflexion sur le choix des messagers, puis les développements sur Moïse, Adam, David et Job. Les composants Astro existent pour ces cinq ensembles, mais leur texte est actuellement nettement plus condensé que la page Wix publique. Il reste donc une restauration éditoriale à faire, sans inventer les passages absents.

## Inventaire Astro constaté

- Accueil : `src/pages/index.astro`, avec les sections Hero, Intro, Jardin, Salahuddin, Pardon, Création, Quran, Fourmis, Message et Articles.
- Livre de Dieu : `src/pages/le-livre-de-dieu.astro`, avec les sections Hero, Intro, Idris, Anges, Psaumes, Job, Jonas, Évangile, Torah et Articles.
- Messagers : `src/pages/messagers.astro`, avec les sections Hero, Intro, Messagers, Moïse, Adam, David, Job, vidéo et Articles.

## À terminer avant de déclarer la migration fidèle

- [ ] Remplacer la mauvaise archive `oldsite/messagers.html` par un export Wix authentique, ou prendre la page Wix publique comme référence éditoriale versionnée.
- [ ] Comparer et restaurer les passages manquants de « Les Messagers » (notamment les développements longs de Moïse, Adam, David et Job).
- [ ] Comparer intégralement les textes et l’ordre des sections de « Le Livre de Dieu » avec la source Wix valide.
- [ ] Comparer intégralement le texte, l’ordre des sections et les images de l’accueil.
- [ ] Vérifier chaque image Wix par rapport à son équivalent local dans `src/assets/images/`.
- [ ] Faire une vérification visuelle réelle aux largeurs mobile, tablette et desktop.

## Limites des éléments disponibles

Aucun wireframe ni jeu de captures d’écran de référence n’a été trouvé dans l’arborescence du dépôt lors de cet audit. Le build réussi confirme la compilation, pas la fidélité visuelle ni le comportement responsive dans un navigateur.
