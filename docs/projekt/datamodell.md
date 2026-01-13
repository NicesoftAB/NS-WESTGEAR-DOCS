---
id: datamodell
title: Datamodell (koncept)
---

## Syfte

Det här är en **konceptuell** datamodell för att få samsyn om vilka entiteter som behövs och hur de hänger ihop. Den ska sedan översättas till faktisk databasmodell och API-kontrakt.

## Kärnentiteter

### Produkt

- `Product`
  - id, slug, status (draft/published), brand
  - media (bilder/video/manualer)
  - attribut/specifikationer
  - kategorirelationer
  - språkfält (namn/beskrivning)

### Variant

- `Variant`
  - sku (unika), ean/gtin (om finns)
  - variantattribut (t.ex. storlek/färg/motortyp)
  - kompatibilitetsdata (för marina delar)

### Kategori

- `Category`
  - hierarki (parent/children)
  - språkfält + SEO-fält

### Pris

- `Price`
  - valuta
  - pris inkl/exkl moms (att standardisera)
  - giltighet (start/slut)
  - prislista (B2C/B2B-nivå)
  - kampanjkoppling

### Lager

- `Inventory`
  - sku
  - qty
  - lagerplats/kanal (att besluta)
  - backorder/restorder-regel (att besluta)

### Kund och konto

- `Customer`
  - B2C: person
  - B2B: företag + orgnr + kontaktpersoner
- `Account`
  - B2B-prisnivå, betalvillkor, fakturaadress, leveransadresser

### Varukorg

- `Cart`
  - rader (sku, qty, pris snapshot, valuta)
  - kopplad till gäst-session eller kund

### Order

- `Order`
  - rader (sku, qty, pris snapshot)
  - totals, moms, frakt
  - statusflöde (created/paid/shipped/returned/cancelled)
  - språk/valuta snapshot
  - externa id (betalning, Sharespine/Fortnox)

### Offert

- `Quote`
  - rader, giltighetstid
  - statusflöde (requested/reviewed/approved/expired/converted)
  - PDF-version(er)

### Retur (RMA)

- `RMA`
  - orderkoppling
  - returorsak, status, spårning
  - återbetalningsinfo

## Tvärgående fält och principer

- **Internationalisering:**
  - Språkversioner för product/category/content
  - Valuta snapshot på cart/order/quote
- **SEO:**
  - slug, canonical, redirects (för migrering)
- **Audit:**
  - skapad/uppdaterad, vem gjorde ändringen

## Öppna designbeslut

- Hur representeras kompatibilitet? (tabell, regler, attribut)
- Hur hanteras kampanjpriser vs listpriser?
- Hur många prislistor krävs i Fas 1?

## Nästa steg

- Bryt ner till faktisk databasmodell
- Definiera API-kontrakt (request/response) för katalog, cart, checkout, offerter

## Referenser

- [Katalog & sök](../krav/katalog-sok.md)
- [Priser & kampanjer](../krav/priser-kampanjer.md)
- [Integrationer](./integrationer.md)
