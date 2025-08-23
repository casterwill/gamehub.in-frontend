import Navbar from './components/game-list/navbar.jsx'

import GameStore from './pages/GameStorePage.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<GameStore />} />
      </Routes>
    </>
  )
}

export default App
