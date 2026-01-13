---
id: arkitektur
title: Arkitektur (översikt)
---

## Syfte

Det här dokumentet beskriver den tänkta systemarkitekturen för WestGear. Eftersom `client/` och `server/` i repo:t ännu är tomma (jan 2026) är detta en **målbild** som ska uppdateras när implementationen tar form.

## Målbild (Fas 1)

- Snabb och stabil kundupplevelse (mobil först)
- Tydlig separation mellan butik (frontend), backend/API och integrationer
- Robust synk mellan Sharespine ↔ butik (produkter, priser, lager, order)
- Stöd för B2C + B2B (prisnivåer, offerter)
- Flerspråkighet + flervaluta enligt beslut i [Öppna frågor](../projekt/oppna-fragor.md)

## Systemdelar (konceptuellt)

- **Storefront (kund)**
  - Produktlistor, produktdetalj, sök, varukorg, kassa, konto
- **Admin (intern)**
  - Katalog/ordrar/kampanjer/offerter/rapporter
- **Backend/API**
  - Affärslogik, autentisering, checkout, prisregler, integrationer
- **Integrationer**
  - Sharespine (PIM/OMS-brygga), Fortnox, frakt, betalning, e-post
- **Datastore / cache / sökindex**
  - Lagring av butikens egna data + cache + (ev) separat söktjänst/index

## Dataflöden (att implementera)

### Produkt, lager, pris

- **Source of truth (att besluta):** se [Öppna frågor](../projekt/oppna-fragor.md)
- Typisk modell:
  - Sharespine → (webhook/schemalagd synk) → Backend → Datastore/Sökindex → Storefront
  - Backend validerar och normaliserar data (attribut, varianter, kompatibilitet)

### Order

- Storefront → Backend (order) → betalning/frakt → Sharespine/Fortnox
- Viktigt: **idempotens** vid order- och betalningscallbacks (samma event kan komma flera gånger)

### B2B & offerter

- B2B-kund kan:
  - se konto-/prisnivå
  - begära offert
- Admin kan:
  - revidera och godkänna offert
  - konvertera offert → order

## Autentisering och behörigheter

- **Kunder:** e-post/lösenord (ev SSO) enligt [Autentisering](../krav/autentisering-anvandare.md)
- **Admin:** roller + MFA krav (att spika)
- Rekommendation i Fas 1:
  - Separata admin-roller (katalog, order, marknad, rapport)
  - Audit-logg på kritiska händelser (prisändring, orderstatus, återbetalning)

## Prestanda och cachning (principer)

- Cachea läsintensiva endpoints (kategorier, topplistor, facetter)
- Sök ska vara optimerad för facettering och stora kataloger
- Mätning och mål definieras i [Icke-funktionella krav](./icke-funktionella-krav.md)

## Beslut som måste tas (checklista)

- Vilken är **source of truth** för produkt/pris/lager/order?
- Synkmodell: webhook, batch eller hybrid?
- Sökmotor/index: databasfacettering eller separat sök (ex. Algolia/Meilisearch/Elastic) (att välja)
- CMS: integrerat i admin eller extern headless CMS (att välja)
- Hosting och miljöer (dev/stage/prod) (att välja)

## Referenser

- [Integrationer](./integrationer.md)
- [Datamodell (koncept)](./datamodell.md)
- [Drift & övervakning](./drift-och-overvakning.md)
