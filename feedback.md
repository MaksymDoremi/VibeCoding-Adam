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

### ⏱️ Čas
- **Plánovaný čas:** 60 minut
- **Reálný čas:** ___ minut

### 📊 Složitost
⭐ ⭐⭐ ⭐⭐⭐ ⭐⭐⭐⭐ ⭐⭐⭐⭐⭐

### ✅ Co se mi líbilo
```
- 
- 
```

### ❌ Co mi nechybělo / Co bych přidal/a
```
- 
- 
```

### ⚠️ Problémy které jsem měl/a
```
- 
- 
```

### 💡 Co bylo srozumitelné / lehké
```
- 
- 
```

### 📝 Poznámky
```
```

---

## Hodina 5 – Leaderboard (sdílená data přes API na Vercelu)
**Cíl:** Pochopit, že data mohou být sdílená mezi lidmi  
**Výstup:** Leaderboard aplikace napojená na API

### ⏱️ Čas
- **Plánovaný čas:** 60 minut
- **Reálný čas:** ___ minut

### 📊 Složitost
⭐ ⭐⭐ ⭐⭐⭐ ⭐⭐⭐⭐ ⭐⭐⭐⭐⭐

### ✅ Co se mi líbilo
```
- 
- 
```

### ❌ Co mi nechybělo / Co bych přidal/a
```
- 
- 
```

### ⚠️ Problémy které jsem měl/a
```
- 
- 
```

### 💡 Co bylo srozumitelné / lehké
```
- 
- 
```

### 📝 Poznámky
```
```

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

### ⏱️ Čas
- **Plánovaný čas:** 60 minut
- **Reálný čas:** ___ minut

### 📊 Složitost
⭐ ⭐⭐ ⭐⭐⭐ ⭐⭐⭐⭐ ⭐⭐⭐⭐⭐

### ✅ Co se mi líbilo
```
- 
- 
```

### ❌ Co mi nechybělo / Co bych přidal/a
```
- 
- 
```

### ⚠️ Problémy které jsem měl/a
```
- 
- 
```

### 💡 Co bylo srozumitelné / lehké
```
- 
- 
```

### 📝 Poznámky
```
```

---

## Hodina 8 – Hra: Snake (frontend)
**Cíl:** Ukázat, že i hra je jen logika + stav  
**Výstup:** Hratelná Snake hra v prohlížeči

### ⏱️ Čas
- **Plánovaný čas:** 60 minut
- **Reálný čas:** ___ minut

### 📊 Složitost
⭐ ⭐⭐ ⭐⭐⭐ ⭐⭐⭐⭐ ⭐⭐⭐⭐⭐

### ✅ Co se mi líbilo
```
- 
- 
```

### ❌ Co mi nechybělo / Co bych přidal/a
```
- 
- 
```

### ⚠️ Problémy které jsem měl/a
```
- 
- 
```

### 💡 Co bylo srozumitelné / lehké
```
- 
- 
```

### 📝 Poznámky
```
```

---

## Hodina 9 – VLASTNÍ EXTERNÍ API (Render)
**Cíl:** Pochopit rozdíl mezi frontendem a backendem  
**Výstup:** Vlastní API běžící na Renderu

### ⏱️ Čas
- **Plánovaný čas:** 60 minut
- **Reálný čas:** ___ minut

### 📊 Složitost
⭐ ⭐⭐ ⭐⭐⭐ ⭐⭐⭐⭐ ⭐⭐⭐⭐⭐

### ✅ Co se mi líbilo
```
- 
- 
```

### ❌ Co mi nechybělo / Co bych přidal/a
```
- 
- 
```

### ⚠️ Problémy které jsem měl/a
```
- 
- 
```

### 💡 Co bylo srozumitelné / lehké
```
- 
- 
```

### 📝 Poznámky
```
```

---

## Hodina 10 – UI klient + finální prezentace
**Cíl:** Propojit Vercel appku s externím API  
**Výstup:** Frontend, který čte data z Render API

### ⏱️ Čas
- **Plánovaný čas:** 60 minut
- **Reálný čas:** ___ minut

### 📊 Složitost
⭐ ⭐⭐ ⭐⭐⭐ ⭐⭐⭐⭐ ⭐⭐⭐⭐⭐

### ✅ Co se mi líbilo
```
- 
- 
```

### ❌ Co mi nechybělo / Co bych přidal/a
```
- 
- 
```

### ⚠️ Problémy které jsem měl/a
```
- 
- 
```

### 💡 Co bylo srozumitelné / lehké
```
- 
- 
```

### 📝 Poznámky
```
```

---

## 🎯 Celkový Feedback na Kurz

### Nejlepší část kurzu
```
```

### Nejhorší část kurzu
```
```

### Čemu bych chtěl/a rozumět víc
```
- 
- 
- 
```

### Co bych přidal/a do kurzu
```
- 
- 
- 
```

### Co bych odstranit
```
- 
- 
- 
```

### Jak jsi byl/a s kurzem spokojený/á?
- Velmi spokojený/á 😍
- Spokojený/á 😊
- Neutrální 😐
- Nespokojený/á 😕
- Velmi nespokojený/á 😡

_(Vyber jednu)_

### Doporučil/a bys ten kurz kamarádům?
- 🟢 Rozhodně ano!
- 🟡 Spíše ano
- ⚪ Nevím
- 🟠 Spíše ne
- 🔴 Rozhodně ne

### Finální komentář / Poznámka
```
```

---

**Datum odevzdání feedbacku:** ___________  
**Podpis:** ___________
