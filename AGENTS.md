# Dans le Bateau — AGENTS.md

## Objectif

Site Astro migré depuis <https://www.danslebateau.com>. Site éditorial long format, fond sombre, typographie Barlow, composants Starwind UI.

## Stack

- Astro 7 (static output)
- Tailwind CSS 4
- Starwind UI (atoms)
- Fonts Barlow (locales, toutes variantes)
- Node >= 22.23.4

## Structure du projet

```md
src/
  pages/           # pages Astro (index, le-livre-de-dieu, messagers)
  layouts/         # BaseLayout.astro
  components/
    Header/        # Header.astro, Brand.astro, ThemeSwitcher.astro
    Footer/        # Footer.astro
    ui/            # Band.astro, Quote.astro, ArticleCard.astro (design system)
    Section/       # Section.astro, Wrapper.astro (layouts)
    starwind/      # composants Starwind (Card, Button, Prose, ...)
  styles/
    styles.css     # Tailwind + import theme.css
    theme.css      # tokens design system (couleurs, typo, thème dark)
  assets/
    fonts/Barlow/  # polices Barlow TTF (18 variantes)
    images/        # images du site (accueil/, etc.)
  icons/           # icônes SVG locales (tiktok, account, status) chargées par astro-icon
astro.config.mjs   # config Astro + fonts Barlow
```

## Design system

- Tokens définis dans `src/styles/theme.css` (palette Wix : ink, slate, graphite, wine, navy, amber-band, etc.).
- Thème sombre par défaut (`<html class="dark">`).
- Typographie : Barlow via `--font-barlow` (déclaré dans astro.config.mjs), injecté par `<Font cssVariable="--font-barlow" />` dans BaseLayout.
- Composants réutilisables :
  - `Band` : bande colorée (tone: ink, slate, graphite, wine, navy, amber, brick...), split optionnel (1/3, 2/3, 3/1, etc.)
  - `Quote` : citation avec figcaption
  - `ArticleCard` : carte article avec image portrait + titre-lien
  - `Section` / `Wrapper` : layouts génériques
- Pas de couleurs hex en dur dans les pages ; utiliser les tones de `Band`.

## Conventions

- Utiliser les alias d'imports : `@layouts/*`, `@components/*`, `@starwind/*`, `@assets/*`.
- Pas de `div` bruts pour les sections ; utiliser `Band`/`Section`/`Wrapper`.
- Pas de `font-serif` ni de gradients ad hoc ; la typo vient de `theme.css`.
- Contenu long en `text-sm`/`text-base` avec `leading-snug`.

## Démarrage

```sh
pnpm install
pnpm run dev
```

Serveur sur <http://localhost:4321>.

## Pages

- `/` : accueil (index.astro)
- `/le-livre-de-dieu` : Le Livre de Dieu
- `/messagers` : Les Messagers

## Polices

Toutes les variantes Barlow (Thin → Black, normal + italic) sont déclarées dans `astro.config.mjs`.

## Images et logos

- Logo du site : `src/assets/images/logo.png` (utilisé dans Header via Brand et Footer).
- Icônes sociales : `src/icons/tiktok.svg`, `src/icons/account.svg`, `src/icons/status.svg` (astro-icon).
- Images de contenu : `src/assets/images/accueil/`, `src/assets/images/le-livre-de-dieu/`, `src/assets/images/messagers/`.
- Toujours utiliser `astro:assets` (`Image`) pour les images importées, jamais de `<img src>` brut.
