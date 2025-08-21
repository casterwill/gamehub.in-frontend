import { useState } from 'react'
import './App.css'
import GameCard from '../components/game-card.jsx'

function App() {
  const [users, setUsers] = useState(0)

  return (
    <div>
      <GameCard />
    </div>
  )
}

export default App
