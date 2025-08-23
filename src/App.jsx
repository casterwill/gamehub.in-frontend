import { useState } from 'react'
import './App.css'
import GameCard from './components/game-list/game-card.jsx'
import Navbar from './components/game-list/navbar.jsx'

function App() {
  const [users, setUsers] = useState(0)

  return (
    <>
      <Navbar />
      <GameCard />
    </>
  )
}

export default App
