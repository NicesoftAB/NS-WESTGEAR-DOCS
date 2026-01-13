---
id: user-stories
title: Användarberättelser
---

Varje funktion är skriven som en användarberättelse (Som [roll] vill jag [funktion], så att [nytta]) med acceptanskriterier.

---

## 1. Kundautentisering

**Användarberättelse:**
Som kund vill jag kunna logga in eller skapa ett konto, så att jag kan se min orderhistorik och handla effektivt.

**Acceptanskriterier:**

- Kunder kan registrera sig med e‑post/lösenord.
- Kunder kan logga in via SSO (valfritt).
- B2B‑kunder ser prisnivåer som är korrekta för deras konto.
- Administratörer kan tilldela roller och behörigheter.
- Tvåfaktorsautentisering finns för administratörer.

---

## 2. Produktkatalog

**Användarberättelse:**
Som kund vill jag kunna bläddra i en strukturerad katalog med detaljerad produktinformation, så att jag enkelt kan hitta och jämföra produkter.

**Acceptanskriterier:**

- Produktkategorier och underkategorier visas hierarkiskt.
- Produkter kan ha flera varianter och rich media.
- Kompatibilitetsfilter gör det möjligt att hitta kompatibla tillbehör.
- Lagerstatus är korrekt och uppdateras från Sharespine.

---

## 3. Sök & navigering

**Användarberättelse:**
Som kund vill jag kunna söka efter produkter snabbt och filtrera på varumärke, typ eller specifikation, så att jag hittar rätt utan frustration.

**Acceptanskriterier:**

- Sök stödjer autocomplete och stavningskorrigering.
- Filter och facets finns för varumärke, pris och kompatibilitet.
- Megameny visar kategorier på ett intuitivt sätt.
- Kunder kan lägga i varukorg eller begära info direkt från sökresultat.

---

## 4. Priser & kampanjer

**Användarberättelse:**
Som marknadsansvarig vill jag kunna skapa kampanjer och rabatter, så att jag kan driva försäljning.

**Acceptanskriterier:**

- Admin kan skapa rabattkoder, paketrabatter och volymrabatter.
- B2B‑kunder ser korrekt prissättning.
- Kampanjer kan schemaläggas i förväg.

---

## 5. Varukorg & kassa

**Användarberättelse:**
Som kund vill jag kunna lägga varor i varukorgen och checka ut snabbt, så att köpupplevelsen blir smidig.

**Acceptanskriterier:**

- Varukorgen är beständig mellan enheter.
- Gästkassa och inloggad kassa finns.
- Flera betalningsmetoder stöds.
- Fraktpriser beräknas i realtid.
- E‑post för övergivna varukorgar triggas.

---

## 6. Språk & valuta (internationalisering)

**Användarberättelse:**
Som kund vill jag kunna använda sajten på mitt språk och se priser i min valda valuta, så att jag kan förstå produkter och totalsummor med trygghet.

**Acceptanskriterier:**

- Kunder kan välja språk (minst svenska och engelska).
- Kunder kan välja valuta (SEK samt ytterligare konfigurerade valutor).
- Produktlistor och produktsidor visar priser i vald valuta.
- Varukorg och kassa visar totalsummor i vald valuta.
- Orderbekräftelser och fakturor/kvitton speglar valt språk och vald valuta.
- Språk- och valutaval sparas mellan sessioner/enheter där det är tillämpligt.

---

## 7. Offertsystem (B2B)

**Användarberättelse:**
Som B2B‑kund vill jag kunna begära en offert istället för att köpa direkt, så att jag kan få godkännande och förhandla vid behov.

**Acceptanskriterier:**

- Kunder kan begära offert för produkter som är offertberättigade.
- Admin kan godkänna, avslå eller justera offerter.
- Godkända offerter kan konverteras till order.
- PDF‑versioner av offerter kan laddas ner.

---

## 8. Frakt & returer

**Användarberättelse:**
Som kund vill jag se fraktalternativ och kunna spåra min leverans, så att jag vet när mina varor kommer.

**Acceptanskriterier:**

- Fraktkostnader och transportörer visas i kassan.
- Spårningsinformation tillhandahålls efter köp.
- Returer kan initieras online och följas via RMA.
- Stora varor har flöden för schemalagd leverans.

---

## 9. Marknad & engagemang

**Användarberättelse:**
Som marknadsansvarig vill jag hantera kampanjer och produktpromotioner, så att vi kan engagera kunder effektivt.

**Acceptanskriterier:**

- Admin kan schemalägga startsidesbanners och kampanjer.
- Kunder kan lämna produktrecensioner.
- Produkter kan delas i sociala medier.
- Personliga rekommendationer visas baserat på kundbeteende.

---

## 10. Admin & analys

**Användarberättelse:**
Som administratör vill jag ha dashboards och rapporter, så att jag kan följa försäljning, lager och operativa nyckeltal.

**Acceptanskriterier:**

- Admin kan se order, returer och offerter.
- Rapporter finns per produkt, kategori och kampanj.
- Lagerlarm notifierar vid låg lagernivå.
- Aktivitetsloggar för användare hålls uppdaterade.

---

## 11. CMS & innehåll

**Användarberättelse:**
Som innehållsansvarig vill jag kunna skapa och redigera produktbeskrivningar, guider och blogginlägg, så att kunderna får bästa möjliga information.

**Acceptanskriterier:**

- WYSIWYG‑editor stödjer formaterad text, bilder och video.
- SEO‑metadata kan redigeras per sida/produkt.
- Flerspråkigt innehåll stöds (minst svenska och engelska).
