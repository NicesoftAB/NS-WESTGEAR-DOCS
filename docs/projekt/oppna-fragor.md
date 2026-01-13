---
id: oppna-fragor
title: Öppna frågor (inför utvecklingsstart)
---

Använd det här dokumentet för att samla obesvarade frågor och beslut som måste vara klara innan utveckling kan starta.

## Riktlinjer

- Märk varje punkt med status: **Öppen**, **Beslutad**, **Blockerad**, **Behöver utredas**.
- Om svaret påverkar scope, tidplan eller integrationer: skriv även **Ägare**.
- När något beslutas: kopiera in det i beslutsloggen längst ner.

---

## Projekt & omfattning

- **Status: Öppen** — Vad är mål‑datum för go‑live och hur ser en fasad lanseringsplan ut (Fas 1 vs Fas 2)?
- **Status: Öppen** — Vilka funktioner är Fas 1 “måste ha” vs “bör ha” vs “senare”?
- **Status: Öppen** — Vilka är de viktigaste framgångsmåtten (konvertering, söklatens, sparad admin‑tid, etc.)?
- **Status: Öppen** — Vilka “marknadsfeatures” ingår i Fas 1: produktrecensioner, nyhetsbrev/automation, personliga rekommendationer, social delning?
- **Status: Öppen** — Presentkort: ska det ingå i Fas 1 och hur hanteras köp/inlösen/återbetalning samt redovisning?

## Teknikval (plattform)

- **Status: Öppen** — Sökstrategi: databasfacettering vs separat sökindex (Algolia/Meilisearch/Elastic) och krav på relevans (synonymer, boost, noll‑träffar).
- **Status: Öppen** — CMS‑val: inbyggt i admin vs extern headless CMS, samt krav på arbetsflöde (utkast/granskning/publicering) och roller.
- **Status: Öppen** — Hosting: leverantör, region, CDN, miljöer (dev/stage/prod) och deploymentsstrategi (inkl rollback).
- **Status: Öppen** — Logg/metrics/tracing‑plattform och hur länge loggar/audit‑loggar ska sparas.
- **Status: Öppen** — E‑postleverantör (transaktionsmail + ev. marketing) och avsändardomän (SPF/DKIM/DMARC) för leveranssäkerhet.

## Integrationer (Sharespine / Fortnox / frakt)

- **Status: Öppen** — Vilket system är “source of truth” för produkter, priser, lager och order?
- **Status: Öppen** — Vilka Sharespine‑endpoints/events ska vi använda (produkter, saldo, priser, order, kunder)?
- **Status: Öppen** — Vilken synkmodell gäller: webhookar nära realtid, schemalagd synk eller hybrid?
- **Status: Öppen** — Fortnox‑omfattning: endast fakturor, bokföring, kunder, produkter, order, kreditnotor?
- **Status: Öppen** — Fraktleverantörer: bekräfta transportörer (DHL, PostNord, andra) och vilken API‑nivå (priser, etiketter, spårning, upphämtning).

## Flerspråkighet

- **Status: Öppen** — Bekräfta språk för Fas 1 (minst svenska + engelska?).
- **Status: Öppen** — Vad måste översättas: navigering, CMS‑sidor, produktdata, kategoridata, e‑post, PDF:er, kassa, felmeddelanden?
- **Status: Öppen** — Översättningsflöde: manuellt i admin, import från PIM eller extern översättningstjänst?
- **Status: Öppen** — Regler för språkval: användarval, browser‑locale, geo/IP, URL‑prefix (t.ex. /sv, /en) och SEO‑strategi.

## Flervaluta

- **Status: Öppen** — Vilka valutor krävs i Fas 1 (endast SEK, SEK+EUR, fler)?
- **Status: Öppen** — Källa för växelkurser och uppdateringsfrekvens (dagligen, timvis) samt avrundningsregler.
- **Status: Öppen** — Prisstrategi per valuta: konverterat från SEK eller separata prislistor per marknad?
- **Status: Öppen** — Juridik/ekonomi: krav på valuta i kassa vs valuta på faktura.

## Priser, B2B & offerter

- **Status: Öppen** — B2B‑prismodell: kundunika prislistor, rabattrappor, avtalspriser eller kombination?
- **Status: Öppen** — Gäller kampanjer/rabattkoder för B2B‑konton?
- **Status: Öppen** — Offertregler: vilka produkter kan offereras vs köpas direkt?
- **Status: Öppen** — Godkännandeflöde: vem godkänner, SLA, delgodkännanden, redigeringsrättigheter.
- **Status: Öppen** — Offert till order: hur låses priser och hur länge gäller de?

## Kassa, betalningar & moms

- **Status: Öppen** — Betalleverantörer: bekräfta Klarna‑upplägg och ev. fler leverantörer (kortinlösen, faktura/B2B‑villkor).
- **Status: Öppen** — Betalflöde: authorize vs capture (när sker capture), stöd för partial capture, refunds och hur idempotens ska hanteras.
- **Status: Öppen** — Moms: regler utöver Sverige/EU (export, omvänd moms för B2B, VAT‑validering).
- **Status: Öppen** — Adressvalidering och obligatoriska fält per marknad.
- **Status: Öppen** — Orderbekräftelser: e‑postmallar, PDF:er (faktura/kvitto/offert) och krav på branding.
- **Status: Öppen** — Övergivna varukorgar: vilket system skickar notiser, vilka triggers gäller och hur samtycke/GDPR hanteras.

## Frakt & returer

- **Status: Öppen** — Fraktlogik: vikt/volym, farligt gods, skrymmande varor, schemalagd leverans för båt/trailer.
- **Status: Öppen** — Retur/RMA: vem betalar returfrakt, returperioder, regler för återbetalning.
- **Status: Öppen** — Krävs etikettgenerering eller kundinitierad retur hos ombud?

## Katalog, innehåll & SEO

- **Status: Öppen** — Produktdatamodell: varianter, kompatibilitetsregler, obligatoriska attribut för marina delar.
- **Status: Öppen** — Hur representeras kompatibilitet: regelmotor/tabell/attribut, och vilka “fitment”-dimensioner måste stödjas i Fas 1.
- **Status: Öppen** — Media: var hostas bilder/video/manualer (CDN, Sharespine, internt)?
- **Status: Öppen** — SEO‑krav: URL‑strategi, redirects från WordPress, scope för strukturerad data, sitemap‑regler.
- **Status: Öppen** — Blogg/guider: krävs full blogg i Fas 1 eller endast statiska guider?

## Migrering (förtydliganden)

- **Status: Öppen** — Ska orderhistorik migreras (B2C/B2B) eller endast från go‑live och framåt?
- **Status: Öppen** — Redirect‑acceptans: hur mäts “coverage” (topp‑URL:er?), måltröskel och hantering av 404:or.
- **Status: Öppen** — Freeze window inför go‑live: hur långt och vem godkänner undantag?
- **Status: Öppen** — Content owners: vem äger vilka innehållsytor (guider, kategorier, produkttexter) och vem godkänner publicering?

## Konton, roller & säkerhet

- **Status: Öppen** — Roller/behörigheter: definiera adminroller och vad varje roll kan göra (katalog, order, marknad, rapporter).
- **Status: Öppen** — Autentisering: endast e‑post/lösenord, SSO, och om MFA är obligatoriskt för admin.
- **Status: Öppen** — Revisionslogg: vilka åtgärder måste loggas och hur länge sparas loggar.

## Analys & rapportering

- **Status: Öppen** — Analytics‑stack: GA4, server‑side tracking, krav på samtyckeshantering.
- **Status: Öppen** — Rapportkrav: vilka dashboards och exporter behövs i Fas 1.

## Integritet/GDPR (process)

- **Status: Öppen** — Samtyckesplattform för cookies/marketing och krav på geografi (EU) samt loggning av samtycke.
- **Status: Öppen** — DSAR‑process: registerutdrag/radering (SLA, ansvar) och hur data raderas i integrationer.
- **Status: Öppen** — Datalagring: retention för PII (kund/order), loggar och audit‑loggar.

## Datamigrering (från WordPress)

- **Status: Öppen** — Vilket innehåll/data måste migreras: produkter, kategorier, kunder, order, blogg, media, redirects.
- **Status: Öppen** — Ansvar för migrering: automatiserade scripts vs manuell import, samt acceptanskriterier.

## Prestanda, drift & hosting

- **Status: Öppen** — Hostingmål: molnleverantör, miljöer (dev/stage/prod) och deploymentsstrategi.
- **Status: Öppen** — Prestandamål (t.ex. LCP, svarstider i sök) och lastförväntningar.
- **Status: Öppen** — Krav på övervakning/larm och förväntningar för beredskap.
- **Status: Öppen** — Incidenthantering: on‑call/beredskap, ägare för runbooks och process för manuella åtgärder vid integrationsfel (dead‑letter/replay).

---

## Beslutslogg

- (ÅÅÅÅ-MM-DD) **Beslut:** …
