---
id: integrationer
title: Integrationer (Sharespine, Fortnox, frakt, betalning)
---

## Översikt

WestGear kommer kräva flera integrationer. Målet med detta dokument är att göra integrationerna **testbara**, **driftsatta** och **felsökbara**.

- Beslutspunkter och oklarheter samlas i [Öppna frågor](../projekt/oppna-fragor.md).

## Gemensamma principer

- **Idempotens:** alla inkommande webhookar/callbacks ska kunna hanteras flera gånger utan dubbla effekter.
- **Retry-policy:** backoff + dead-letter/”manuell åtgärd” efter X försök.
- **Observability:** logga korrelations-id, externa request-id, payload-sammandrag (ej PII), latency och felkoder.
- **Datakontrakt:** dokumentera fältmappning, obligatoriska fält och valideringsregler.
- **Secrets:** API-nycklar i secrets manager/CI, aldrig i repo.

## Sharespine

### Omfattning (Fas 1)

- Produkter + varianter
- Lager/saldo
- Prislistor / B2B-priser
- Order (skapa, status, eventuella återbetalningar/returer)
- Kunder (minst B2B-kundkoppling om relevant)

### Synkmodell (att besluta)

- **Webhook nära realtid** för kritiska ändringar (lager/pris)
- **Batch/schemalagd** för full refresh och driftssäkerhet

### Felhantering

- Tydlig hantering för:
  - schemaförändringar
  - saknade obligatoriska fält
  - trasiga varianter/attribut
- ”Quarantine”-läge för produkter som inte kan publiceras

### Checklista: datamappning

- Produkt:
  - SKU/Artikelnummer, namn, beskrivning, varumärke, media
  - attribut/specifikationer
  - språkversioner
- Variant:
  - SKU, variantattribut, EAN/GTIN (om finns)
- Lager:
  - per lagerplats? per kanal? (att spika)
- Pris:
  - lista, kampanj, B2B-nivå
  - valuta, moms inkl/exkl

## Fortnox

### Omfattning (att besluta)

- Fakturor
- Kunder
- Order
- Kreditnotor/returer
- Bokföringsverifikationer (om scope)

### Viktiga frågor

- När skapas faktura (vid betalning, vid leverans, manuell)?
- Hur hanteras del-leverans, restorder och kredit?
- Vilket system äger kundregister för B2B?

## Frakt (DHL, PostNord, andra)

### Funktioner

- Fraktprisberäkning i kassan
- Etikettgenerering (om Fas 1)
- Spårning
- Särflöden för skrymmande varor (båt/trailer)

### Regler (att dokumentera)

- Vikt/volym, farligt gods, skrymmande
- Leveranstider och cutoff
- Schemalagd leverans: process + kommunikation

## Betalning (ex. Klarna)

### Funktioner

- Kort + faktura/delbetalning (enligt val)
- Webhooks/callbacks för betalstatus
- Orderbekräftelse (språk/valuta)

### Säkerhet

- Signeringsvalidering av callbacks
- Idempotent ”capture”/”refund”

## E-post och PDF

- Transaktionsmail: orderbekräftelse, frakt, RMA, offert
- PDF: offert/faktura/kvitto (att besluta exakt)

## Test & verifiering

- Mockmiljöer/sandbox för varje integration
- Kontraktstester för payloads
- Replay av webhookar i dev/stage

## Referenser

- [Arkitektur](./arkitektur.md)
- [Icke-funktionella krav](./icke-funktionella-krav.md)
- [Test & QA](./test-qa.md)
