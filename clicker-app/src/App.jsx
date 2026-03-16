import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const [upgrades, setUpgrades] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [catImage, setCatImage] = useState(null)
  const [showCat, setShowCat] = useState(false)
  const [lastCatLevel, setLastCatLevel] = useState(0)
  const [catGallery, setCatGallery] = useState([])

  const CAT_API_KEY = 'live_PrB1elATgksQTnX6Ch1crYMB6GM9lTfGIT1yUmv7uq18GorgnVF1TCGdf0CA7Nno'

  const clickValue = 1 * multiplier

  // 🔊 Sound Effects
  const playSound = (type) => {
    if (!soundEnabled) return

    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    
    if (type === 'click') {
      // Krátký beep na klik
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()
      
      osc.connect(gain)
      gain.connect(audioContext.destination)
      
      osc.frequency.value = 800
      osc.type = 'sine'
      
      gain.gain.setValueAtTime(0.3, audioContext.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
      
      osc.start(audioContext.currentTime)
      osc.stop(audioContext.currentTime + 0.1)
    } 
    else if (type === 'upgrade') {
      // Double ding - upgrade sound
      const playDing = (freq, delay) => {
        const osc = audioContext.createOscillator()
        const gain = audioContext.createGain()
        
        osc.connect(gain)
        gain.connect(audioContext.destination)
        
        osc.frequency.value = freq
        osc.type = 'sine'
        
        gain.gain.setValueAtTime(0.4, audioContext.currentTime + delay)
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + delay + 0.2)
        
        osc.start(audioContext.currentTime + delay)
        osc.stop(audioContext.currentTime + delay + 0.2)
      }
      
      playDing(600, 0)
      playDing(800, 0.15)
    }
    else if (type === 'achievement') {
      // Melodie pro achievement
      const notes = [
        { freq: 523, time: 0 },      // C
        { freq: 659, time: 0.15 },   // E
        { freq: 783, time: 0.3 }     // G
      ]
      
      notes.forEach(note => {
        const osc = audioContext.createOscillator()
        const gain = audioContext.createGain()
        
        osc.connect(gain)
        gain.connect(audioContext.destination)
        
        osc.frequency.value = note.freq
        osc.type = 'sine'
        
        gain.gain.setValueAtTime(0.3, audioContext.currentTime + note.time)
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + note.time + 0.2)
        
        osc.start(audioContext.currentTime + note.time)
        osc.stop(audioContext.currentTime + note.time + 0.2)
      })
    }
  }

  // 🐱 Fetch cat image from Cat API
  const fetchCatImage = async (level) => {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=1',
        {
          headers: {
            'x-api-key': CAT_API_KEY
          }
        }
      )
      const data = await response.json()
      if (data && data[0] && data[0].url) {
        // Přidej do galerie
        const catItem = {
          id: Date.now(),
          url: data[0].url,
          level: level,
          timestamp: new Date().toLocaleTimeString()
        }
        setCatGallery([...catGallery, catItem])
        
        // Zobraz popup
        setCatImage(data[0].url)
        setShowCat(true)
        setTimeout(() => setShowCat(false), 4000)
      }
    } catch (error) {
      console.error('Error fetching cat:', error)
    }
  }

  const handleClick = () => {
    const newCount = count + clickValue
    playSound('click')
    setCount(newCount)
    checkCatLevel(newCount)
  }

  const buyUpgrade = () => {
    if (count >= 50) {
      playSound('upgrade')
      const newCount = count - 50
      setCount(newCount)
      setMultiplier(multiplier + 1)
      setUpgrades(upgrades + 1)
    }
  }

  // Kontrola nového cat levelu (10, 20, 30... 200)
  const checkCatLevel = (newCount) => {
    const currentLevel = Math.floor(newCount / 10) * 10
    
    if (currentLevel > lastCatLevel && currentLevel >= 10 && currentLevel <= 200) {
      setLastCatLevel(currentLevel)
      playSound('achievement')
      fetchCatImage(currentLevel)
    }
  }

  return (
    <div className="clicker-container">
      <div className="clicker-card">
        <div className="header-with-sound">
          <h1>🎮 Clicker Game Pro</h1>
          <button 
            className={`sound-toggle ${soundEnabled ? 'on' : 'off'}`}
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? '🔊 Zvuk ZAP' : '🔇 Zvuk VYP'}
          >
            {soundEnabled ? '🔊' : '🔇'}
          </button>
        </div>
        
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-label">Multiplier:</span>
            <span className="stat-value">{multiplier}x</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Upgrades:</span>
            <span className="stat-value">{upgrades}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Kočky:</span>
            <span className="stat-value">🐱 {catGallery.length}</span>
          </div>
        </div>

        <div className="counter-display">
          <p className="counter-number">{count}</p>
          <p className="counter-label">Kliků</p>
          <p className="counter-gain">+{clickValue} per click</p>
        </div>

        {count > 0 && (
          <div className="celebration">
            🎉 Skvělé! Pokračuj! 🎉
          </div>
        )}

        <button
          className="click-button"
          onClick={handleClick}
        >
          Klikni na mě! 👆
        </button>

        {count >= 10 && (
          <p className="achievement">✨ Dosáhl/a jsi 10 kliků! ✨</p>
        )}

        {count >= 50 && (
          <div className="upgrade-section">
            <p className="achievement gold">🏆 Wow! Už 50 kliků! 🏆</p>
            <button 
              className="upgrade-button"
              onClick={buyUpgrade}
            >
              🚀 Koupit Upgrade (50 kliků)
            </button>
            <p className="upgrade-info">Zvýší tvůj multiplier na {multiplier + 1}x + dostaneš kočku! 🐱</p>
          </div>
        )}

        {/* Cat Popup Modal */}
        {showCat && catImage && (
          <div className="cat-modal-overlay" onClick={() => setShowCat(false)}>
            <div className="cat-modal">
              <button 
                className="cat-close"
                onClick={() => setShowCat(false)}
              >
                ✕
              </button>
              <p className="cat-text">🐱 Gratuluji! Dosáhl/a jsi nové úrovně kliků! 🎉</p>
              <img 
                src={catImage} 
                alt="Random cat" 
                className="cat-image"
              />
              <p className="cat-credit">Powered by TheCatAPI</p>
            </div>
          </div>
        )}

        <div className="bottom-buttons">
          <button 
            className="reset-button"
            onClick={() => {
              playSound('upgrade')
              setCount(0)
              setMultiplier(1)
              setUpgrades(0)
              setLastCatLevel(0)
              setCatImage(null)
              setShowCat(false)
              setCatGallery([])
            }}
          >
            Reset vše
          </button>
        </div>
      </div>

      {/* 📋 Cat Gallery - dolní lišta */}
      {catGallery.length > 0 && (
        <div className="cat-gallery-container">
          <div className="gallery-header">
            <h3>🐱 Moje Kočky ({catGallery.length})</h3>
          </div>
          <div className="cat-gallery">
            {catGallery.map((cat) => (
              <div key={cat.id} className="gallery-item">
                <img 
                  src={cat.url} 
                  alt={`Cat at level ${cat.level}`}
                  className="gallery-image"
                  title={`Úroveň: ${cat.level} kliků\n${cat.timestamp}`}
                />
                <div className="gallery-badge">{cat.level}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
