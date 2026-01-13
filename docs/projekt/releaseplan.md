---
id: releaseplan
title: Release- och lanseringsplan
---

## Syfte

Skapa en tydlig, riskreducerande väg till go-live.

## Faser

### Fas 1 (MVP / Go-live)

- Must-have funktioner enligt beslut i [Öppna frågor](../projekt/oppna-fragor.md)
- Full checkout + orderflöde
- Synk av produkter/priser/lager
- Bas-SEO + redirects

### Fas 2 (efter go-live)

- Roadmap från [Framtida funktioner](../krav/framtida.md)

## Go-live checklista

- **Tekniskt**
  - Deploy pipeline klar + rollback
  - Monitoring/larm på plats
  - Backups verifierade
- **Integrationer**
  - Sharespine synk stabil
  - Betalning i prod-läge testad
  - Frakt i prod-läge testad
- **Content/SEO**
  - Redirects testade i stage
  - Sitemaps + robots
  - Toppsidor verifierade
- **Verksamhet**
  - Supportflöde för orderproblem
  - Rutiner för returer/RMA

## Rollout-strategi (förslag)

- Soft launch (begränsad trafik)
- Full launch
- Post-launch stabiliseringsperiod (1–2 veckor)

## Referenser

- [Migrering](./migrering.md)
- [Drift & övervakning](./drift-och-overvakning.md)
- [Test & QA](./test-qa.md)
