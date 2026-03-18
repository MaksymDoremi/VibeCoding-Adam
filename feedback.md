# 📋 Feedback na AI Vibe Coding Kurz

**Jméno:** Adam Krummacker  
**Datum začátku:** 16. března 2026  
**Kurz:** AI Vibe Coding – 10 × 60 minut  

---

## Hodina 1 – Příprava a Setup Prostředí
**Cíl:** Nainstalovat a nastavit všechny potřebné nástroje (VS Code, GitHub, Vercel)  
**Výstup:** Připravené vývojové prostředí, přihlášení do všech služeb

### ⏰ Časový pocit
**V pohodě** – Čas se dobře využil, bez stresu

### 🎮 Zábava
Spíše se řešila organizace a příprava – zajímavé, ale maximální zábava se mi neužila

### ✅ Co se mi líbilo
- Systematické postupné stahování a nastavování
- Podpora lektora během instalací
- Jasné kroky pro login (GitHub, Vercel, VS Code)
- Po všem, co je nainstalováno, je jasný pocit "hotovo!"

### ❌ Co mi nechybělo / Co bych přidal/a
- Více vysvětlení, co jednotlivé aplikace dělají a proč je potřebují
- Visuální průvodce (screenshots) pro každý krok instalace
- Alternativní řešení, kdyby něco selhalo (fallback plány)
- Vysvětlení, co je GitHub, Vercel a proč se používají

### ⚠️ Problémy které jsem měl/a
- Stahování mělo někdy chybu (selhání internetového připojení)
- Login do Vercelu nebyl intuitivní (několikrát jsem se zabloudil)
- Porozumění, proč přesně ty 3 služby (VS Code, GitHub, Vercel)
- Terminal na začátku strašidlo – nebylo jasné, co se tam děje

### 💡 Co bylo srozumitelné / lehké
- Jednoduchý postup krok za krokem
- Lektoři věděli, jak řešit problémy
- Po nainstalování VS Code jsem viděl hned výsledek
- GitHub login byl snadný

### 📝 Poznámky
- Myslím si, že 13leté děti by měly velké problémy s tímhle setupem bez lektora – je to dost komplexní
- Bylo by super, kdyby existoval předpřipravený VM/image s vším už nainstalovaným
- S lektorem to ale šlo bez větších problémů
- **Důležité:** Čas jsem si nestopoval – časový pocit vychází z mého subjektivního dojmu, lektoři toto prosím berou na lehkou váhu
- Vysvětlit fungování copilota podrobně

---

## Hodina 2 – Tvorba Clicker Aplikace + Nasazení na Vercel
**Cíl:** Vytvořit interaktivní aplikaci s Copilotem, pochopit VibeCoding, nasadit ji na web  
**Výstup:** Fungující Clicker hra v prohlížeči + aplikace na Vercelu

### ⏰ Časový pocit
**Zbyl čas nazbyt** – Hodina se dobře zvládla a ještě zůstal prostor na experimenty

### 🎮 Zábava
Maximální zábava – skvělý pocit z vytváření a vidění výsledků 

### ✅ Co se mi líbilo
- Koncept VibeCoding – Copilot pochopil zadání a otázky bezpečně
- Vytvořený Clicker program fungoval perfektně bez jakýchkoliv chyb (kromě při nasazení)
- Velmi motivující – chtěl/a jsem přidávat vlastní prvky (upgrades, sound, apod.) i za hranicemi zadání
- Okamžitý výsledek v prohlížeči byl skvělý pro motivaci
- Nasazení na Vercel bylo jednoduché a aplikace okamžitě fungovala na internetu

### ❌ Co mi nechybělo / Co bych přidal/a
- Více vysvětlení, jak React komponenty fungují (ačkoliv to nebylo nutné pro tuto úroveň)
- Bonus: GitActions/CI pipeline pro automatické deployování (advanced)

### ⚠️ Problémy které jsem měl/a
- Při prvním nasazení na Vercel se objevily syntax errors (menší chyby v kódu)
- **ŘEŠENÍ:** Copilot je okamžitě identifikoval a opravil
- Po opravě vše fungovalo dokonale na Vercelu bez dalších problémů

### 💡 Co bylo srozumitelné / lehké
- Samotný Clicker program – UI a logika fungovala intuitivně
- Jak se program zobrazuje a chová v prohlížeči
- Copilot interakce – jednoduchý chat pro popis požadavků
- Nasazení na Vercel – kliku několik málo tlačítek a hotovo
- Vidět živou aplikaci na internetu (https://...) bylo skvělé

### 📝 Poznámky
- Nemusel jsem psát téměř žádný vlastní kód – všechno generoval Copilot
- Syntax errors na Vercelu byly drobné a velmi snadno opravitelné
- Copilot měl občas menší chyby v pravopisu, ale nic zásadního
- Byla to nejzábavnější část dosavadního učení – vidět okamžitý výsledek a moct si ho ukazovat
- **Důležité:** Čas jsem si nestopoval – časový pocit vychází z mého subjektivního dojmu, lektoři toto prosím berou na lehkou váhu
- doporučuji pracovat stále ve stejném folderu - jednodušší spolupráce s copilotem

---

## Hodina 3 – CRUD na frontendu (ToDo / Habit app)
**Cíl:** Práce s daty v aplikaci  
**Výstup:** ToDo app s uložením do localStorage

### ⏰ Časový pocit
**Bez měření** – Čas nebyl sledován

### 🎮 Zábava
Velmi vysoká – postupné rozšiřování funkčnosti bylo motivující, prostor pro kreativitu

### ✅ Co se mi líbilo
- localStorage lehce pochopeno
- Copilot dobře vysvětloval klíčové kusy kódu (useState, JSON.parse/stringify)
- Fázový přístup: nejdříve logika bez storage → pak storage → filtrování → achievement (podle copilota)
- Achievement systém s API kočkou měl vysokou engage value
- Prostor pro vylepšování umožnil kreativitu v rámci zadaného úkolu

### ❌ Co mi nechybělo / Co bych přidal/a
- Zahrnout DevTools inspection localStorage do lekce

### ⚠️ Problémy které jsem měl/a
- localStorage nejprve nefungoval – Copilot použil useEffect přístup s timing bugem
- **ŘEŠENÍ:** Lazy initialization v useState fungovala správně
- Duplicitní deklarace `updateTodos` vedla na syntaktickou chybu - cpoilot ale snadně vyřešil
- Copilot má zvýšené chyby s češtinou v komentářích, ale kód většinou fungoval

### 💡 Co bylo srozumitelné / lehké
- CRUD operace – intuitivní implementace
- Array methods (filter, map) – logika byla jasná
- API integrace – transfer z Hodiny 2 bez problému
- State management a re-render cyklus – viditelný výsledek motivuje

### 📝 Poznámky
- Fáze 1 (bez storage) je kritická – ukázala proč storage vůbec potřebujeme
- Iterativní opravy: jen malé chyby, nikdy zásadní
- Stihlo se pokrýt základnu i Phase 3 improvement – časový management se vydařil
- VibeCoding princip se potvrdil: Copilot generuje kód, student se fokusuje na logiku
- **Důležité:** Doporučení pracovat rovnou ve Vercelu (je ale složitější, hlavně příprava)

---

## Hodina 4 – Hra: Quiz
**Cíl:** Logika, skóre, příprava na sdílená data  
**Výstup:** Kvízová hra s výsledkem

### ⏰ Časový pocit
**Bez měření** – Čas nebyl sledován

### 🎮 Zábava
Velmi vysoká – kvíz je interaktivní a zábavný způsob, jak se něco naučit

### ✅ Co se mi líbilo
- Interaktivita kvízu – odpovídání na otázky je přirozeně zábavné a motivující
- Zábavný způsob učení – kvíz jako formát je skvělý pro engagement dětí
- Časovač přidal napětí a herní pocit
- Historie výsledků v localStorage – vidím své předchozí pokusy i po refreshi stránky
- Přepínání obrazovek (kvíz → výsledky) bylo logické a srozumitelné

### ❌ Co mi nechybělo / Co bych přidal/a
- Copilot začal vysvětlovat kód (useState, useEffect, JSON.parse) – pro čistý VibeCoding přístup to bylo až moc konkrétní. Záleží na tom, jestli se lektoři chtějí zaměřit na kód nebo čistě na VibeCoding
- Copilot občas navrhuje zbytečné změny sám od sebe – děti by si měly dát pozor a pochopit, že **oni (popř. lektor) zadávají práci**, ne Copilot
- Zvážit, jestli vysvětlování kódu je pro cílovou skupinu (13+) vhodné nebo zda radši nechat čistý VibeCoding

### ⚠️ Problémy které jsem měl/a
- Duplikátní clicker sekce ve výsledcích – Copilot ji tam vložil dvakrát, chyba se musela ručně opravit
- Copilot při přidávání časovače zapomněl zastavit timer po odpovězení – muselo se doplnit

### 💡 Co bylo srozumitelné / lehké
- Struktura kvízu (otázky jako pole objektů) – intuitivní
- Logika skóre – jednoduché počítání správných odpovědí
- localStorage ukládání – navázání na znalost z Hodiny 3
- Celý flow od otázky po výsledek byl přehledný

### 📝 Poznámky
- Od této hodiny jsem přešel na **Claude Opus 4.6** (místo výchozího modelu) – jeví se profesionálnější a přesnější, ale zároveň méně „hravý" ve srovnání s předchozím modelem. Pro děti by mohl být výchozí model zábavnější
- **Důležité:** Čas jsem si nestopoval – časový pocit vychází z mého subjektivního dojmu, lektoři toto prosím berou na lehkou váhu
- Princip VibeCodingu se potvrzuje – stačí popsat co chci a Copilot to implementuje
- Doporučení pro lektory: jasně definovat, kde je hranice mezi „vysvětlováním kódu" a „vibe codingem"

---

## Hodina 5 – Leaderboard (sdílená data přes API na Vercelu)
**Cíl:** Pochopit, že data mohou být sdílená mezi lidmi  
**Výstup:** Leaderboard aplikace napojená na API


### 🎮 Zábava
Vysoká – leaderboard přidává soutěživost, vylepšování kvízu na konci hodiny bylo velmi zábavné

### ✅ Co se mi líbilo
- Kontinuita – Copilot pracoval s kvízem z minulé hodiny
- Vylepšování kvízu na konci hodiny (nové otázky, clicker achievementy, úvodní obrazovka) bylo zábavné a kreativní
- Koncept API jako „sdílené nástěnky" je pochopitelný i bez technických znalostí

### ❌ Co mi nechybělo / Co bych přidal/a
- Copilot udělal většinu práce najednou – může vzniknout dojem, že „to samo běží" a student nerozumí co se děje
- Copilot se při vytváření často ptal na potvrzení příkazu (allow) – pro děti to může být matoucí, pokud nevědí co potvrzují
- Návrh: **společné ukázání prací studentů online (sdílení obrazovek)** – studenti by mohli ukázat své kvízy a leaderboard výsledky, což by zvýšilo motivaci a soutěživost

### ⚠️ Problémy které jsem měl/a
- Copilot pracuje přes vite build – při vytváření leaderboardu mu to zprvu docela trvalo (CSS nesting chyby, duplicitní keyframes)
- Leaderboard nefungoval lokálně – API endpoint je serverless (Vercel), muselo se přidat mock API do Vite configu
- CSS chyby (duplicitní @keyframes, nezavřené bloky) – Copilot je vytvořil a pak musel sám opravovat

### 💡 Co bylo srozumitelné / lehké
- Rozdíl localStorage vs. API – „tvůj sešit vs. nástěnka ve třídě" – pochopitelná analogie
- Přidávání nových funkcí (achievementy, úvodní obrazovka) – VibeCoding princip funguje dobře

### 📝 Poznámky
- Hodina se dá stihnout rychleji než za 60 minut – zbylý čas je ideální pro individuální vylepšování nebo pro sdílení práce
- **Doporučení pro lektory:** Zbylý čas využít na sdílení prací mezi studenty – motivace přes soutěživost
---

## Hodina 6 – První „backend" (na Vercelu)
**Cíl:** Pochopit API jako zdroj dat  
**Výstup:** Sbírka vtipů – jokes-app s vlastním API


### ✅ Co se mi líbilo
- Copilot neměl žádné problémy – vše fungovalo na první pokus
- Opět prostor pro kreativitu (vtipová sbírka místo blogu)
- Achievementy za liky a komentáře ke vtipům – bonusy nad rámec plánu
- Jasná metafora restaurace/kuchyně pro vysvětlení FE↔BE

### ❌ Co bych přidal/a
- Bude na místě vysvětlení od lektora – propojení frontend↔backend je klíčový koncept
- Společné sdílení prací mezi studenty – ukázat si navzájem co kdo vytvořil

### ⚠️ Problémy které jsem měl/a
- Žádné technické problémy – Copilot vše zvládl bez chyb

### 💡 Co bylo srozumitelné / lehké
- fetch() volání – intuitivní, "pošli požadavek, dostaneš data"
- Mock API pro lokální vývoj – pochopitelné proč je potřeba

### 📝 Poznámky
- Celkově bezproblémová hodina. Copilot generoval kód spolehlivě
- Prostor pro kreativitu byl dostatečný
- Doporučuji lektorům doplnit vysvětlení konceptu API + společné sdílení výsledků mezi studenty

---

## Hodina 7 – Remix & vlastní mini projekt
**Cíl:** Kreativita + příprava na hru  
**Výstup:** Rozšířená aplikace nebo prototyp hry

### ⏰ Časový pocit
**Zbyl čas nazbyt** – Volná kreativní hodina, prostor na experimentování bez tlaku

### 🎮 Zábava
Maximální zábava – úplná svoboda v tom, co chci do hry přidat, a vidět výsledek okamžitě

### ✅ Co se mi líbilo
- Kompletní kreativní svoboda – mohl jsem si vymyslet vlastní systémy (bossfighty, kvízy, achievementy)
- Copilot zvládl i komplexní požadavky typu "přidej všechno" a generoval fungující kód
- Iterativní vylepšování – každý nový systém se dal přidat bez rozbití toho předchozího
- Okamžitý vizuální výsledek – dark fantasy theme vypadal skvěle
- Super ukázková hodina – výsledná hra se dá ukazovat jako příklad toho, co VibeCoding dokáže
- Balancování hry (ceny, passive income, combo cap) bylo zajímavé a poučné

### ❌ Co mi nechybělo / Co bych přidal/a
- Tento typ hodiny (volný remix) možná ani nebude potřeba jako samostatná lekce – studenti si mohou remixovat kdykoliv sami
- Copilot (tento model) občas psal postup a komentáře v angličtině místo v češtině – musel jsem opravovat
- Mohlo by se ukázat, jak si takový remix naplánovat předem (prioritizace features)

### ⚠️ Problémy které jsem měl/a
- Žádné zásadní problémy – vše fungovalo na první nebo druhý pokus
- Jediný UX problém: při rychlém klikání se kvíz objevil a omylem jsem klikl na špatnou odpověď → vyřešeno přidáním 1s "Připrav se" delay
- Model občas přepínal do angličtiny v komentářích kódu

### 💡 Co bylo srozumitelné / lehké
- Všechno bylo lehké a zábavné – žádný systém nebyl problém implementovat
- Přidávání nových features do existující aplikace je intuitivní s Copilotem
- Balancování hry (úprava čísel, cen) je jednoduché a okamžitě viditelné
- Celkový workflow: popsat co chci → Copilot vygeneruje → otestovat → tweaknout

### 📝 Poznámky
- Výsledná hra má 12+ systémů: obchod, combo, prestige, daily reward, evoluce, bossfighty, questy, enchanty, artefakty, minihry, skill tree, kvízy, achievementy
- Tato hodina je ideální jako showcase – ukázat studentům/rodičům, co se dá vytvořit
- Doporučení: možná spojit s jinou hodinou jako bonus aktivitu, ne jako samostatnou lekci
- **Důležité:** Čas jsem si nestopoval – časový pocit vychází z mého subjektivního dojmu

---

## Hodina 8 – Hra: Snake (frontend)
**Cíl:** Ukázat, že i hra je jen logika + stav  
**Výstup:** Hratelná Snake hra v prohlížeči

### ✅ Co se mi líbilo
- Velmi jednoduché – celá hra fungovala hned na první pokus bez chyb
- Vysvětlení, které bylo, bylo smysluplné a dobré (had = pole souřadnic, game loop přes setInterval)
- Koncept gridu (had jako pole souřadnic) byl srozumitelný a intuitivní
- Projekt se dal rozjet rychle – scaffold + kompletní hra najednou

### ❌ Co mi nechybělo / Co bych přidal/a
- Málo vysvětlování – mohlo by být víc (ale to co bylo stačilo)
- Hodina by se určitě mohla spojit s jinou lekcí (např. hodina 7 – remix), protože samotná Snake byla rychlá
- Případně rozšířit o power-upy nebo obtížnosti, aby se zaplnil čas

### ⚠️ Problémy které jsem měl/a
- Žádné zásadní problémy – vše fungovalo bez komplikací

### 💡 Co bylo srozumitelné / lehké
- Grid koncept – had je jen pole souřadnic [řádek, sloupec]
- Celkově velmi lehká hodina
- Úprava parametrů (rychlost) byla jednoduchá a okamžitě viditelná

### 📝 Poznámky
- Bavilo mě to, ale méně než clicker/remix – Snake je jednodušší a méně kreativní
- Doporučení: spojit s hodinou 7 jako jednu delší lekci, nebo přidat rozšíření (fázový přístup, obtížnosti)

---

## Hodina 9 – VLASTNÍ EXTERNÍ API (Render)
**Cíl:** Pochopit rozdíl mezi frontendem a backendem  
**Výstup:** Vlastní API běžící na Renderu

### ✅ Co se mi líbilo
- Copilot napsal celý Express server na první pokus bez chyb – API fungovalo lokálně i na Renderu
- Koncept API (GET/POST/DELETE) dával smysl – analogie s restaurací (frontend = stůl, backend = kuchyně) byla srozumitelná
- Testování přes curl bylo přímočaré – viditelný výsledek v JSON formátu
- Celý backend se vešel do jednoho souboru (~70 řádků) – žádná zbytečná složitost

### ❌ Co mi nechybělo / Co bych přidal/a
- V celku spíše nezajímavá hodina – vše se děje v backendu, jen malá ukázka na konci funkčnosti (JSON)
- Přidat víc vizuálních ukázek – ne jen JSON v terminálu, ale třeba jednoduchou webovou stránku, která data zobrazí
- Doporučení: mohlo by se tohle spojit s hodinou 10 do jedné větší lekce

### ⚠️ Problémy které jsem měl/a
- Nemohl jsem připojit Maksymův repozitář k Renderu – musel jsem vytvořit vlastní repo na GitHubu
- Delší čekání na build na Renderu (než se API nasadí a spustí)
- První pokus o deploy selhal kvůli špatnému repozitáři (nextjs-boilerplate místo items-api)

### 💡 Co bylo srozumitelné / lehké
- Koncept API (GET/POST/DELETE) dával smysl
- Psaní kódu v Express bylo jednoduché – Copilot to zvládl sám
- Testování endpointů přes curl – jasný vstup → výstup

### 📝 Poznámky
- Střední složitost – pochopení konceptu backend vs frontend vyžaduje trochu přemýšlení
- Hodina by mohla být zajímavější s vizuálnějším výstupem – samotný JSON je pro studenty méně motivující než viditelná aplikace
- Deploy na Render fungoval, ale proces je méně intuitivní než Vercel

---

## Hodina 10 – UI klient + finální prezentace
**Cíl:** Propojit Vercel appku s externím API  
**Výstup:** Frontend, který čte data z Render API + deploy na Vercel

### Co se mi líbilo
- Všechno fungovalo hned – frontend se napojil na Render API bez problémů
- Deploy na Vercel klapl perfektně – jednoduchý proces, aplikace hned živá na internetu
- Finální prezentace v 10. hodině je super nápad – student vidí kompletní full-stack výsledek (frontend + backend + deploy)
- Prostor pro feedback studentů na konci kurzu je důležitý a dobrý nápad
- Vidět vlastní aplikaci na vlastní doméně (items-client.vercel.app) je motivující závěr kurzu
- Vysvětlení rozdílů localStorage vs API dávalo smysl – proč sdílená data potřebují backend

### Co mi nechybělo / Co bych přidal/a
- Spíše proces počítače (logicky v backendu) než že by se student nějak hodně aktivně zapojoval – Copilot vše generoval
- Mohlo by být víc prostoru pro vlastní úpravy frontendu (barvy, layout, vlastní features)
- Případně interaktivnější úkol – např. student sám přidá nový endpoint nebo upraví UI

### Problémy které jsem měl/a
- Žádné zásadní problémy – vše fungovalo hladce
- Vercel deployment proběhl bez komplikací (na rozdíl od Renderu v hodině 9)

### Co bylo srozumitelné / lehké
- Napojení frontendu na API – fetch + useEffect + async/await byly vysvětleny srozumitelně
- Deploy na Vercel – jednodušší než Render, intuitivní proces
- Celý full-stack koncept (frontend -> API -> backend) dával smysl jako celek

### Poznámky
- Hodina 9 + 10 tvoří logický celek – backend (Render) + frontend (Vercel) = kompletní aplikace
- Jako závěrečná hodina kurzu funguje velmi dobře – student odchází s hotovým projektem na internetu
- Doporučení: přidat víc aktivního zapojení studenta – ne jen sledovat, jak Copilot generuje kód

---

## Celkový Feedback na Kurz

### Nejlepší část kurzu
- Hodina 2 (Clicker) a Hodina 7 (Remix) – maximální zábava, kreativita, okamžité výsledky
- Koncept VibeCoding – Copilot generuje kód, student se soustředí na logiku a design
- Deploy na internet (Vercel/Render) – vidět vlastní aplikaci živě na webu je silně motivující
- Hodiny 9+10 jako full-stack celek – pochopení frontend vs backend v praxi

### Nejhorší část kurzu
- Hodina 9 (API backend) – málo vizuální, jen JSON v terminálu, student se příliš nezapojoval
- Hodina 1 (Setup) – nutná, ale nudná instalace nástrojů
- Některé hodiny (8, 7) by se mohly spojit – Snake byla příliš rychlá na samostatnou lekci

### Čemu bych chtěl/a rozumět víc
- Jak React komponenty fungují pod kapotou (props, state, lifecycle)
- Jak funguje síťová komunikace (HTTP, requesty, CORS)
- Jak se dělá autentizace (login/registrace) v reálných aplikacích

### Co bych přidal/a do kurzu
- Víc vizuálních příkladů a diagramů (jak data tečou mezi frontend a backend)
- Víc aktivního zapojení studenta – ne jen sledovat Copilot, ale i sám upravovat kód
- Výzvy/úkoly navíc pro rychlejší studenty (bonus tasky)

### Co bych odstranil
- Některé hodiny by se daly sloučit (7+8, nebo 4+5) pro efektivnější využití času
- Méně času na čistý backend bez vizuálního výstupu

### Jak jsi byl/a s kurzem spokojený/á?
- **Spokojený/á**

### Doporučil/a bys ten kurz kamarádům?
- **Rozhodně ano!**

### Finální komentář / Poznámka
Kurz je skvělý koncept – VibeCoding ukazuje, že i bez hlubokých znalostí programování se dají vytvořit fungující aplikace. Nejlepší hodiny byly ty kreativní (clicker, remix), kde jsem viděl okamžitý výsledek. Backend hodiny (9) byly méně záživné, ale hodina 10 to pěkně uzavřela. Celkově dobrý kurz s prostorem pro zlepšení v zapojení studenta.

---

**Datum odevzdání feedbacku:** 18. března 2026  
**Podpis:** Adam Krummacker
