# Dokumentationsportal

Detta är en Docusaurus‑site för att dela projektdokumentation med kund.

## Installera

Med npm:

```bash
npm install
```

Alternativt med pnpm:

```bash
pnpm install
```

## Lokal utveckling

```bash
npm start
```

## Bygg (statiska filer)

```bash
npm run build
```

## Serve (testa bygg lokalt)

```bash
npm run serve
```

## Redigera sidor i webben ("inline editor")

En enkel CMS‑vy finns nu på `/admin` via Decap CMS.

- UI: [static/admin/index.html](docs-site/static/admin/index.html)
- Konfiguration: [static/admin/config.yml](docs-site/static/admin/config.yml)

Viktigt:

- Docusaurus är statisk – för att kunna spara måste CMS:en kunna committa till ett Git‑repo (t.ex. GitHub).
- GitHub‑backend kräver en auth‑server. Det enklaste är att hosta på Netlify och aktivera GitHub authentication provider (se Decap docs).

Snabbstart (när backend är konfigurerad):

1. Uppdatera `backend.repo` och ev. `branch` i `static/admin/config.yml`.
2. Starta siten (`pnpm start`) och öppna `http://localhost:3000/admin/`.

Alternativ:

- Om ni inte vill ha en CMS‑inloggning kan ni i stället aktivera Docusaurus "Edit this page" (editUrl) så redigering sker direkt i GitHub UI.
