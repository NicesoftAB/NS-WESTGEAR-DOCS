---
id: icke-funktionella-krav
title: Icke-funktionella krav (NFR)
---

## Syfte

De här kraven sätter ribban för prestanda, säkerhet, tillgänglighet och driftbarhet. De ska vara **mätbara**.

## Prestanda

### Mål (Fas 1)

- Produktlistor och produktdetaljer ska upplevas snabba på mobil.
- Sök och facettering ska svara snabbt även med stor katalog.

### Mätpunkter (rekommenderat)

- Core Web Vitals: LCP, INP, CLS (mät i verklig trafik)
- Backend/API: p95 latency per endpoint
- Sök: p95 time-to-first-result och facet-beräkning

### Öppna beslut

- Måltal för p95/p99 och CWV (att spika innan bygg)

## Tillgänglighet (WCAG)

- Mål: WCAG 2.1 AA som minimum för storefront
- Tangentbordsnavigering, kontraster, fokus, formulärfel
- Dokumentera testmetod (manuell + automatiserad)

## Säkerhet

- OWASP Top 10 som baseline
- MFA för admin (krav finns i [Autentisering](../krav/autentisering-anvandare.md))
- Rate limiting och skydd mot credential stuffing
- Säker hantering av PII och tokens
- Loggning utan känslig data (maskning)

## Integritet/GDPR

- Samtycke för analytics/marketing (att välja plattform)
- Registerutdrag och radering (process + ansvar)
- Dataminimering: lagra bara det som behövs

## Driftbarhet/Observability

- Loggar: korrelations-id över tjänster
- Metrics: latency, error rate, queue depth, sync-lag
- Tracing (om stacken stödjer)
- Larm med tydliga runbooks

## Tillförlitlighet

- Definiera RTO/RPO för data som butiken äger
- Backups och återställningstest
- Degraderat läge vid integrationsstörning (t.ex. visa senast kända lagersaldo)

## SEO

- Snabba sidor, läsbara URL:er
- Sitemaps + strukturerad data
- Redirect-plan från WordPress (se [Migrering](./migrering.md))

## Referenser

- [Drift & övervakning](./drift-och-overvakning.md)
- [CMS & SEO](../krav/cms-seo.md)
- [UX & UI](../krav/ux-ui.md)
