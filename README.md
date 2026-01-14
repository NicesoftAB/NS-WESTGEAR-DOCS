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

Lokal utveckling (redigera `.md` direkt i din lokala checkout):

1. Terminal A: `pnpm cms:proxy`
2. Terminal B: `pnpm start`
3. Öppna `http://localhost:3000/admin/`

Om listan är tom eller du inte kan spara: kontrollera att `collections[0].folder` i `static/admin/config.yml` pekar på `docs` (inte `docs-site/docs`).

Obs: lokal‑läget är avsiktligt oautentiserat och ska bara användas på localhost.

Produktion:

- För att redigera i webben och committa till repo behöver ni konfigurera en riktig backend + auth (vanligast: Netlify + GitHub backend, eller Netlify Identity + Git Gateway). Se kommentarer i `static/admin/config.yml`.

Alternativ:

- Om ni inte vill ha en CMS‑inloggning kan ni i stället aktivera Docusaurus "Edit this page" (editUrl) så redigering sker direkt i GitHub UI.
