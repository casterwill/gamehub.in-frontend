import Navbar from './components/game-list/navbar.jsx'

import GameStore from './pages/GameStorePage.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      
      <Routes>  
        <Route path="/" element={<GameStore />} />
      </Routes>
    </div>
  )
}

export default App
