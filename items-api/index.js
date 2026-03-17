const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())          // Povolí přístup z jiných domén (frontend)
app.use(express.json())  // Umí číst JSON z požadavků

// --- Data (pole v paměti) ---
let items = [
  { id: 1, name: 'Meč temnoty', type: 'zbraň', power: 42 },
  { id: 2, name: 'Štít odvahy', type: 'brnění', power: 35 },
  { id: 3, name: 'Lektvar života', type: 'lektvar', power: 20 },
  { id: 4, name: 'Prsten moudrosti', type: 'doplněk', power: 15 },
  { id: 5, name: 'Dračí dýka', type: 'zbraň', power: 55 },
]

let nextId = 6

// --- Endpointy ---

// GET /items – vrátí všechny itemy
app.get('/items', (req, res) => {
  res.json(items)
})

// GET /items/:id – vrátí jeden item podle ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const item = items.find(i => i.id === id)
  if (!item) {
    return res.status(404).json({ error: 'Item nenalezen' })
  }
  res.json(item)
})

// POST /items – přidá nový item
app.post('/items', (req, res) => {
  const { name, type, power } = req.body

  if (!name || !type) {
    return res.status(400).json({ error: 'Chybí name nebo type' })
  }

  const newItem = {
    id: nextId++,
    name: String(name).slice(0, 100),
    type: String(type).slice(0, 50),
    power: typeof power === 'number' ? power : 0,
  }

  items.push(newItem)
  res.status(201).json(newItem)
})

// DELETE /items/:id – smaže item podle ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const index = items.findIndex(i => i.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'Item nenalezen' })
  }
  const deleted = items.splice(index, 1)[0]
  res.json({ message: 'Smazáno', item: deleted })
})

// --- Spuštění serveru ---
app.listen(PORT, () => {
  console.log(`🚀 Items API běží na http://localhost:${PORT}`)
})
