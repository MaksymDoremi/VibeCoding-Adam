# (INTERNÍ PLÁN)  
# AI Vibe Coding – pilotní kurz pro děti zaměstnanců (13+)
**Připravil:** Maksym Kintor  
**Lektoři:** Kateřina, Martin, Maksym  
**Délka:** 10 × 60 minut  
**Forma:** praktický workshop 

---

## Hlavní cíl kurzu (upravený scope)
Cílem kurzu **není** učit děti klasické programování do hloubky, ale:
- vyvolat **wow efekt** moderního vývoje
- ukázat, že dnes lze s pomocí AI vytvořit funkční aplikaci velmi rychle
- naučit děti základní mentální model:
  **nápad → kód → běžící aplikace → online**

Kurz je postavený na **vibe codingu**:
- AI generuje většinu kódu
- děti + lektoři řeší:
  - pochopení
  - drobné úpravy
  - debugging
  - design a logiku

---

## Zvolený technologický přístup 

### Frontend
- **React (Node.js)** – není potřeba vysvětlovat React do hloubky
- UI generované pomocí **v0.app**
- Stylování řešeno hotovými komponentami (bez teorie CSS)

### Backend – postupně
- Hodiny 1–8:
  - jednoduché API / logika na **Vercelu**
  - lokální data (array, localStorage, mock data)
- Hodiny 9–10:
  - **externí API na Renderu**
  - samostatná backend služba (Node.js)
  - hardcoded data (array), bez DB

### AI nástroje
- **Cursor** – hlavní nástroj (editor + AI agent)
- **ChatGPT** – vysvětlování, nápady, debugging
- **v0.app** – rychlá generace UI

> Interní pozn.: děti neřeší „co je React / Node / serverless“. Pracují s tím jako s nástrojem.

---

## Metodika výuky
- každá hodina končí **funkční aplikací**
- minimální teorie, maximální vizuální výsledek
- žádné dlouhé psaní kódu ručně

---

# Struktura kurzu (10 × 60 minut)

---

## Hodina 1 – Co je programování
**Cíl:** pochopit, že programování = instrukce, ne magie  
**Výstup:** jednoduchá interaktivní stránka (Clicker)

**Obsah:**
- seznámení, očekávání
- vysvětlení: program = sada příkazů
- základní pojmy slovně:
  - proměnná (krabička)
  - funkce (recept)
  - if (rozhodnutí)
- pomocí Cursoru vygenerovat:
  - tlačítko
  - počítadlo kliků
- úprava textů a barev

---

## Hodina 2 – AI jako parťák (vibe coding)
**Cíl:** naučit se mluvit s AI tak, aby pomáhala  
**Výstup:** rozšířený Clicker (achievement / alert)

**Obsah:**
- jak psát dobrý prompt
- AI ≠ pravda, ale návrh
- přidání:
  - if podmínky
  - jednoduché logiky
  - přídání visual effectu na klik, nebo cokoli dalšího, také zaregistrovat eventy na zmáčknutí klávesnice (třeba pojízdné auto na browseru WASD)
- deploy první aplikace na **Vercel**

---

## Hodina 3 – CRUD na frontendu (ToDo / Habit app)
**Cíl:** práce s daty v aplikaci  
**Výstup:** ToDo app s uložením do localStorage

**Obsah:**
- pole (array) jako seznam
- přidání / smazání položky
- uložení stavu aplikace
- UI generované přes v0

---

## Hodina 4 – Hra: Quiz
**Cíl:** logika, skóre, příprava na sdílená data  
**Výstup:** kvízová hra s výsledkem

**Obsah:**
- otázky jako pole objektů
- skóre
- přepínání obrazovek
- příprava na odesílání výsledků (zatím jen lokálně)
- časovač (bonus)

---

## Hodina 5 – Leaderboard (sdílená data přes API na Vercelu)
**Cíl:** pochopit, že data mohou být sdílená mezi lidmi  
**Výstup:** leaderboard aplikace napojená na API

**Obsah:**
- jednoduchý API endpoint na Vercelu
- odeslání skóre z quizu
- načtení TOP výsledků
- řazení, validace
- jednoduchý UI leaderboard

---

## Hodina 6 – První „backend“ (na Vercelu)
**Cíl:** pochopit API jako zdroj dat  
**Výstup:** mini blog / seznam dat z API

**Obsah:**
- frontend volá API přes fetch
- API vrací JSON
- data jsou zatím jen v paměti
- propojení FE ↔ BE

---

## Hodina 7 – Remix & vlastní mini projekt
**Cíl:** kreativita + příprava na hru  
**Výstup:** rozšířená aplikace nebo prototyp hry

**Obsah:**
- děti si vyberou:
  - rozšíření quizu
  - vylepšení leaderboardu
  - příprava herní logiky (grid, pohyb, skóre)
- práce s Cursor agentem
- ladění a stabilizace

---

## Hodina 8 – Hra: Snake (frontend)
**Cíl:** ukázat, že i hra je jen logika + stav  
**Výstup:** hratelná Snake hra v prohlížeči

**Obsah:**
- herní plocha jako grid
- pohyb hada (interval / klávesy)
- jídlo
- skóre
- game over
- funkčnost > dokonalost

---

## Hodina 9 – VLASTNÍ EXTERNÍ API (Render)
**Cíl:** pochopit rozdíl mezi frontendem a backendem  
**Výstup:** vlastní API běžící na Renderu

**Obsah:**
- vysvětlení: co je externí API
- Node.js backend (velmi jednoduše):
  - GET `/items` nebo `/scores`
  - data = hardcoded array
- deploy backendu na **Render**
- test API v prohlížeči (JSON)

---

## Hodina 10 – UI klient + finální prezentace
**Cíl:** propojit Vercel appku s externím API  
**Výstup:** frontend, který čte data z Render API

**Obsah:**
- odeslání skóre na externí API (Render)
- fetch z cizí URL
- loading / error stav
- zobrazení TOP hráčů (leaderboard)
- hezké UI (v0)
- finální prezentace projektů
- shrnutí celého kurzu

---


# Proč Render (jen na konci)
- ukazuje **opravdový backend server**
- kontrast k Vercelu (serverless)
- děti pochopí:
  > „Frontend ≠ Backend“

Bez toho, aby musely řešit DB, auth, škálování.

---

## Rizika a mitigace (interně)
- pokud Render zlobí → použít připravený demo backend
- pokud AI generuje chaos → vrátit se na připravené prompty
- vždy mít **fallback hotový projekt**

---

# MARKETINGOVÝ POPIS (pro pilot mezi zaměstnanci)

### AI Vibe Coding – kreativní kurz programování pro děti (13+)

Vaše děti si během 10 interaktivních lekcí vyzkouší, jak dnes vznikají moderní aplikace –  
**od nápadu až po běžící web a vlastní API na internetu**.

Kurz je postavený na moderním přístupu:
- děti neopisují kód z tabule
- pracují s umělou inteligencí jako s parťákem
- tvoří vlastní hry, aplikace a weby
- vše si samy vyzkouší a uvidí okamžitý výsledek

Na konci kurzu:
- každé dítě má **několik vlastních aplikací online**
- chápe rozdíl mezi frontendem a backendem
- ví, že technologie nejsou jen pasivní konzumace, ale nástroj k tvorbě

Kurz je vhodný i pro děti **bez předchozí zkušenosti s programováním**.

> Pilotní verze je určena pro děti zaměstnanců a slouží k ověření konceptu před veřejným spuštěním.

---