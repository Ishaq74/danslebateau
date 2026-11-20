# Audit de migration Wix → Astro

Branche de travail : `migration-complete`

## État vérifié le 20 novembre 2026

- Le build Astro GitHub Actions du commit `db229dc0a6992c37dc3f4114382ee60287501ec0` est **réussi** : [run 44760099497](https://github.com/Ishaq74/danslebateau/actions/runs/44760099497). Le nettoyage des sections du Livre de Dieu est en cours de compilation au dernier contrôle.
- La navigation desktop sépare maintenant le lien de la page parente du bouton visuel de sous-menu.
- Sur mobile, le lien de la page parente est également accessible dans le menu déroulant.
- L’ancienne URL Wix `/le-livre-de-dieu-1` redirige en 301 vers `/le-livre-de-dieu`.

## Anomalie bloquante dans les sources Wix archivées

Les deux fichiers suivants ne constituent pas deux sources de page distinctes :

- `oldsite/le-livre-de-dieu.html`
- `oldsite/messagers.html`

Ils ont des SHA Git différents, mais leurs titres HTML sont tous les deux `Le Livre De Dieu | Dans Le Bateau` et leurs 82 blocs de texte Wix extraits sont identiques, dans le même ordre. Le fichier `oldsite/messagers.html` est donc un doublon éditorial de la page « Le Livre de Dieu » et ne peut pas servir de cahier des charges fiable pour « Les Messagers ».

La page Wix publique « Les Messagers » est accessible à l’adresse https://www.danslebateau.com/messagers. Elle montre une introduction, une réflexion sur le choix des messagers, puis des développements sur Moïse, Adam, David et Job. Les sections Astro ont été étoffées à partir de cette référence : ajout de passages sur l’accusation de Moïse, sa colère et sa patience, le récit d’Adam et le retour par la miséricorde, les psaumes attribués à David, et les dialogues autour de Job. Cette restauration est partielle : la page Wix contient encore des développements plus longs qui ne sont pas tous repris.

## Inventaire Astro constaté

- Accueil : `src/pages/index.astro`, avec les sections Hero, Intro, Jardin, Salahuddin, Pardon, Création, Quran, Fourmis, Message et Articles.
- Livre de Dieu : `src/pages/le-livre-de-dieu.astro`, avec les sections Hero, Intro, Idris, Anges, Psaumes, Job, Jonas, Évangile, Torah et Articles.
- Messagers : `src/pages/messagers.astro`, avec les sections Hero, Intro, Messagers, Moïse, Adam, David, Job, vidéo et Articles.

## À terminer avant de déclarer la migration fidèle

- [x] Identifier `oldsite/messagers.html` comme un doublon et utiliser la page Wix publique comme référence de travail.
- [ ] Terminer la restauration intégrale des développements de « Les Messagers » ; les sections ont été étoffées mais ne reprennent pas encore tous les paragraphes de la source publique.
- [ ] Terminer la comparaison intégrale de « Le Livre de Dieu » : les sections Idrîs, anges, Psaumes, Job, Jonas, Évangile et Torah ont été enrichies. Une passe de nettoyage a supprimé les répétitions introduites par les premiers ajouts et replacé les paragraphes d’Idrîs hors de la grille d’images ; plusieurs passages de la source Wix restent toutefois condensés.
- [x] Vérifier que l’archive Wix de l’accueil correspond aux grands blocs de contenu présents dans Astro.
- [ ] Comparer visuellement et un à un les images de l’accueil.
- [ ] Vérifier chaque image Wix par rapport à son équivalent local dans `src/assets/images/`. La page Wix publique « Messagers » utilise notamment des visuels datés de février 2026 et des images `islamic-3640633_1280.png` / `pigeon-5508878_1280.png` qui ne correspondent pas clairement aux noms des fichiers locaux actuels.
- [ ] Faire une vérification visuelle réelle aux largeurs mobile, tablette et desktop.

## Limites des éléments disponibles

Aucun wireframe ni jeu de captures d’écran de référence n’a été trouvé dans l’arborescence du dépôt lors de cet audit. La structure `Band` utilise une colonne sur petit écran puis des grilles à partir du breakpoint `md`, mais cela ne remplace pas un test visuel réel. Les changements présents sur la branche ont passé le build GitHub Actions ; le contrôle visuel multi-format reste à faire.
