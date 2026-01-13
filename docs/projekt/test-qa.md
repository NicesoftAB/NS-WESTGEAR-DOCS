---
id: test-qa
title: Test & QA
---

## Syfte

Definierar hur vi säkerställer kvalitet i funktioner, integrationer och prestanda.

## Testnivåer

- **Unit tests:** affärslogik (prisregler, moms, offertregler)
- **Integration tests:** Sharespine/Fortnox/frakt/betalning mot sandbox + kontraktstester
- **E2E tests:** kritiska flöden i storefront (sök → produkt → cart → checkout)
- **Manual QA:** mobil, tillgänglighet, edge cases

## Kritiska flöden (Fas 1)

- Inloggning/registrering + B2B prisvisning
- Sök + facettering + kompatibilitetsfilter
- Varukorg beständighet
- Checkout: fraktval + betalning + orderbekräftelse
- Offert: request → admin review → PDF → convert to order
- RMA: initiera → status → återbetalning (om i scope)

## Kontraktstester (rekommenderat)

- Spara exempelpayloads för:
  - produkt/pris/lager från Sharespine
  - order till Sharespine/Fortnox
  - fraktpris request/response
  - betalningscallback
- Validera schema + obligatoriska fält

## Testdata

- Liten representativ katalog (smoke)
- Stor katalog (prestanda)
- B2B-kund med prislista
- Produkter med varianter, media, kompatibilitet

## Tillgänglighet

- Mål: WCAG 2.1 AA enligt [NFR](./icke-funktionella-krav.md)
- Checklista:
  - tangentbord, fokus
  - formulärfel, aria-labels
  - kontrast

## Release-kvalitetsgrindar (förslag)

- Inga blockerande e2e-fel
- p95 API-latency under måltal (att spika)
- Checkout-felgrad inte ökande
- Synk-lag under tröskel

## Referenser

- [Icke-funktionella krav](./icke-funktionella-krav.md)
- [Integrationer](./integrationer.md)
