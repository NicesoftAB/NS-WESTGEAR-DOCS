---
id: migrering
title: Datamigrering (från WordPress)
---

## Syfte

Plan för migrering från nuvarande WordPress-lösning till nya plattformen. Migrering är ofta det som avgör go-live-risk, så den behöver vara konkret tidigt.

## Vad ska migreras (inventering)

### Innehåll

- Sidor (guider, informationssidor)
- Blogg (om den ska ingå i Fas 1)
- Media (bilder, PDF/manualer)

### E-handel / katalog (källa att besluta)

- Produkter, varianter, attribut
- Kategorier och navigationsstruktur
- SEO-data: title/description, canonical (om relevant), schema, alt-texter

### Kunddata

- Konton (B2C/B2B)
- Adresser
- (Ev) orderhistorik (beslut: krävs i ny plattform?)

### SEO och URL:er

- URL-struktur i nya plattformen
- Redirects 301 från WordPress
- Sitemaps

## Källor (att spika)

- WordPress export (WP-CLI / DB dump)
- Sharespine som katalogkälla
- Externa PIM/ERP-källor (om finns)

## Migreringsstrategi (rekommenderad)

1. **Inventering**
   - Lista content-typer, mallar och specialfall
2. **Mappning**
   - Fält för fält (inkl SEO)
3. **Verktyg och scripts**
   - Scriptad migrering där möjligt
4. **Provkörning i stage**
   - Repetera tills acceptanskriterier nås
5. **Freeze window**
   - Minimera innehållsförändringar inför go-live
6. **Cutover**
   - DNS + redirects + verifiering

## Acceptanskriterier

- 0 brutna kritiska sidor (prioriterad lista)
- Redirect coverage > 95% för topp-URL:er (att definiera)
- Media laddar snabbt och har korrekt åtkomst
- Inga PII-läckor i publika sidor

## Risker och mitigering

- **Risk:** För många specialmallar i WordPress → **Mitigering:** tidig inventering + scope
- **Risk:** Redirects missas → **Mitigering:** export av URL-lista + test i stage
- **Risk:** Content owners saknas → **Mitigering:** tydliga ägare per content-område

## Nästa steg (att fylla i)

- Bestäm Fas 1: blog/guider ja/nej
- Ta fram URL-strategi + redirect plan
- Besluta om orderhistorik ska migreras

## Referenser

- [CMS & SEO](../krav/cms-seo.md)
- [Öppna frågor](../projekt/oppna-fragor.md)
- [Icke-funktionella krav](./icke-funktionella-krav.md)
