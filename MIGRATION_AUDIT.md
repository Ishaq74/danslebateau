# Audit de migration Wix → Astro

Branche de travail : `migration-complete`

## État vérifié le 20 novembre 2026

- Les builds GitHub Actions des ajouts précédents sont réussis, notamment les restaurations Jonas/Job et le complément de l’introduction du Livre de Dieu : [run 44762786180](https://github.com/Ishaq74/danslebateau/actions/runs/44762786180), [run 44765139624](https://github.com/Ishaq74/danslebateau/actions/runs/44765139624). Les derniers commits de contenu sur la Torah et la section générale « Messagers » sont encore en cours de compilation : [run 44765177955](https://github.com/Ishaq74/danslebateau/actions/runs/44765177955) et [run 44765218538](https://github.com/Ishaq74/danslebateau/actions/runs/44765218538).
- La navigation desktop sépare maintenant le lien de la page parente du bouton visuel de sous-menu.
- Sur mobile, le lien de la page parente est également accessible dans le menu déroulant.
- L’ancienne URL Wix `/le-livre-de-dieu-1` redirige en 301 vers `/le-livre-de-dieu`.

## Anomalie bloquante dans les sources Wix archivées

Les deux fichiers suivants ne constituent pas deux sources de page distinctes :

- `oldsite/le-livre-de-dieu.html`
- `oldsite/messagers.html`

Ils ont des SHA Git différents, mais leurs titres HTML sont tous les deux `Le Livre De Dieu | Dans Le Bateau` et leurs 82 blocs de texte Wix extraits sont identiques, dans le même ordre. Le fichier `oldsite/messagers.html` est donc un doublon éditorial de la page « Le Livre de Dieu » et ne peut pas servir de cahier des charges fiable pour « Les Messagers ».

La page Wix publique « Les Messagers » est accessible à l’adresse https://www.danslebateau.com/messagers. Elle montre une introduction, une réflexion sur le choix des messagers, puis des développements sur Moïse, Adam, David et Job. Les sections Astro ont été étoffées à partir de cette référence : ajout de passages sur l’accusation de Moïse, sa colère et sa patience, le récit d’Adam et le retour par la miséricorde, les psaumes attribués à David, les récits de Job, le rejet social des messagers et la persécution. La restauration demeure partielle : plusieurs longs développements de la page Wix sont encore condensés.

## Inventaire Astro constaté

- Accueil : `src/pages/index.astro`, avec les sections Hero, Intro, Jardin, Salahuddin, Pardon, Création, Quran, Fourmis, Message et Articles.
- Livre de Dieu : `src/pages/le-livre-de-dieu.astro`, avec les sections Hero, Intro, Idris, Anges, Psaumes, Job, Jonas, Évangile, Torah et Articles.
- Messagers : `src/pages/messagers.astro`, avec les sections Hero, Intro, Messagers, Moïse, Adam, David, Job, vidéo et Articles.

## À terminer avant de déclarer la migration fidèle

- [x] Identifier `oldsite/messagers.html` comme un doublon et utiliser la page Wix publique comme référence de travail.
- [ ] Terminer la restauration intégrale des développements de « Les Messagers » ; les sections générales, Adam, David et Job ont été enrichies avec les développements et références de la page publique, notamment le rejet social, la persécution et les conséquences du jugement porté sur les messagers. Il reste à comparer les derniers paragraphes et les visuels ; la restauration textuelle est encore partielle.
- [ ] Terminer la comparaison intégrale de « Le Livre de Dieu » : les sections Idrîs, anges, Psaumes, Job, Jonas, Évangile et Torah ont été enrichies. L’introduction reprend désormais les références de continuité des révélations (2:285, 2:4 et 2:91) ; la Torah inclut des développements sur shavat, la cessation, la fatigue divine et les parallèles de la Genèse. Une passe de nettoyage a supprimé les répétitions ; plusieurs passages de la source Wix restent toutefois condensés.
- [x] Vérifier que l’archive Wix de l’accueil correspond aux grands blocs de contenu présents dans Astro.
- [ ] Comparer visuellement et un à un les images de l’accueil.
- [ ] Vérifier chaque image Wix par rapport à son équivalent local dans `src/assets/images/`. La page Wix publique « Messagers » utilise notamment des visuels datés de février 2026 et des images `islamic-3640633_1280.png` / `pigeon-5508878_1280.png` qui ne correspondent pas clairement aux noms des fichiers locaux actuels.
- [ ] Faire une vérification visuelle réelle aux largeurs mobile, tablette et desktop.

## Limites des éléments disponibles

Aucun wireframe ni jeu de captures d’écran de référence n’a été trouvé dans l’arborescence du dépôt lors de cet audit. La structure `Band` utilise une colonne sur petit écran puis des grilles à partir du breakpoint `md`, mais cela ne remplace pas un test visuel réel. Les changements présents sur la branche ont passé le build GitHub Actions ; le contrôle visuel multi-format reste à faire.
