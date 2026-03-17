import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

// 🐉 Magická stvoření – tiery
const creatureShop = [
  { tier: 1,  price: 50,         emoji: '🐣', name: 'Kuřátko',     clickBonus: 1,  passive: 0.2,  desc: '+1 klik, +0.2/s' },
  { tier: 2,  price: 200,        emoji: '🦊', name: 'Lištička',    clickBonus: 2,  passive: 0.5,  desc: '+2 kliky, +0.5/s' },
  { tier: 3,  price: 600,        emoji: '🐺', name: 'Vlk',         clickBonus: 3,  passive: 0.8,  desc: '+3 kliky, +0.8/s' },
  { tier: 4,  price: 1800,       emoji: '🦉', name: 'Sova',        clickBonus: 4,  passive: 1,    desc: '+4 kliky, +1/s' },
  { tier: 5,  price: 5000,       emoji: '🐉', name: 'Dráček',      clickBonus: 6,  passive: 1.5,  desc: '+6 kliků, +1.5/s' },
  { tier: 6,  price: 15000,      emoji: '🦄', name: 'Jednorožec',  clickBonus: 8,  passive: 2,    desc: '+8 kliků, +2/s' },
  { tier: 7,  price: 45000,      emoji: '🐙', name: 'Kraken',      clickBonus: 11, passive: 3,    desc: '+11 kliků, +3/s' },
  { tier: 8,  price: 130000,     emoji: '🐲', name: 'Drak',        clickBonus: 15, passive: 4,    desc: '+15 kliků, +4/s' },
  { tier: 9,  price: 400000,     emoji: '🦅', name: 'Gryf',        clickBonus: 20, passive: 5,    desc: '+20 kliků, +5/s' },
  { tier: 10, price: 1200000,    emoji: '🔮', name: 'Fénix',       clickBonus: 28, passive: 8,    desc: '+28 kliků, +8/s' },
  { tier: 11, price: 3500000,    emoji: '🌑', name: 'Stínový vlk', clickBonus: 40, passive: 12,   desc: '+40 kliků, +12/s' },
  { tier: 12, price: 10000000,   emoji: '👑', name: 'Celestiál',    clickBonus: 80,  passive: 20,   desc: '+80 kliků, +20/s' },
  { tier: 13, price: 30000000,   emoji: '🦎', name: 'Bazilišek',    clickBonus: 110, passive: 30,   desc: '+110 kliků, +30/s' },
  { tier: 14, price: 100000000,  emoji: '🐍', name: 'Hydra',         clickBonus: 150, passive: 40,   desc: '+150 kliků, +40/s' },
  { tier: 15, price: 350000000,  emoji: '🦇', name: 'Vampýr',        clickBonus: 200, passive: 55,   desc: '+200 kliků, +55/s' },
  { tier: 16, price: 1200000000, emoji: '🐋', name: 'Leviatan',      clickBonus: 280, passive: 75,   desc: '+280 kliků, +75/s' },
  { tier: 17, price: 5000000000, emoji: '🌋', name: 'Titán',         clickBonus: 400, passive: 100,  desc: '+400 kliků, +100/s' },
  { tier: 18, price: 20000000000,emoji: '⚡', name: 'Thunderbird',   clickBonus: 550, passive: 140,  desc: '+550 kliků, +140/s' },
  { tier: 19, price: 100000000000,emoji:'🌀', name: 'Behemoth',      clickBonus: 800, passive: 200,  desc: '+800 kliků, +200/s' },
  { tier: 20, price: 500000000000,emoji:'💫', name: 'Starožitný bůh',clickBonus: 1200,passive: 300,  desc: '+1200 kliků, +300/s' },
]

// 🌍 Pozadí podle počtu stvoření
const backgrounds = [
  { min: 0,  name: 'Louka',    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { min: 3,  name: 'Les',      gradient: 'linear-gradient(135deg, #0f5132 0%, #2d6a4f 50%, #40916c 100%)' },
  { min: 6,  name: 'Hory',     gradient: 'linear-gradient(135deg, #4a4e69 0%, #9a8c98 50%, #c9ada7 100%)' },
  { min: 10, name: 'Vulkán',   gradient: 'linear-gradient(135deg, #6a040f 0%, #d00000 50%, #e85d04 100%)' },
  { min: 15, name: 'Oceán',    gradient: 'linear-gradient(135deg, #023e8a 0%, #0077b6 50%, #00b4d8 100%)' },
  { min: 20, name: 'Vesmír',   gradient: 'linear-gradient(135deg, #0d0221 0%, #1a0533 40%, #380a5e 100%)' },
]

function getBackground(creatureCount) {
  return [...backgrounds].reverse().find(b => creatureCount >= b.min) || backgrounds[0]
}

// � Quest definice
const questDefinitions = [
  { id: 'click100',    name: 'Učedník',       desc: 'Klikni 100×',            check: s => s.totalClicks >= 100,    reward: 100,  emoji: '📜' },
  { id: 'click1000',   name: 'Mág',           desc: 'Klikni 1 000×',          check: s => s.totalClicks >= 1000,   reward: 500,  emoji: '🔮' },
  { id: 'click10000',  name: 'Arcimág',       desc: 'Klikni 10 000×',         check: s => s.totalClicks >= 10000,  reward: 2000, emoji: '⚡' },
  { id: 'creatures3',  name: 'Chovatel',      desc: 'Vlastni 3 stvoření',     check: s => s.creatures >= 3,        reward: 150,  emoji: '🐾' },
  { id: 'creatures10', name: 'Zvířecí král',  desc: 'Vlastni 10 stvoření',    check: s => s.creatures >= 10,       reward: 800,  emoji: '👑' },
  { id: 'creatures20', name: 'Lord zvířat',   desc: 'Vlastni 20 stvoření',    check: s => s.creatures >= 20,       reward: 3000, emoji: '🏰' },
  { id: 'combo20',     name: 'Bleskový mág',  desc: 'Dosáhni 20 combo',       check: s => s.maxCombo >= 20,        reward: 300,  emoji: '⚡' },
  { id: 'combo50',     name: 'Bouřný mistr',  desc: 'Dosáhni 50 combo',       check: s => s.maxCombo >= 50,        reward: 1500, emoji: '🌪️' },
  { id: 'golden1',     name: 'Alchymista',    desc: 'Vytvoř zlaté stvoření',  check: s => s.goldenCount >= 1,      reward: 500,  emoji: '✨' },
  { id: 'golden5',     name: 'Zlatý mistr',   desc: '5 zlatých stvoření',     check: s => s.goldenCount >= 5,      reward: 5000, emoji: '🌟' },
  { id: 'prestige1',   name: 'Znovu narozen', desc: 'Proveď Prestige',        check: s => s.prestige >= 1,         reward: 0,    emoji: '🔄' },
  { id: 'boss1',       name: 'Zabiják',       desc: 'Poraz prvního bosse',    check: s => s.bossesKilled >= 1,     reward: 500,  emoji: '💀' },
  { id: 'boss5',       name: 'Hrdina',        desc: 'Poraz 5 bossů',          check: s => s.bossesKilled >= 5,     reward: 3000, emoji: '🗡️' },
  { id: 'enchant5',    name: 'Kouzelník',     desc: 'Proveď 5 enchantů',      check: s => s.totalEnchants >= 5,    reward: 800,  emoji: '💎' },
  { id: 'artifact3',   name: 'Sběratel',      desc: 'Najdi 3 artefakty',      check: s => s.artifactCount >= 3,    reward: 1000, emoji: '🏺' },
  { id: 'minigame3',   name: 'Hvězdný lovec', desc: 'Vyhraj 3 minihry',       check: s => s.minigamesWon >= 3,     reward: 600,  emoji: '⭐' },
  { id: 'quiz5',       name: 'Moudrý učenec', desc: 'Odpověz správně na 5 kvízů', check: s => s.quizzesCorrect >= 5, reward: 800,  emoji: '🧠' },
  { id: 'quiz15',      name: 'Génius',        desc: 'Odpověz správně na 15 kvízů', check: s => s.quizzesCorrect >= 15, reward: 2500, emoji: '🎓' },
]

// 🧠 Kvízové otázky
const quizPool = [
  { q: 'Kolik nohou má pavouk?', answers: ['6', '8', '10', '4'], correct: 1, emoji: '🕷️' },
  { q: 'Jaký element má symbol Fe?', answers: ['Fosfor', 'Fluor', 'Železo', 'Francium'], correct: 2, emoji: '⚗️' },
  { q: 'Kolik planet je ve sluneční soustavě?', answers: ['7', '8', '9', '10'], correct: 1, emoji: '🪐' },
  { q: 'Který oceán je největší?', answers: ['Atlantský', 'Indický', 'Tichý', 'Severní ledový'], correct: 2, emoji: '🌊' },
  { q: 'Kolik kostí má dospělý člověk?', answers: ['186', '206', '256', '176'], correct: 1, emoji: '🦴' },
  { q: 'Jaká je chemická značka zlata?', answers: ['Ag', 'Au', 'Zn', 'Cu'], correct: 1, emoji: '🥇' },
  { q: 'Který rok začala 2. světová válka?', answers: ['1935', '1938', '1939', '1941'], correct: 2, emoji: '📜' },
  { q: 'Co je hlavní město Japonska?', answers: ['Ósaka', 'Kjóto', 'Tokio', 'Nagoja'], correct: 2, emoji: '🗾' },
  { q: 'Kolik zubů má dospělý člověk?', answers: ['28', '30', '32', '34'], correct: 2, emoji: '🦷' },
  { q: 'Jaká barva vznikne smícháním modré a žluté?', answers: ['Oranžová', 'Zelená', 'Fialová', 'Hnědá'], correct: 1, emoji: '🎨' },
  { q: 'Který plyn tvoří většinu atmosféry?', answers: ['Kyslík', 'Dusík', 'CO₂', 'Argon'], correct: 1, emoji: '🌍' },
  { q: 'Kolik strun má standardní kytara?', answers: ['4', '5', '6', '7'], correct: 2, emoji: '🎸' },
  { q: 'Který zvířecí druh je největší na Zemi?', answers: ['Africký slon', 'Plejtvák obrovský', 'Žralok obrovský', 'Kolosální krakatice'], correct: 1, emoji: '🐋' },
  { q: 'Kolik minut má hodina?', answers: ['30', '45', '60', '90'], correct: 2, emoji: '⏰' },
  { q: 'Jaká je nejvyšší hora světa?', answers: ['K2', 'Mount Everest', 'Kilimandžáro', 'Mont Blanc'], correct: 1, emoji: '🏔️' },
  { q: 'Kolik chromosomů má člověk?', answers: ['42', '44', '46', '48'], correct: 2, emoji: '🧬' },
  { q: 'Který planeta je Zemi nejblíže?', answers: ['Mars', 'Venuše', 'Merkur', 'Jupiter'], correct: 1, emoji: '🔭' },
  { q: 'Co znamená HTML?', answers: ['High Tech Modern Language', 'HyperText Markup Language', 'Home Tool Markup Language', 'Hyper Transfer Markup Language'], correct: 1, emoji: '💻' },
  { q: 'Kolik srdcí má chobotnice?', answers: ['1', '2', '3', '4'], correct: 2, emoji: '🐙' },
  { q: 'Jaký je nejtvrdší minerál?', answers: ['Rubín', 'Safír', 'Diamant', 'Topaz'], correct: 2, emoji: '💎' },
]

// 🐲 Boss definice
const bossPool = [
  { name: 'Goblin král',     emoji: '👺', hp: 100,   reward: 200,  timeLimit: 15 },
  { name: 'Kostlivý rytíř',  emoji: '💀', hp: 300,   reward: 500,  timeLimit: 20 },
  { name: 'Temný mág',       emoji: '🧙‍♂️', hp: 600,   reward: 1000, timeLimit: 25 },
  { name: 'Ohnivý démon',    emoji: '👹', hp: 1200,  reward: 2000, timeLimit: 30 },
  { name: 'Starověký drak',  emoji: '🐲', hp: 2500,  reward: 5000, timeLimit: 35 },
  { name: 'Voidwalker',      emoji: '🌀', hp: 5000,  reward: 10000,timeLimit: 40 },
  { name: 'Starožitný Titan',emoji: '💫', hp: 10000, reward: 25000,timeLimit: 50 },
]

// 🏺 Artefakty
const artifactPool = [
  { id: 'ring',    name: 'Magický prsten',   emoji: '💍', effect: 'clickMult',   value: 1.2,  desc: '+20% klik' },
  { id: 'amulet',  name: 'Amulet moci',      emoji: '📿', effect: 'passiveMult', value: 1.25, desc: '+25% passive' },
  { id: 'staff',   name: 'Hůlka blesku',     emoji: '🪄', effect: 'clickMult',   value: 1.15, desc: '+15% klik' },
  { id: 'crown',   name: 'Koruna krále',      emoji: '👑', effect: 'passiveMult', value: 1.3,  desc: '+30% passive' },
  { id: 'orb',     name: 'Mystický orb',      emoji: '🔮', effect: 'clickMult',   value: 1.25, desc: '+25% klik' },
  { id: 'book',    name: 'Kniha kouzel',       emoji: '📖', effect: 'passiveMult', value: 1.2,  desc: '+20% passive' },
  { id: 'sword',   name: 'Meč osudu',         emoji: '⚔️', effect: 'bossDmg',     value: 1.5,  desc: '+50% boss dmg' },
  { id: 'shield',  name: 'Štít stínů',        emoji: '🛡️', effect: 'bossTime',    value: 1.3,  desc: '+30% boss čas' },
  { id: 'potion',  name: 'Elixír věčnosti',   emoji: '🧪', effect: 'comboMult',   value: 1.2,  desc: '+20% combo bonus' },
  { id: 'gem',     name: 'Drahokam chaosu',   emoji: '💎', effect: 'allMult',     value: 1.1,  desc: '+10% na vše' },
]

//  Achievementy (těžké)
const achievementDefs = [
  { id: 'gold_fox',      name: 'Zlatá liščí farma',    desc: 'Měj 1 000 zlatých Lištiček',       check: s => s.creaturesByType('Lištička', true) >= 1000, emoji: '🦊', rarity: 'legendary' },
  { id: 'click_million', name: 'Milionář',              desc: 'Celkem 1 000 000 kliků',            check: s => s.totalClicks >= 1000000,                    emoji: '💰', rarity: 'epic' },
  { id: 'click_billion', name: 'Miliardář',             desc: 'Celkem 1 000 000 000 kliků',        check: s => s.totalClicks >= 1000000000,                 emoji: '💎', rarity: 'legendary' },
  { id: 'combo50',       name: 'Combo maniak',          desc: 'Dosáhni combo 50',                  check: s => s.maxCombo >= 50,                            emoji: '🔥', rarity: 'rare' },
  { id: 'combo200',      name: 'Combo bůh',             desc: 'Dosáhni combo 200',                 check: s => s.maxCombo >= 200,                           emoji: '🌋', rarity: 'legendary' },
  { id: 'boss25',        name: 'Dračí zabiják',         desc: 'Poraz 25 bossů',                    check: s => s.bossesKilled >= 25,                        emoji: '🐲', rarity: 'epic' },
  { id: 'boss100',       name: 'Legendární hrdina',     desc: 'Poraz 100 bossů',                   check: s => s.bossesKilled >= 100,                       emoji: '⚔️', rarity: 'legendary' },
  { id: 'enchant50',     name: 'Mistr enchantů',        desc: 'Proveď 50 enchantů',                check: s => s.totalEnchants >= 50,                       emoji: '💎', rarity: 'epic' },
  { id: 'all_artifacts', name: 'Pokladník',             desc: 'Najdi všech 10 artefaktů',          check: s => s.artifactCount >= 10,                       emoji: '🏺', rarity: 'epic' },
  { id: 'prestige10',    name: 'Věčný poutník',         desc: 'Dosáhni Prestige 10',               check: s => s.prestige >= 10,                            emoji: '🌟', rarity: 'legendary' },
  { id: 'creatures50',   name: 'Zvířecí armáda',        desc: 'Vlastni 50 stvoření',               check: s => s.creatures >= 50,                           emoji: '🏰', rarity: 'epic' },
  { id: 'creatures100',  name: 'Království zvířat',     desc: 'Vlastni 100 stvoření',              check: s => s.creatures >= 100,                          emoji: '👑', rarity: 'legendary' },
  { id: 'golden10',      name: 'Zlatá kolekce',         desc: 'Měj 10 zlatých stvoření',           check: s => s.goldenCount >= 10,                         emoji: '✨', rarity: 'epic' },
  { id: 'golden50',      name: 'Vše se třpytí',         desc: 'Měj 50 zlatých stvoření',           check: s => s.goldenCount >= 50,                         emoji: '🌠', rarity: 'legendary' },
  { id: 'quiz50',        name: 'Profesor',              desc: 'Odpověz správně na 50 kvízů',       check: s => s.quizzesCorrect >= 50,                      emoji: '🎓', rarity: 'epic' },
  { id: 'minigame20',    name: 'Hvězdný lord',          desc: 'Vyhraj 20 miniher',                 check: s => s.minigamesWon >= 20,                        emoji: '🌌', rarity: 'epic' },
  { id: 'playtime_hour', name: 'Závislák',              desc: 'Hraj celkem 1 hodinu',              check: s => s.totalPlayTime >= 3600,                     emoji: '⏰', rarity: 'rare' },
  { id: 'playtime_5h',   name: 'Bez života',            desc: 'Hraj celkem 5 hodin',               check: s => s.totalPlayTime >= 18000,                    emoji: '💀', rarity: 'legendary' },
  { id: 'tier20_own',    name: 'Божská bytost',         desc: 'Kup si Starožitného boha',          check: s => s.hasTier(20),                               emoji: '💫', rarity: 'legendary' },
  { id: 'all_skills',    name: 'Mistr všeho',           desc: 'Maxni všechny skilly',              check: s => s.allSkillsMaxed,                            emoji: '🌳', rarity: 'legendary' },
]

// 🌳 Skill tree
const skillTreeDefs = [
  { id: 'autoClick',    name: 'Auto-klik',         desc: '1 auto-klik/s',              cost: 1, emoji: '🤖', maxLevel: 5 },
  { id: 'doubleCombo',  name: 'Dvojité combo',      desc: 'Combo se počítá 2×',         cost: 1, emoji: '⚡', maxLevel: 3 },
  { id: 'fasterPassive',name: 'Turbo passive',      desc: '+20% passive income',        cost: 1, emoji: '💨', maxLevel: 5 },
  { id: 'luckyDrop',    name: 'Šťastný nález',      desc: '+10% šance na artefakt',     cost: 2, emoji: '🍀', maxLevel: 3 },
  { id: 'bossSlayer',   name: 'Zabiják bossů',      desc: '+25% boss damage',           cost: 2, emoji: '🗡️', maxLevel: 3 },
  { id: 'starMaster',   name: 'Hvězdný mistr',      desc: '+1 hvězda v minihře',        cost: 1, emoji: '⭐', maxLevel: 3 },
  { id: 'enchantPower', name: 'Síla enchantu',       desc: '+15% enchant efekt',         cost: 2, emoji: '💎', maxLevel: 3 },
  { id: 'megaPrestige', name: 'Mega Prestige',       desc: '+0.1× prestige bonus',       cost: 3, emoji: '🌟', maxLevel: 5 },
]

// 💾 localStorage helpers
function loadState() {
  try {
    const saved = localStorage.getItem('clicker-save')
    if (saved) return JSON.parse(saved)
  } catch {}
  return null
}

function saveState(state) {
  try {
    localStorage.setItem('clicker-save', JSON.stringify(state))
  } catch {}
}

function App() {
  const saved = useRef(loadState())

  // Core state
  const [count, setCount] = useState(saved.current?.count || 0)
  const [totalClicks, setTotalClicks] = useState(saved.current?.totalClicks || 0)
  const [creatures, setCreatures] = useState(saved.current?.creatures || [])
  const [prestigeLevel, setPrestigeLevel] = useState(saved.current?.prestigeLevel || 0)
  const [prestigeBonus, setPrestigeBonus] = useState(saved.current?.prestigeBonus || 1)
  const [lastDaily, setLastDaily] = useState(saved.current?.lastDaily || null)

  // New persistent state
  const [completedQuests, setCompletedQuests] = useState(saved.current?.completedQuests || [])
  const [bossesKilled, setBossesKilled] = useState(saved.current?.bossesKilled || 0)
  const [maxCombo, setMaxCombo] = useState(saved.current?.maxCombo || 0)
  const [totalEnchants, setTotalEnchants] = useState(saved.current?.totalEnchants || 0)
  const [artifacts, setArtifacts] = useState(saved.current?.artifacts || [])
  const [skillPoints, setSkillPoints] = useState(saved.current?.skillPoints || 0)
  const [skills, setSkills] = useState(saved.current?.skills || {})
  const [minigamesWon, setMinigamesWon] = useState(saved.current?.minigamesWon || 0)
  const [sessionStartTime] = useState(saved.current?.sessionStartTime || Date.now())
  const [totalPlayTime, setTotalPlayTime] = useState(saved.current?.totalPlayTime || 0)
  const [highestClickValue, setHighestClickValue] = useState(saved.current?.highestClickValue || 0)
  const [unlockedAchievements, setUnlockedAchievements] = useState(saved.current?.unlockedAchievements || [])

  // UI state
  const [namingCreature, setNamingCreature] = useState(null)
  const [nameInput, setNameInput] = useState('')
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [comboCount, setComboCount] = useState(0)
  const [comboMultiplier, setComboMultiplier] = useState(1)
  const [showCombo, setShowCombo] = useState(false)
  const [showPrestigeModal, setShowPrestigeModal] = useState(false)
  const [showDailyReward, setShowDailyReward] = useState(false)
  const [dailyRewardAmount, setDailyRewardAmount] = useState(0)
  const [mergeFlash, setMergeFlash] = useState(null)
  const [purchaseAnim, setPurchaseAnim] = useState(null)
  const [floatingTexts, setFloatingTexts] = useState([])
  const [activeTab, setActiveTab] = useState('shop')
  const [questNotification, setQuestNotification] = useState(null)

  // Boss state
  const [boss, setBoss] = useState(null)
  const [bossHp, setBossHp] = useState(0)
  const [bossMaxHp, setBossMaxHp] = useState(0)
  const [bossTimer, setBossTimer] = useState(0)
  const bossTimerRef = useRef(null)

  // Enchant state
  const [enchantTarget, setEnchantTarget] = useState(null)

  // Minigame state
  const [minigame, setMinigame] = useState(null)
  const [miniStars, setMiniStars] = useState([])
  const [miniScore, setMiniScore] = useState(0)
  const [miniTimer, setMiniTimer] = useState(0)
  const miniTimerRef = useRef(null)

  // Stats panel
  const [showStats, setShowStats] = useState(false)

  // Quiz state
  const [quiz, setQuiz] = useState(null)
  const [quizTimer, setQuizTimer] = useState(0)
  const [quizAnswered, setQuizAnswered] = useState(false)
  const [quizResult, setQuizResult] = useState(null)
  const [quizReady, setQuizReady] = useState(false)
  const [quizzesCorrect, setQuizzesCorrect] = useState(saved.current?.quizzesCorrect || 0)
  const quizTimerRef = useRef(null)

  // Particles
  const [particles, setParticles] = useState([])
  const canvasRef = useRef(null)

  // Floating creature pets
  const [floatingPets, setFloatingPets] = useState([])

  const comboTimerRef = useRef(null)
  const comboCountRef = useRef(0)

  // 💾 Auto-save every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      saveState({
        count, totalClicks, creatures, prestigeLevel, prestigeBonus, lastDaily,
        completedQuests, bossesKilled, maxCombo, totalEnchants, artifacts,
        skillPoints, skills, minigamesWon, sessionStartTime, totalPlayTime,
        highestClickValue, quizzesCorrect, unlockedAchievements
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [count, totalClicks, creatures, prestigeLevel, prestigeBonus, lastDaily,
      completedQuests, bossesKilled, maxCombo, totalEnchants, artifacts,
      skillPoints, skills, minigamesWon, totalPlayTime, highestClickValue, quizzesCorrect, unlockedAchievements])

  // ⏱️ Play time tracker
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalPlayTime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // 🎁 Denní odměna – check at start
  useEffect(() => {
    const now = new Date()
    const today = now.toDateString()
    if (lastDaily !== today) {
      const reward = 50 + (creatures.length * 10) + (prestigeLevel * 25)
      setDailyRewardAmount(reward)
      setShowDailyReward(true)
    }
  }, [])

  const claimDailyReward = () => {
    const now = new Date()
    setCount(prev => prev + dailyRewardAmount)
    setTotalClicks(prev => prev + dailyRewardAmount)
    setLastDaily(now.toDateString())
    setShowDailyReward(false)
    playSound('achievement')
  }

  // 🏺 Artifact multipliers
  const artifactClickMult = artifacts.reduce((m, a) => {
    const def = artifactPool.find(d => d.id === a.id)
    if (def && (def.effect === 'clickMult' || def.effect === 'allMult')) return m * def.value
    return m
  }, 1)
  const artifactPassiveMult = artifacts.reduce((m, a) => {
    const def = artifactPool.find(d => d.id === a.id)
    if (def && (def.effect === 'passiveMult' || def.effect === 'allMult')) return m * def.value
    return m
  }, 1)
  const artifactComboMult = artifacts.reduce((m, a) => {
    const def = artifactPool.find(d => d.id === a.id)
    if (def && def.effect === 'comboMult') return m * def.value
    return m
  }, 1)
  const artifactBossDmg = artifacts.reduce((m, a) => {
    const def = artifactPool.find(d => d.id === a.id)
    if (def && def.effect === 'bossDmg') return m * def.value
    return m
  }, 1)
  const artifactBossTime = artifacts.reduce((m, a) => {
    const def = artifactPool.find(d => d.id === a.id)
    if (def && def.effect === 'bossTime') return m * def.value
    return m
  }, 1)

  // 🌳 Skill helpers
  const getSkill = (id) => skills[id] || 0
  const skillPassiveMult = 1 + getSkill('fasterPassive') * 0.2
  const skillBossDmg = 1 + getSkill('bossSlayer') * 0.25
  const skillEnchantPower = 1 + getSkill('enchantPower') * 0.15
  const skillExtraPrestige = getSkill('megaPrestige') * 0.1

  // Spočítej bonusy ze stvoření (including enchants)
  const clickBonus = creatures.reduce((sum, c) => sum + c.clickBonus * (c.enchantLevel ? (1 + c.enchantLevel * 0.15 * skillEnchantPower) : 1), 0)
  const passiveIncome = creatures.reduce((sum, c) => sum + c.passive * (c.enchantLevel ? (1 + c.enchantLevel * 0.15 * skillEnchantPower) : 1), 0)
  const baseClickValue = 1 + clickBonus
  const comboMult = comboMultiplier * artifactComboMult
  const clickValue = Math.floor(baseClickValue * prestigeBonus * comboMult * artifactClickMult)

  // Track highest click
  useEffect(() => {
    if (clickValue > highestClickValue) setHighestClickValue(clickValue)
  }, [clickValue])

  // Pasivní příjem – každou sekundu
  useEffect(() => {
    if (passiveIncome <= 0) return
    const interval = setInterval(() => {
      const income = Math.floor(passiveIncome * prestigeBonus * artifactPassiveMult * skillPassiveMult)
      setCount(prev => prev + income)
      setTotalClicks(prev => prev + income)
    }, 1000)
    return () => clearInterval(interval)
  }, [passiveIncome, prestigeBonus, artifactPassiveMult, skillPassiveMult])

  // 🤖 Auto-click from skill tree
  useEffect(() => {
    const autoLevel = getSkill('autoClick')
    if (autoLevel <= 0) return
    const interval = setInterval(() => {
      setCount(prev => prev + clickValue * autoLevel)
      setTotalClicks(prev => prev + clickValue * autoLevel)
    }, 1000)
    return () => clearInterval(interval)
  }, [skills, clickValue])

  // 🔊 Sound system
  const playSound = useCallback((type, tier) => {
    if (!soundEnabled) return
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const playNote = (freq, time, duration = 0.15, volume = 0.3, wave = 'sine') => {
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()
      osc.connect(gain)
      gain.connect(audioContext.destination)
      osc.frequency.value = freq
      osc.type = wave
      gain.gain.setValueAtTime(volume, audioContext.currentTime + time)
      gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + time + duration)
      osc.start(audioContext.currentTime + time)
      osc.stop(audioContext.currentTime + time + duration)
    }
    if (type === 'click') {
      playNote(800 + comboCountRef.current * 30, 0, 0.08, 0.25)
    } else if (type === 'combo') {
      playNote(1000, 0, 0.1, 0.4); playNote(1200, 0.08, 0.1, 0.4); playNote(1500, 0.16, 0.15, 0.4)
    } else if (type === 'purchase') {
      const basePitch = 400 + (tier || 1) * 50
      playNote(basePitch, 0, 0.15, 0.35); playNote(basePitch * 1.25, 0.12, 0.15, 0.35); playNote(basePitch * 1.5, 0.24, 0.2, 0.4)
      if (tier >= 8) playNote(basePitch * 2, 0.36, 0.3, 0.3, 'triangle')
    } else if (type === 'merge') {
      playNote(600, 0, 0.1, 0.4, 'triangle'); playNote(800, 0.1, 0.1, 0.4, 'triangle')
      playNote(1000, 0.2, 0.15, 0.5, 'triangle'); playNote(1200, 0.35, 0.25, 0.5, 'sine')
    } else if (type === 'prestige') {
      [523, 659, 783, 1047].forEach((freq, i) => playNote(freq, i * 0.15, 0.2, 0.4, 'sine'))
    } else if (type === 'achievement') {
      playNote(523, 0, 0.15); playNote(659, 0.15, 0.15); playNote(783, 0.3, 0.2)
    } else if (type === 'daily') {
      [440, 554, 659, 880].forEach((freq, i) => playNote(freq, i * 0.12, 0.18, 0.35, 'triangle'))
    } else if (type === 'boss') {
      playNote(200, 0, 0.3, 0.5, 'sawtooth'); playNote(150, 0.3, 0.3, 0.5, 'sawtooth')
    } else if (type === 'bossHit') {
      playNote(300 + Math.random() * 200, 0, 0.06, 0.3)
    } else if (type === 'bossKill') {
      [400, 500, 600, 800, 1000].forEach((f, i) => playNote(f, i * 0.1, 0.15, 0.4))
    } else if (type === 'enchant') {
      playNote(700, 0, 0.1, 0.3, 'triangle'); playNote(900, 0.1, 0.15, 0.35, 'triangle')
      playNote(1100, 0.2, 0.2, 0.4, 'sine')
    } else if (type === 'artifact') {
      [600, 800, 1000, 1200, 600].forEach((f, i) => playNote(f, i * 0.1, 0.15, 0.35, 'triangle'))
    } else if (type === 'star') {
      playNote(1200 + Math.random() * 300, 0, 0.1, 0.3)
    } else if (type === 'skill') {
      playNote(500, 0, 0.15, 0.35, 'triangle'); playNote(700, 0.12, 0.15, 0.35, 'triangle')
      playNote(900, 0.24, 0.2, 0.4, 'sine')
    } else if (type === 'quiz') {
      playNote(600, 0, 0.12, 0.35, 'sine'); playNote(800, 0.1, 0.12, 0.35, 'sine')
      playNote(1000, 0.2, 0.12, 0.35, 'sine'); playNote(1200, 0.3, 0.15, 0.4, 'triangle')
    }
  }, [soundEnabled])

  // ✨ Particle system
  const spawnParticles = useCallback((x, y, count = 6) => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i + Math.random(),
      x, y,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8 - 3,
      life: 1,
      emoji: ['✨', '⭐', '💫', '🌟', '✦'][Math.floor(Math.random() * 5)],
    }))
    setParticles(prev => [...prev, ...newParticles])
  }, [])

  useEffect(() => {
    if (particles.length === 0) return
    const frame = requestAnimationFrame(() => {
      setParticles(prev => prev
        .map(p => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, vy: p.vy + 0.2, life: p.life - 0.03 }))
        .filter(p => p.life > 0)
      )
    })
    return () => cancelAnimationFrame(frame)
  }, [particles])

  // 🐾 Floating creature pets
  useEffect(() => {
    if (creatures.length === 0) { setFloatingPets([]); return }
    const pets = creatures.slice(0, 8).map((c, i) => ({
      id: c.id,
      emoji: c.emoji,
      name: c.customName,
      x: 10 + Math.random() * 80,
      baseY: 70 + Math.random() * 20,
      speed: 0.3 + Math.random() * 0.5,
      offset: i * 45,
      direction: Math.random() > 0.5 ? 1 : -1,
    }))
    setFloatingPets(pets)
  }, [creatures.length])

  useEffect(() => {
    if (floatingPets.length === 0) return
    const interval = setInterval(() => {
      setFloatingPets(prev => prev.map(p => {
        let newX = p.x + p.speed * p.direction
        let newDir = p.direction
        if (newX > 92) { newDir = -1; newX = 92 }
        if (newX < 3) { newDir = 1; newX = 3 }
        return { ...p, x: newX, direction: newDir }
      }))
    }, 50)
    return () => clearInterval(interval)
  }, [floatingPets.length])

  // ⚡ Combo systém
  const handleClick = (e) => {
    playSound('click')

    // Particles at click position
    if (e) {
      const rect = e.currentTarget.getBoundingClientRect()
      spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2)
    }

    // Floating +N text
    const id = Date.now() + Math.random()
    setFloatingTexts(prev => [...prev, { id, value: clickValue, x: Math.random() * 60 + 20 }])
    setTimeout(() => setFloatingTexts(prev => prev.filter(f => f.id !== id)), 800)

    setCount(prev => prev + clickValue)
    setTotalClicks(prev => prev + clickValue)

    // Combo tracking
    const comboInc = getSkill('doubleCombo') > 0 ? 1 + getSkill('doubleCombo') : 1
    comboCountRef.current += comboInc
    setComboCount(comboCountRef.current)
    if (comboCountRef.current > maxCombo) setMaxCombo(comboCountRef.current)

    if (comboTimerRef.current) clearTimeout(comboTimerRef.current)
    if (comboCountRef.current >= 10) {
      const newMultiplier = Math.min(3, 1 + Math.floor(comboCountRef.current / 10) * 0.5)
      setComboMultiplier(newMultiplier)
      setShowCombo(true)
      if (comboCountRef.current === 10 || comboCountRef.current % 10 === 0) playSound('combo')
    }
    comboTimerRef.current = setTimeout(() => {
      comboCountRef.current = 0; setComboCount(0); setComboMultiplier(1); setShowCombo(false)
    }, 2000)

    // Random artifact drop (0.5% base + skill)
    const dropChance = 0.005 + getSkill('luckyDrop') * 0.01
    if (Math.random() < dropChance && artifacts.length < artifactPool.length) {
      const available = artifactPool.filter(a => !artifacts.find(o => o.id === a.id))
      if (available.length > 0) {
        const drop = available[Math.floor(Math.random() * available.length)]
        setArtifacts(prev => [...prev, drop])
        playSound('artifact')
        setQuestNotification({ emoji: drop.emoji, text: `Nalezen artefakt: ${drop.name}!` })
        setTimeout(() => setQuestNotification(null), 3000)
      }
    }

    // Random boss spawn (1% per click)
    if (!boss && Math.random() < 0.01) {
      spawnBoss()
    }

    // Random minigame (0.3% per click)
    if (!minigame && !boss && !quiz && Math.random() < 0.003) {
      startMinigame()
    }

    // Random quiz (0.8% per click)
    if (!quiz && !boss && !minigame && Math.random() < 0.008) {
      spawnQuiz()
    }
  }

  // 🐲 Boss system
  const spawnBoss = () => {
    const bossIndex = Math.min(Math.floor(bossesKilled / 2), bossPool.length - 1)
    const b = bossPool[bossIndex]
    const scaling = 1 + bossesKilled * 0.3
    const hp = Math.floor(b.hp * scaling)
    const timeLimit = Math.floor(b.timeLimit * artifactBossTime)
    setBoss({ ...b, reward: Math.floor(b.reward * scaling) })
    setBossHp(hp)
    setBossMaxHp(hp)
    setBossTimer(timeLimit)
    playSound('boss')

    if (bossTimerRef.current) clearInterval(bossTimerRef.current)
    bossTimerRef.current = setInterval(() => {
      setBossTimer(prev => {
        if (prev <= 1) {
          clearInterval(bossTimerRef.current)
          setBoss(null)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const hitBoss = () => {
    if (!boss) return
    const dmg = Math.floor(clickValue * artifactBossDmg * skillBossDmg)
    playSound('bossHit')
    spawnParticles(window.innerWidth / 2, window.innerHeight / 3, 8)

    setBossHp(prev => {
      const newHp = prev - dmg
      if (newHp <= 0) {
        clearInterval(bossTimerRef.current)
        setCount(c => c + boss.reward)
        setTotalClicks(c => c + boss.reward)
        setBossesKilled(b => b + 1)
        playSound('bossKill')
        setQuestNotification({ emoji: '💀', text: `${boss.name} poražen! +${boss.reward} kliků` })
        setTimeout(() => { setQuestNotification(null); setBoss(null) }, 2500)
        return 0
      }
      return newHp
    })
  }

  // ⭐ Minigame – chytni padající hvězdy
  const startMinigame = () => {
    const starCount = 8 + getSkill('starMaster')
    setMinigame({ active: true, total: starCount })
    setMiniScore(0)
    setMiniTimer(10)
    setMiniStars([])

    // Spawn stars over time
    const starInterval = setInterval(() => {
      setMiniStars(prev => [...prev, {
        id: Date.now() + Math.random(),
        x: 5 + Math.random() * 85,
        caught: false,
      }])
    }, 800)

    if (miniTimerRef.current) clearInterval(miniTimerRef.current)
    miniTimerRef.current = setInterval(() => {
      setMiniTimer(prev => {
        if (prev <= 1) {
          clearInterval(miniTimerRef.current)
          clearInterval(starInterval)
          setMinigame(prev => prev ? { ...prev, active: false } : null)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    setTimeout(() => clearInterval(starInterval), 10000)
  }

  const catchStar = (starId) => {
    setMiniStars(prev => prev.map(s => s.id === starId ? { ...s, caught: true } : s))
    setMiniScore(prev => prev + 1)
    playSound('star')
  }

  const claimMinigame = () => {
    const reward = miniScore * 50
    setCount(prev => prev + reward)
    setTotalClicks(prev => prev + reward)
    if (miniScore >= 3) setMinigamesWon(prev => prev + 1)
    playSound('achievement')
    setMinigame(null)
    setMiniStars([])
  }

  // 🧠 Quiz system
  const spawnQuiz = () => {
    const q = quizPool[Math.floor(Math.random() * quizPool.length)]
    const reward = 100 + creatures.length * 20 + prestigeLevel * 50
    setQuiz({ ...q, reward })
    setQuizTimer(15)
    setQuizAnswered(false)
    setQuizResult(null)
    setQuizReady(false)
    playSound('quiz')

    // 1s delay before answers are clickable
    setTimeout(() => setQuizReady(true), 1000)

    if (quizTimerRef.current) clearInterval(quizTimerRef.current)
    quizTimerRef.current = setInterval(() => {
      setQuizTimer(prev => {
        if (prev <= 1) {
          clearInterval(quizTimerRef.current)
          setQuizAnswered(true)
          setQuizResult('timeout')
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const answerQuiz = (answerIndex) => {
    if (quizAnswered || !quizReady) return
    clearInterval(quizTimerRef.current)
    setQuizAnswered(true)
    if (answerIndex === quiz.correct) {
      setQuizResult('correct')
      setCount(prev => prev + quiz.reward)
      setTotalClicks(prev => prev + quiz.reward)
      setQuizzesCorrect(prev => prev + 1)
      playSound('bossKill')
    } else {
      setQuizResult('wrong')
      playSound('boss')
    }
  }

  const closeQuiz = () => {
    setQuiz(null)
    setQuizAnswered(false)
    setQuizResult(null)
  }

  // 💎 Enchant system
  const getEnchantCost = (creature) => {
    const level = creature.enchantLevel || 0
    return Math.floor(creature.tier * 100 * Math.pow(1.5, level))
  }

  const enchantCreature = (creature) => {
    const cost = getEnchantCost(creature)
    if (count < cost) return
    setCount(prev => prev - cost)
    setTotalEnchants(prev => prev + 1)
    playSound('enchant')
    setCreatures(prev => prev.map(c =>
      c.id === creature.id ? { ...c, enchantLevel: (c.enchantLevel || 0) + 1 } : c
    ))
    setEnchantTarget(null)
  }

  // 🛒 Koupě stvoření
  const buyCreature = (shopItem) => {
    if (count < shopItem.price) return
    playSound('purchase', shopItem.tier)
    setPurchaseAnim(shopItem.emoji)
    setTimeout(() => setPurchaseAnim(null), 600)
    setCount(prev => prev - shopItem.price)
    const newCreature = {
      id: Date.now(),
      tier: shopItem.tier,
      emoji: shopItem.emoji,
      typeName: shopItem.name,
      customName: shopItem.name,
      clickBonus: shopItem.clickBonus,
      passive: shopItem.passive,
      golden: false,
      enchantLevel: 0,
    }
    setCreatures(prev => {
      const updated = [...prev, newCreature]
      return tryMerge(updated)
    })
  }

  // ⭐ Evoluce – sloučení 3 stejných do zlatého
  const tryMerge = (list) => {
    const countByTier = {}
    list.forEach(c => { if (!c.golden) countByTier[c.tier] = (countByTier[c.tier] || 0) + 1 })
    for (const tier of Object.keys(countByTier)) {
      if (countByTier[tier] >= 3) {
        const tierNum = Number(tier)
        const shopItem = creatureShop.find(s => s.tier === tierNum)
        if (!shopItem) continue
        let removed = 0
        const filtered = list.filter(c => {
          if (!c.golden && c.tier === tierNum && removed < 3) { removed++; return false }
          return true
        })
        const golden = {
          id: Date.now() + Math.random(), tier: tierNum,
          emoji: '✨' + shopItem.emoji, typeName: shopItem.name + ' ★',
          customName: 'Zlatý ' + shopItem.name,
          clickBonus: shopItem.clickBonus * 3, passive: shopItem.passive * 3,
          golden: true, enchantLevel: 0,
        }
        setMergeFlash(golden.emoji)
        setTimeout(() => setMergeFlash(null), 1200)
        playSound('merge')
        return tryMerge([...filtered, golden])
      }
    }
    return list
  }

  // 🔄 Prestige
  const canPrestige = totalClicks >= 10000
  const nextPrestigeBonus = 1 + (prestigeLevel + 1) * 0.25 + skillExtraPrestige

  const doPrestige = () => {
    playSound('prestige')
    setSkillPoints(prev => prev + 1)
    setPrestigeLevel(prev => prev + 1)
    setPrestigeBonus(nextPrestigeBonus)
    setCount(0)
    setTotalClicks(0)
    setCreatures([])
    setShowPrestigeModal(false)
  }

  // 🌳 Unlock skill
  const unlockSkill = (skillDef) => {
    const currentLevel = getSkill(skillDef.id)
    if (currentLevel >= skillDef.maxLevel || skillPoints < skillDef.cost) return
    playSound('skill')
    setSkillPoints(prev => prev - skillDef.cost)
    setSkills(prev => ({ ...prev, [skillDef.id]: currentLevel + 1 }))
  }

  // 📜 Quest checking
  const questState = {
    totalClicks, creatures: creatures.length, maxCombo,
    goldenCount: creatures.filter(c => c.golden).length,
    prestige: prestigeLevel, bossesKilled, totalEnchants,
    artifactCount: artifacts.length, minigamesWon, quizzesCorrect,
  }

  useEffect(() => {
    questDefinitions.forEach(q => {
      if (!completedQuests.includes(q.id) && q.check(questState)) {
        setCompletedQuests(prev => [...prev, q.id])
        if (q.reward > 0) {
          setCount(prev => prev + q.reward)
          setTotalClicks(prev => prev + q.reward)
        }
        playSound('achievement')
        setQuestNotification({ emoji: q.emoji, text: `Quest splněn: ${q.name}! +${q.reward}` })
        setTimeout(() => setQuestNotification(null), 3000)
      }
    })
  }, [totalClicks, creatures.length, maxCombo, prestigeLevel, bossesKilled, totalEnchants, artifacts.length, minigamesWon, quizzesCorrect])

  // 🏆 Achievement checking
  const achievementState = {
    totalClicks, maxCombo, bossesKilled, totalEnchants, quizzesCorrect,
    artifactCount: artifacts.length, prestige: prestigeLevel,
    creatures: creatures.length, goldenCount: creatures.filter(c => c.golden).length,
    minigamesWon, totalPlayTime,
    creaturesByType: (typeName, golden = false) => creatures.filter(c => c.typeName.includes(typeName) && (!golden || c.golden)).length,
    hasTier: (tier) => creatures.some(c => c.tier === tier),
    allSkillsMaxed: skillTreeDefs.every(s => (skills[s.id] || 0) >= s.maxLevel),
  }

  useEffect(() => {
    achievementDefs.forEach(a => {
      if (!unlockedAchievements.includes(a.id) && a.check(achievementState)) {
        setUnlockedAchievements(prev => [...prev, a.id])
        playSound('prestige')
        setQuestNotification({ emoji: a.emoji, text: `🏆 Achievement: ${a.name}!` })
        setTimeout(() => setQuestNotification(null), 4000)
      }
    })
  }, [totalClicks, creatures.length, maxCombo, prestigeLevel, bossesKilled,
      totalEnchants, artifacts.length, minigamesWon, quizzesCorrect, totalPlayTime, skills])

  // Format time
  const formatTime = (s) => {
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = s % 60
    return h > 0 ? `${h}h ${m}m` : `${m}m ${sec}s`
  }

  // 🌍 Dynamické pozadí
  const bg = getBackground(creatures.length)

  return (
    <div className="clicker-container" style={{ background: bg.gradient }}>

      {/* Particles */}
      {particles.map(p => (
        <div key={p.id} className="particle" style={{
          left: p.x, top: p.y, opacity: p.life, fontSize: `${0.8 + p.life}rem`,
        }}>{p.emoji}</div>
      ))}

      {/* Floating creature pets */}
      {floatingPets.map(p => (
        <div key={p.id} className="floating-pet" style={{
          left: `${p.x}%`, top: `${p.baseY}%`,
          transform: `scaleX(${p.direction})`,
        }}>
          <span className="pet-emoji">{p.emoji}</span>
          <span className="pet-name">{p.name}</span>
        </div>
      ))}

      {/* Floating click texts */}
      {floatingTexts.map(f => (
        <div key={f.id} className="floating-text" style={{ left: `${f.x}%` }}>
          +{f.value}
        </div>
      ))}

      {/* Purchase animation */}
      {purchaseAnim && <div className="purchase-anim">{purchaseAnim}</div>}
      {mergeFlash && <div className="merge-flash">{mergeFlash}</div>}

      {/* Quest notification */}
      {questNotification && (
        <div className="quest-notification">
          <span>{questNotification.emoji}</span> {questNotification.text}
        </div>
      )}

      {/* 🐲 Boss fight overlay */}
      {boss && (
        <div className="boss-overlay">
          <div className="boss-modal">
            <div className="boss-emoji">{boss.emoji}</div>
            <h2 className="boss-name">{boss.name}</h2>
            <div className="boss-hp-bar">
              <div className="boss-hp-fill" style={{ width: `${(bossHp / bossMaxHp) * 100}%` }} />
              <span className="boss-hp-text">{bossHp} / {bossMaxHp} HP</span>
            </div>
            <p className="boss-timer">⏱️ {bossTimer}s | 💰 {boss.reward} kliků</p>
            <button className="boss-attack-btn" onClick={hitBoss}>
              ⚔️ Útok! ({Math.floor(clickValue * artifactBossDmg * skillBossDmg)} dmg)
            </button>
            <button className="boss-flee-btn" onClick={() => { clearInterval(bossTimerRef.current); setBoss(null) }}>
              🏃 Utéct
            </button>
          </div>
        </div>
      )}

      {/* ⭐ Minigame overlay */}
      {minigame && (
        <div className="boss-overlay">
          <div className="minigame-modal">
            {minigame.active ? (
              <>
                <h2>⭐ Chyť hvězdy!</h2>
                <p className="mini-timer">⏱️ {miniTimer}s | Chyceno: {miniScore}</p>
                <div className="mini-field">
                  {miniStars.filter(s => !s.caught).map(s => (
                    <button key={s.id} className="mini-star" style={{ left: `${s.x}%` }}
                      onClick={() => catchStar(s.id)}>⭐</button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2>⭐ Výsledek</h2>
                <p className="mini-result">Chytil jsi {miniScore} hvězd!</p>
                <p className="mini-reward">+{miniScore * 50} kliků</p>
                <button className="naming-confirm" onClick={claimMinigame}>🎁 Vyzvednout</button>
              </>
            )}
          </div>
        </div>
      )}

      {/* 🧠 Quiz overlay */}
      {quiz && (
        <div className="boss-overlay">
          <div className="quiz-modal">
            <div className="quiz-emoji">{quiz.emoji}</div>
            <h2 className="quiz-title">🧠 Kvíz!</h2>
            {!quizAnswered ? (
              <>
                <p className="quiz-question">{quiz.q}</p>
                <p className="quiz-timer">⏱️ {quizTimer}s | 💰 {quiz.reward} kliků</p>
                {!quizReady && <p className="quiz-countdown">Připrav se...</p>}
                <div className={`quiz-answers ${!quizReady ? 'quiz-locked' : ''}`}>
                  {quiz.answers.map((a, i) => (
                    <button key={i} className="quiz-answer-btn" onClick={() => answerQuiz(i)} disabled={!quizReady}>
                      {String.fromCharCode(65 + i)}) {a}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="quiz-result">
                {quizResult === 'correct' && (
                  <>
                    <p className="quiz-result-text correct">✅ Správně!</p>
                    <p className="quiz-reward">+{quiz.reward} kliků</p>
                  </>
                )}
                {quizResult === 'wrong' && (
                  <>
                    <p className="quiz-result-text wrong">❌ Špatně!</p>
                    <p className="quiz-correct-answer">Správná odpověď: {quiz.answers[quiz.correct]}</p>
                  </>
                )}
                {quizResult === 'timeout' && (
                  <>
                    <p className="quiz-result-text timeout">⏱️ Čas vypršel!</p>
                    <p className="quiz-correct-answer">Správná odpověď: {quiz.answers[quiz.correct]}</p>
                  </>
                )}
                <button className="naming-confirm" onClick={closeQuiz}>Pokračovat</button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="clicker-card">
        <div className="header-with-sound">
          <h1>🧙 Realm of Creatures</h1>
          <div className="header-buttons">
            <button className="stat-toggle-btn" onClick={() => setShowStats(!showStats)}>📊</button>
            <button className={`sound-toggle ${soundEnabled ? 'on' : 'off'}`}
              onClick={() => setSoundEnabled(!soundEnabled)}>
              {soundEnabled ? '🔊' : '🔇'}
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-label">Za klik:</span>
            <span className="stat-value">+{clickValue}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Pasivně:</span>
            <span className="stat-value">+{Math.floor(passiveIncome * prestigeBonus * artifactPassiveMult * skillPassiveMult)}/s</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Stvoření:</span>
            <span className="stat-value">🐾 {creatures.length}</span>
          </div>
        </div>

        {/* Badges */}
        <div className="badges-row">
          {prestigeLevel > 0 && <span className="prestige-badge">⭐ Prestige {prestigeLevel} ({prestigeBonus.toFixed(2)}×)</span>}
          <span className="biome-badge">🌍 {bg.name}</span>
          {artifacts.length > 0 && <span className="artifact-badge">🏺 {artifacts.length} artefaktů</span>}
          {skillPoints > 0 && <span className="skill-badge">🌳 {skillPoints} bodů</span>}
        </div>

        <div className="counter-display">
          <p className="counter-number">{Math.floor(count)}</p>
          <p className="counter-label">Magických kliků</p>
          <p className="counter-gain">
            +{clickValue}/klik{passiveIncome > 0 ? ` | +${Math.floor(passiveIncome * prestigeBonus * artifactPassiveMult * skillPassiveMult)}/s` : ''}
          </p>
        </div>

        <button className="click-button" onClick={handleClick}>
          ✨ Seslat kouzlo ✨
        </button>

        {/* Combo indicator + bar */}
        {showCombo && (
          <div className="combo-indicator">
            🔥 COMBO ×{comboMult.toFixed(1)} ({comboCount} kliků!)
          </div>
        )}
        {comboCount > 0 && (
          <div className="combo-bar-container">
            <div className="combo-bar" style={{ width: `${Math.min(comboCount / 10 * 100, 100)}%` }} />
            <span className="combo-bar-text">{comboCount}/10 combo</span>
          </div>
        )}

        {/* Tab navigation */}
        <div className="tab-nav">
          <button className={`tab-btn ${activeTab === 'shop' ? 'active' : ''}`} onClick={() => setActiveTab('shop')}>🛒 Obchod</button>
          <button className={`tab-btn ${activeTab === 'quests' ? 'active' : ''}`} onClick={() => setActiveTab('quests')}>📜 Questy</button>
          <button className={`tab-btn ${activeTab === 'enchant' ? 'active' : ''}`} onClick={() => setActiveTab('enchant')}>💎 Enchant</button>
          <button className={`tab-btn ${activeTab === 'artifacts' ? 'active' : ''}`} onClick={() => setActiveTab('artifacts')}>🏺 Artefakty</button>
          <button className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>🌳 Skilly</button>
          <button className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`} onClick={() => setActiveTab('achievements')}>🏆 Achievementy</button>
        </div>

        {/* Tab content */}
        <div className="tab-content">
          {activeTab === 'shop' && (
            <div className="shop-section">
              <h2>✨ Magický obchod</h2>
              <p className="shop-hint">Kup 3× stejné → sloučí se do ✨ Zlatého! (3× bonus)</p>
              <div className="shop-grid">
                {creatureShop.map(item => (
                  <button key={item.tier}
                    className={`shop-item tier-${item.tier} ${count >= item.price ? 'affordable' : 'locked'}`}
                    onClick={() => buyCreature(item)} disabled={count < item.price}>
                    <span className="shop-emoji">{item.emoji}</span>
                    <span className="shop-name">{item.name}</span>
                    <span className="shop-desc">{item.desc}</span>
                    <span className="shop-price">{item.price} kliků</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'quests' && (
            <div className="quest-section">
              <h2>📜 Questy</h2>
              <div className="quest-list">
                {questDefinitions.map(q => {
                  const done = completedQuests.includes(q.id)
                  return (
                    <div key={q.id} className={`quest-item ${done ? 'done' : ''}`}>
                      <span className="quest-emoji">{q.emoji}</span>
                      <div className="quest-info">
                        <span className="quest-name">{q.name}</span>
                        <span className="quest-desc">{q.desc}</span>
                      </div>
                      <span className="quest-reward">{done ? '✅' : `+${q.reward}`}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === 'enchant' && (
            <div className="enchant-section">
              <h2>💎 Enchantování</h2>
              <p className="shop-hint">Vylepši své stvoření za kliky! Každý level = +15% stats</p>
              {creatures.length === 0 ? (
                <p className="shop-hint">Nejdřív si kup stvoření!</p>
              ) : (
                <div className="enchant-grid">
                  {creatures.map(c => {
                    const cost = getEnchantCost(c)
                    return (
                      <div key={c.id} className={`enchant-item tier-${c.tier}${c.golden ? ' golden' : ''}`}>
                        <span className="enchant-emoji">{c.emoji}</span>
                        <span className="enchant-name">{c.customName}</span>
                        <span className="enchant-level">Lv.{c.enchantLevel || 0}</span>
                        <button className={`enchant-btn ${count >= cost ? 'affordable' : 'locked'}`}
                          onClick={() => enchantCreature(c)} disabled={count < cost}>
                          💎 {cost} kliků
                        </button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}

          {activeTab === 'artifacts' && (
            <div className="artifact-section">
              <h2>🏺 Artefakty</h2>
              <p className="shop-hint">Artefakty padají náhodně při klikání!</p>
              {artifacts.length === 0 ? (
                <p className="shop-hint">Žádné artefakty... pokračuj v klikání!</p>
              ) : (
                <div className="artifact-grid">
                  {artifacts.map(a => (
                    <div key={a.id} className="artifact-item">
                      <span className="artifact-emoji">{a.emoji}</span>
                      <span className="artifact-name">{a.name}</span>
                      <span className="artifact-desc">{a.desc}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="artifact-missing">
                {artifactPool.filter(a => !artifacts.find(o => o.id === a.id)).map(a => (
                  <div key={a.id} className="artifact-item locked">
                    <span className="artifact-emoji">❓</span>
                    <span className="artifact-name">???</span>
                    <span className="artifact-desc">Zatím neobjeveno</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="skill-section">
              <h2>🌳 Strom dovedností</h2>
              <p className="shop-hint">Body získáš za Prestige! Máš: {skillPoints} bodů</p>
              <div className="skill-grid">
                {skillTreeDefs.map(s => {
                  const level = getSkill(s.id)
                  const maxed = level >= s.maxLevel
                  const canBuy = skillPoints >= s.cost && !maxed
                  return (
                    <div key={s.id} className={`skill-item ${maxed ? 'maxed' : canBuy ? 'available' : 'locked'}`}>
                      <span className="skill-emoji">{s.emoji}</span>
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-desc">{s.desc}</span>
                      <span className="skill-level">Lv.{level}/{s.maxLevel}</span>
                      {!maxed && (
                        <button className="skill-btn" onClick={() => unlockSkill(s)} disabled={!canBuy}>
                          {s.cost} bod{s.cost > 1 ? 'y' : ''}
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="achievement-section">
              <h2>🏆 Achievementy</h2>
              <p className="shop-hint">Odemčeno: {unlockedAchievements.length}/{achievementDefs.length}</p>
              <div className="achievement-grid">
                {achievementDefs.map(a => {
                  const done = unlockedAchievements.includes(a.id)
                  return (
                    <div key={a.id} className={`achievement-item rarity-${a.rarity} ${done ? 'unlocked' : 'locked'}`}>
                      <span className="achievement-emoji">{done ? a.emoji : '🔒'}</span>
                      <div className="achievement-info">
                        <span className="achievement-name">{done ? a.name : '???'}</span>
                        <span className="achievement-desc">{a.desc}</span>
                        <span className={`achievement-rarity ${a.rarity}`}>{a.rarity === 'rare' ? '💙 Rare' : a.rarity === 'epic' ? '💜 Epic' : '🧡 Legendary'}</span>
                      </div>
                      {done && <span className="achievement-check">✅</span>}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* 🔄 Prestige */}
        {canPrestige && (
          <div className="prestige-section">
            <h2>🔄 Prestige</h2>
            <p>Resetuj a získej bonus <strong>{nextPrestigeBonus.toFixed(2)}×</strong> + 1 skill bod!</p>
            <button className="prestige-button" onClick={() => setShowPrestigeModal(true)}>
              ⭐ Prestige (potřeba: 10 000 celk. kliků)
            </button>
          </div>
        )}

        {/* Modals */}
        {showPrestigeModal && (
          <div className="naming-overlay" onClick={() => setShowPrestigeModal(false)}>
            <div className="naming-modal prestige-modal" onClick={e => e.stopPropagation()}>
              <p className="naming-emoji">⭐</p>
              <h3>Opravdu chceš Prestige?</h3>
              <p className="naming-hint">
                Ztratíš kliky a stvoření.<br />
                Získáš bonus <strong>{nextPrestigeBonus.toFixed(2)}×</strong> + 1 skill bod!<br />
                (Prestige {prestigeLevel} → {prestigeLevel + 1})
              </p>
              <div className="prestige-buttons">
                <button className="prestige-confirm-yes" onClick={doPrestige}>Ano, resetuj! ⭐</button>
                <button className="prestige-confirm-no" onClick={() => setShowPrestigeModal(false)}>Ne, ještě ne</button>
              </div>
            </div>
          </div>
        )}

        {showDailyReward && (
          <div className="naming-overlay">
            <div className="naming-modal daily-modal">
              <p className="naming-emoji">🎁</p>
              <h3>Denní odměna!</h3>
              <p className="naming-hint">Vítej zpět! Dnes dostáváš:</p>
              <p className="daily-amount">+{dailyRewardAmount} kliků</p>
              <button className="naming-confirm" onClick={claimDailyReward}>🎁 Vyzvednout</button>
            </div>
          </div>
        )}

        {/* 📊 Stats panel */}
        {showStats && (
          <div className="naming-overlay" onClick={() => setShowStats(false)}>
            <div className="naming-modal stats-modal" onClick={e => e.stopPropagation()}>
              <h3>📊 Statistiky</h3>
              <div className="stats-grid">
                <div className="stats-row"><span>⏱️ Čas hraní:</span><span>{formatTime(totalPlayTime)}</span></div>
                <div className="stats-row"><span>🖱️ Celkem kliků:</span><span>{totalClicks.toLocaleString()}</span></div>
                <div className="stats-row"><span>💰 Aktuální kliky:</span><span>{Math.floor(count).toLocaleString()}</span></div>
                <div className="stats-row"><span>⚡ Nejvyšší klik:</span><span>{highestClickValue}</span></div>
                <div className="stats-row"><span>🔥 Max combo:</span><span>{maxCombo}</span></div>
                <div className="stats-row"><span>🐾 Stvoření:</span><span>{creatures.length}</span></div>
                <div className="stats-row"><span>✨ Zlatých:</span><span>{creatures.filter(c => c.golden).length}</span></div>
                <div className="stats-row"><span>💎 Enchantů:</span><span>{totalEnchants}</span></div>
                <div className="stats-row"><span>💀 Bossů poraženo:</span><span>{bossesKilled}</span></div>
                <div className="stats-row"><span>🏺 Artefaktů:</span><span>{artifacts.length}/{artifactPool.length}</span></div>
                <div className="stats-row"><span>⭐ Miniher:</span><span>{minigamesWon}</span></div>
                <div className="stats-row"><span>🧠 Kvízů správně:</span><span>{quizzesCorrect}</span></div>
                <div className="stats-row"><span>🏆 Achievementů:</span><span>{unlockedAchievements.length}/{achievementDefs.length}</span></div>
                <div className="stats-row"><span>📜 Questů:</span><span>{completedQuests.length}/{questDefinitions.length}</span></div>
                <div className="stats-row"><span>⭐ Prestige:</span><span>Lv.{prestigeLevel} ({prestigeBonus.toFixed(2)}×)</span></div>
                <div className="stats-row"><span>🌳 Skill body:</span><span>{skillPoints} volných</span></div>
              </div>
              <button className="naming-confirm" onClick={() => setShowStats(false)}>Zavřít</button>
            </div>
          </div>
        )}

        <div className="bottom-buttons">
          <button className="reset-button" onClick={() => {
            playSound('achievement')
            setCount(0); setTotalClicks(0); setCreatures([])
            setPrestigeLevel(0); setPrestigeBonus(1); setLastDaily(null)
            setCompletedQuests([]); setBossesKilled(0); setMaxCombo(0)
            setTotalEnchants(0); setArtifacts([]); setSkillPoints(0); setSkills({})
            setMinigamesWon(0); setTotalPlayTime(0); setHighestClickValue(0)
            setQuizzesCorrect(0)
            setUnlockedAchievements([])
            localStorage.removeItem('clicker-save')
          }}>
            Reset vše
          </button>
        </div>
      </div>

      {/* 🐾 Kolekce stvoření */}
      {creatures.length > 0 && (
        <div className="creatures-collection">
          <h3>🐾 Moje stvoření ({creatures.length})</h3>
          <div className="creatures-grid">
            {creatures.map(c => (
              <div key={c.id} className={`creature-card tier-${c.tier}${c.golden ? ' golden' : ''}`}>
                <span className={`creature-emoji${c.golden ? ' golden-glow' : ' creature-bounce'}`}>{c.emoji}</span>
                <span className="creature-name">{c.customName}</span>
                <span className="creature-type">{c.typeName}</span>
                <span className="creature-stats">+{c.clickBonus} klik | +{c.passive}/s</span>
                {c.enchantLevel > 0 && <span className="creature-enchant">💎 Lv.{c.enchantLevel}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
