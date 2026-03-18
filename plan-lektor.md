# AI Vibe Coding – Rozšířený hodinový plán pro lektory

Tento dokument obsahuje detailní rozpis každé lekce (1–10) včetně aktivit, bonusů, tipů na řešení problémů a doporučení pro lektory. Vychází z původního plánu, ale je rozšířen o konkrétní instrukce a doporučení pro vedení workshopu.

---

## Hodina 1 – Co je programování
### Co se děti naučí
- Základy programování: co je instrukce, proměnná, funkce, podmínka
- Jak funguje jednoduchá interaktivní aplikace (Clicker)
- První zkušenost s AI asistencí při generování kódu
### Časté chyby a jak je řešit
- Zapomenutý return ve funkci – zkontrolujte, že funkce něco vrací.
- Nesprávný zápis proměnné – ověřte správný název a inicializaci.
**Cíl:** Pochopit, že programování = instrukce, ne magie  
**Výstup:** Jednoduchá interaktivní stránka (Clicker) + návrh: Interaktivní stránka s tlačítkem, které mění barvu nebo text.

**Kritéria výstupu:**
- Tlačítko, které po kliknutí mění barvu nebo text
- Zobrazení počtu kliknutí
- Možnost jednoduché úpravy vzhledu (barva, text)

### Průběh hodiny
- Seznámení, očekávání, icebreaker (proč programovat, co je AI)
- Vysvětlení: program = sada příkazů, základní pojmy (proměnná, funkce, if)
- Generování clickeru v Cursoru (tlačítko, počítadlo, úprava textů a barev)
- Testování, úpravy, otázky studentů
- Bonus: vlastní úpravy clickeru, sdílení výsledků
- **Návrh výstupu navíc:** Interaktivní stránka s tlačítkem, které mění barvu nebo text (pro rychlé pochopení reakce na akci).

### Bonus/rozšíření
- Přidat zvuk, animaci, změnu barvy
- Soutěž: kdo udělá nejzajímavější clicker

### Když něco nejde
- Připravte si hotový clicker pro demo
- Pokud AI generuje nesmysly, navrhněte konkrétní prompt

---

## Hodina 2 – AI jako parťák (vibe coding)
### Co se děti naučí
- Jak správně komunikovat s AI (psaní promptů)
- Rozšíření aplikace o nové funkce (achievement, alert)
- Základy testování a deploye na Vercel
### Časté chyby a jak je řešit
- Příliš obecný prompt – zkuste být konkrétnější.
- AI generuje nesmysly – upravte zadání nebo zkuste jiný příklad.
**Cíl:** Naučit se mluvit s AI tak, aby pomáhala  
**Výstup:** Rozšířený Clicker (achievement / alert) + návrh: Clicker s odemykatelným achievementem nebo alertem.

**Kritéria výstupu:**
- Tlačítko pro klikání
- Počítadlo bodů
- Alert nebo achievement po dosažení určitého počtu bodů
- Možnost upgradeu (např. zvýšení hodnoty kliknutí)
- Létající čísla jako body (animace)

### Průběh hodiny
- Jak psát dobrý prompt, ukázka rozdílu mezi špatným a dobrým zadáním
- Přidání podmínky (if), achievementu, alertu
- Přidání vizuálního efektu nebo ovládání klávesnicí (WASD auto)
- Deploy na Vercel, testování
- Bonus: další efekty, vlastní nápady
- **Návrh výstupu navíc:** Clicker s odemykatelným achievementem nebo alertem (pro pochopení podmínky a reakce na stav).

### Bonus/rozšíření
- Přidat zvuk, animaci, leaderboard
- Nechat studenty vymyslet vlastní feature

### Když něco nejde
- Připravte si ukázkový prompt a hotový kód
- Pokud Vercel nefunguje, ukažte deploy na screenu

---

## Hodina 3 – CRUD na frontendu (ToDo / Habit app)
### Co se děti naučí
- Práce s daty v aplikaci (pole, localStorage)
- Přidávání, mazání a ukládání položek
- Úprava UI pomocí online nástrojů (v0.app)
### Časté chyby a jak je řešit
- Zapomenuté uložení do localStorage – ověřte, že voláte správnou funkci.
- Chyba v práci s polem – zkontrolujte metody push, filter, map.
**Cíl:** Práce s daty v aplikaci  
**Výstup:** ToDo app s uložením do localStorage

**Kritéria výstupu:**
- Přidávání a mazání úkolů
- Uložení úkolů do localStorage
- Možnost označit úkol jako hotový
- Zobrazení počtu splněných úkolů
- Jednoduchý filtr (hotovo/čeká)

### Průběh hodiny
- Úvod do práce s daty, co je array, proč ukládat stav
- Vytvoření ToDo aplikace (přidání, mazání položek)
- Uložení do localStorage, vysvětlení rozdílu oproti proměnné
- Úpravy UI přes v0.app, testování
- Bonus: filtry, achievementy, vlastní úpravy

### Bonus/rozšíření
- Přidat filtr „hotovo/čeká“
- Achievement za splněné úkoly

### Když něco nejde
- Připravte si hotovou ToDo appku
- Pokud localStorage nefunguje, použijte proměnnou v paměti

---

## Hodina 4 – Hra: Quiz
### Co se děti naučí
- Tvorba kvízové logiky (otázky, skóre, vyhodnocení)
- Práce s polem objektů a podmínkami
- Přepínání obrazovek a základní herní mechaniky
### Časté chyby a jak je řešit
- Špatné vyhodnocení odpovědi – ověřte index správné odpovědi.
- Chyba v přepínání obrazovek – zkontrolujte podmínky a stav aplikace.
**Cíl:** Logika, skóre, příprava na sdílená data  
**Výstup:** Kvízová hra s výsledkem

**Kritéria výstupu:**
- Sada otázek s možnostmi odpovědí
- Vyhodnocení správnosti odpovědi
- Zobrazení skóre na konci hry
- Možnost restartu kvízu
- Přepínání mezi otázkami a výsledkovou obrazovkou

### Průběh hodiny
- Úvod, co je quiz, jak funguje skóre
- Vytvoření otázek (pole objektů), logika skóre
- Přepínání obrazovek, vyhodnocení výsledku
- Přidání časovače (bonus), testování
- Bonus: vlastní otázky, kreativní rozšíření

### Bonus/rozšíření
- Přidat časovač, více kol, vlastní otázky
- Soutěž o nejlepší quiz

### Když něco nejde
- Připravte si hotový quiz pro demo
- Pokud je málo času, použijte předpřipravené otázky

---

## Hodina 5 – Leaderboard (sdílená data přes API na Vercelu)
### Co se děti naučí
- Co je API a jak funguje sdílení dat
- Odesílání a načítání dat z API
- Práce s leaderboardem a validací dat
### Časté chyby a jak je řešit
- Chyba při fetchi dat – ověřte URL a správný endpoint.
- Nesprávné zpracování odpovědi z API – použijte response.json().
**Cíl:** Pochopit, že data mohou být sdílená mezi lidmi  
**Výstup:** Leaderboard aplikace napojená na API

**Kritéria výstupu:**
- Odeslání skóre na API
- Načtení a zobrazení TOP výsledků
- Řazení výsledků podle skóre
- Zobrazení jména a skóre hráče
- Možnost zadat přezdívku

### Průběh hodiny
- Vysvětlení, co je API a proč je důležité
- Odeslání skóre z quizu na API, načtení TOP výsledků
- Řazení, validace, úprava UI leaderboardu
- Testování, sdílení výsledků
- Bonus: společná prezentace, sdílení obrazovek

### Bonus/rozšíření
- Přidat další statistiky (počet pokusů, čas)
- Online prezentace prací studentů

### Když něco nejde
- Připravte si demo API a data
- Pokud API nefunguje, použijte mock data

---

## Hodina 6 – Hra: Snake (frontend)
### Co se děti naučí
- Herní logika a práce s gridem
- Programování pohybu, kolizí a skóre
- Tvorba jednoduché hry v prohlížeči
### Časté chyby a jak je řešit
- Chyba v pohybu hada – zkontrolujte aktualizaci souřadnic.
- Kolize sám se sebou – ověřte logiku detekce kolize.
**Cíl:** Ukázat, že i hra je jen logika + stav  
**Výstup:** Plně funkční Snake hra v prohlížeči – hráč ovládá hada pomocí šipek na klávesnici, had se pohybuje po herní ploše (gridu), sbírá jídlo (body), roste a hra končí při kolizi se stěnou nebo se sebou samým. Zobrazuje se aktuální skóre a možnost restartu hry.

**Kritéria výstupu:**
- Ovládání hada pomocí šipek
- Pohyb hada po gridu
- Zvětšování hada po snědení jídla
- Náhodné generování jídla
- Skóre podle počtu snědených jídel
- Konec hry při kolizi se stěnou nebo se sebou
- Možnost restartu hry

### Průběh hodiny
- Úvod do herní logiky, co je grid
- Vytvoření herní plochy, pohyb hada
- Přidání jídla, skóre, game over
- Testování, úpravy, diskuse
- Bonus: power-upy, obtížnosti

### Bonus/rozšíření
- Přidat power-upy, více úrovní
- Soutěž o nejlepší skóre

### Když něco nejde
- Připravte si hotovou Snake hru
- Pokud je málo času, použijte jednodušší verzi

---

## Hodina 7 – Remix & vlastní mini projekt
### Co se děti naučí
- Kreativní rozšíření aplikace podle vlastního nápadu
- Prezentace a testování projektů
- Spolupráce a zpětná vazba
### Časté chyby a jak je řešit
- Nerealistický rozsah projektu – doporučte zjednodušení.
- Zapomenuté testování – nechte studenty prezentovat a testovat navzájem.
**Cíl:** Kreativita + příprava na hru  
**Výstup:** Rozšířená aplikace nebo prototyp hry

**Kritéria výstupu:**
- Nová nebo rozšířená funkce v existující aplikaci
- Prezentace projektu před ostatními
- Zpětná vazba od spolužáků
- Vlastní nápad a kreativita

### Průběh hodiny
- Brainstorming: co by šlo vylepšit, nápady
- Práce na vlastním rozšíření (quiz, leaderboard, hra)
- Prezentace, sdílení, zpětná vazba

### Bonus/rozšíření
- Soutěž o nejzajímavější projekt
- Společné testování her

### Když něco nejde
- Připravte si ukázkové projekty
- Pomozte studentům s nápady

### Alternativní návrh: Malování na plátno (Canvas Drawing App)
**Co se děti naučí:**
- Práce s HTML canvas a jeho API
- Základy práce s událostmi myši (mousedown, mousemove, mouseup)
- Změna vlastností kreslení (barva, tloušťka, guma)
- Kreativní vizuální tvorba v prohlížeči

**Časté chyby a jak je řešit:**
- Kreslení nefunguje – zkontrolujte správné napojení událostí na canvas
- Čára se nepřerušuje – ověřte správné ukončení kreslení při mouseup
- Barva/štětec se nemění – zkontrolujte správné předávání hodnot

**Cíl:**
Vyzkoušet si grafickou tvorbu v prohlížeči, naučit se pracovat s canvasem a událostmi, rozvíjet kreativitu a vizuální myšlení.

**Popis:**
Jednoduchá webová aplikace, kde uživatel kreslí myší na plátno (canvas). Může měnit barvu, tloušťku štětce a mazat. Výsledek je ihned viditelný.

**Průběh hodiny:**
1. Úvod: Lektor představí zadání a ukáže vzorovou aplikaci.
2. Vysvětlení práce s canvasem a událostmi myši.
3. Studenti implementují základní kreslení čar.
4. Přidání volby barvy, tloušťky a gumy.
5. Testování a prezentace obrázků.

**Výstup:**
Funkční aplikace pro kreslení na plátno s možností měnit barvu, tloušťku a mazat.


### Kritéria pro hotovou aplikaci 

- Uživatel může kreslit myší na plátno (canvas)
- Lze měnit barvu štětce
- Lze měnit tloušťku štětce
- Je k dispozici guma (mazání částí obrázku)
- Lze stáhnout obrázek jako PNG
- Funguje tlačítko pro vymazání celého plátna
- Undo/redo (krok zpět/vpřed) pro tahy štětcem

---

## Hodina 8 – První „backend“ (na Vercelu)
### Co se děti naučí
- Základy backendu a API (GET endpoint)
- Propojení frontendu a backendu
- Načítání a zpracování dat z API
### Časté chyby a jak je řešit
- Backend neběží – zkontrolujte logy a nastavení portu.
- Chyba v routování – ověřte správné cesty v API.
**Cíl:** Pochopit API jako zdroj dat  
**Výstup:** Mini blog / seznam dat z API + návrh: Mini blog – aplikace, která načítá a zobrazuje seznam článků z vlastního API (např. „Seznam oblíbených filmů“).

**Kritéria výstupu:**
- Backend s GET endpointem
- Frontend načítá a zobrazuje data z API
- Zobrazení seznamu položek (např. článků, filmů)
- Možnost přidat novou položku (bonus)
- Zobrazení detailu položky (bonus)

### Průběh hodiny
- Úvod do backendu, co je API, jak funguje fetch
- Vytvoření jednoduchého API (GET endpoint)
- Propojení FE ↔ BE, načtení dat do frontendu
- Úpravy, testování, diskuse
- Bonus: přidání POST endpointu, vlastní data
- **Návrh výstupu navíc:** Mini blog – aplikace, která načítá a zobrazuje seznam článků z vlastního API (např. „Seznam oblíbených filmů“).

### Bonus/rozšíření
- Přidat možnost přidávat nové položky (POST)
- Vytvořit jednoduchý komentářový systém

### Když něco nejde
- Připravte si hotový backend a data
- Pokud fetch nefunguje, ukažte JSON v prohlížeči

---

## Hodina 9 – VLASTNÍ EXTERNÍ API (Render)
### Co se děti naučí
- Rozdíl mezi frontendem a backendem
- Vytvoření a deploy vlastního API na Renderu
- Propojení externího API s frontendem
### Časté chyby a jak je řešit
- Backend se nenasazuje – ověřte nastavení a logy na Renderu.
- Chyba v endpointu – zkontrolujte správné HTTP metody a cesty.
**Cíl:** Pochopit rozdíl mezi frontendem a backendem  
**Výstup:** Vlastní API běžící na Renderu + návrh: Vytvoření vlastního API (např. pro poznámky) a jeho deploy na Render.

**Kritéria výstupu:**
- Backend nasazený na Renderu
- GET endpoint vrací data
- Možnost přidat POST endpoint (bonus)
- Propojení s frontendem (bonus)
- Vlastní struktura dat (studenti si sami vymyslí)

### Průběh hodiny
- Vysvětlení rozdílu FE vs BE, co je externí API
- Vytvoření Node.js backendu (GET endpoint, hardcoded data)
- Deploy na Render, testování v prohlížeči
- Propojení s frontendem, diskuse
- Bonus: přidání dalšího endpointu, úpravy dat
- **Návrh výstupu navíc:** Vytvoření vlastního API (např. pro poznámky) a jeho deploy na Render (studenti si sami vymyslí, jaká data budou poskytovat).

### Bonus/rozšíření
- Přidat POST endpoint
- Umožnit studentům měnit data

### Když něco nejde
- Připravte si hotový backend na Renderu
- Pokud Render nefunguje, použijte demo API

---

## Hodina 10 – UI klient + finální prezentace
### Co se děti naučí
- Propojení frontendové aplikace s externím API
- Úprava UI a zobrazení dat
- Prezentace projektu a shrnutí získaných dovedností
### Časté chyby a jak je řešit
- Chyba při načítání dat z API – ověřte URL a formát dat.
- Problém s prezentací – připravte si záložní demo nebo screenshoty.
**Cíl:** Propojit Vercel appku s externím API  
**Výstup:** Frontend, který čte data z Render API + návrh: Webová stránka, která načítá a zobrazuje data z API vytvořeného v předchozí hodině (např. seznam poznámek, leaderboard, galerie).

**Kritéria výstupu:**
- Frontend načítá data z externího API
- Zobrazení dat v přehledné podobě (tabulka, seznam, galerie)
- Možnost aktualizace nebo filtrování dat (bonus)
- Prezentace projektu před ostatními

### Průběh hodiny
- Opakování: jak funguje propojení FE ↔ BE
- Odeslání skóre na externí API, načtení dat
- Úprava UI, zobrazení leaderboardu
- Finální testování, příprava prezentace
- Prezentace projektů, shrnutí kurzu
- **Návrh výstupu navíc:** Webová stránka, která načítá a zobrazuje data z API vytvořeného v předchozí hodině (např. seznam poznámek, leaderboard, galerie).

### Bonus/rozšíření
- Přidat další statistiky, grafy
- Diskuse o možnostech rozšíření


### Když něco nejde
- Připravte si hotový projekt pro demo
- Pokud API nefunguje, použijte mock data

---

## Příprava: Instalace a přihlášení do potřebných aplikací

Před začátkem lekce doporučuji:

- Zkontrolovat, že všichni mají účet na Render.com (pro backend) a Vercel.com (pro frontend)
- Přihlásit se do GitHubu (bude potřeba pro deploy na Render i Vercel)
- Ověřit, že mají nainstalovaný Node.js a npm (pro lokální běh backendu)
- Otevřít si potřebné stránky (Render, Vercel, GitHub) v prohlížeči
- Připravit si repozitář s ukázkovým backendem (pro případ, že by něco nefungovalo)
- Doporučení: připravit si záložní demo nebo screenshoty pro případ technických problémů


