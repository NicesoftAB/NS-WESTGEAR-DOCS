---
id: riskregister
title: Riskregister
---

## Syfte

Gör risker synliga tidigt och kopplar dem till mitigering och ägarskap.

## Skala

- **Sannolikhet:** Låg / Medel / Hög
- **Konsekvens:** Låg / Medel / Hög

## Risker (startlista)

| Risk                                               | Sannolikhet | Konsekvens | Mitigering                                           | Ägare | Status |
| -------------------------------------------------- | ----------- | ---------- | ---------------------------------------------------- | ----- | ------ |
| Oklara source-of-truth regler för pris/lager/order | Hög         | Hög        | Beslut i Öppna frågor + datakontrakt i Integrationer |       | Öppen  |
| Sök/facettering blir långsam med stor katalog      | Medel       | Hög        | Välj sökstrategi tidigt, lasttest i stage            |       | Öppen  |
| Migrering/redirects ger SEO-tapp                   | Medel       | Hög        | URL-strategi + redirect test + soft launch           |       | Öppen  |
| Betalningsintegration ger avbrutna köp             | Låg         | Hög        | Sandbox→stage→prod test, observability               |       | Öppen  |
| B2B-prislogik otydlig                              | Hög         | Medel      | Spika prislista/rabattregler, testfall i QA          |       | Öppen  |

## Nästa steg

- Fyll i ägare per risk
- Lägg till risker per integration och drift
- Uppdatera status inför varje release

## Referenser

- [Öppna frågor](../projekt/oppna-fragor.md)
- [Integrationer](./integrationer.md)
- [Releaseplan](./releaseplan.md)
