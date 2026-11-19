# Dans le Bateau

Site Astro migré depuis <https://www.danslebateau.com>.

## Stack

- Astro 7
- Tailwind CSS 4
- Starwind UI components
- Fonts Barlow (locales)

## Démarrage

```sh
pnpm install
pnpm run dev
```

Le serveur tourne sur <http://localhost:4321>.

## Structure

- `src/pages/` : pages (index, le-livre-de-dieu, messagers)
- `src/layouts/BaseLayout.astro` : layout principal (header/footer)
- `src/components/Header`, `src/components/Footer` : header/footer
- `src/components/Section/` : composants de section réutilisables (`Section`, `Wrapper`)
- `src/assets/fonts/Barlow/` : polices Barlow
- `src/assets/images/` : images

## Polices

Les polices Barlow sont déclarées dans `astro.config.mjs` avec toutes les variantes (Thin → Black, normal et italic).

## Notes

- Node >= 22.23.4 requis.
- `.nvmrc` fourni.
