---
id: drift-och-overvakning
title: Drift & övervakning
---

## Syfte

Beskriver hur lösningen ska driftsättas, övervakas och felsökas.

## Miljöer

- **Dev:** snabb iteration, testdata, replay av integrationsevents
- **Stage:** produktionslikt, releasekandidat, prestanda- och e2e-tester
- **Prod:** skarp trafik

## CI/CD (målbild)

- Automatiska checks: lint/typecheck/test
- Deploy per tjänst med tydlig versionsmärkning
- Migrations hanteras kontrollerat (om DB används)

## Övervakning

### Metrics (minimikrav)

- API: request rate, error rate, p95 latency
- Checkout: betalningsfel, avbrutna köp
- Sök: p95 latency, noll-träffar, fel
- Sync: webhook/batch-lag, antal fel per integration

### Loggar

- Korrelations-id per request/order
- Separera apploggar och audit-loggar

### Larm

- Alert på ökande felgrad i checkout
- Alert på ”sync-lag” över tröskel
- Alert på misslyckad batch-körning

## Backups och återställning

- Definiera vad som måste backas upp (DB, media, konfig)
- RPO/RTO enligt [NFR](./icke-funktionella-krav.md)
- Plan för återställningstest (minst kvartalsvis)

## Incidenthantering

- On-call/beredskap (att besluta)
- Runbooks för vanliga incidenter:
  - betalningsprovider nere
  - Sharespine laggar
  - fraktpris-API felar

## Säkerhetsdrift

- Patchrutiner och dependency scanning
- Secrets rotation
- Princip om minst privilegium för integrationstokens

## Öppna beslut

- Hosting: leverantör, region, CDN
- Logg/metrics/tracing-plattform
- Vem äger drift och larm (team/roll)
