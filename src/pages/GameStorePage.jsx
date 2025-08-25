import GameCard from '../components/game-list/game-card.jsx'

function GameStorePage() {
  return (
    <div className="px-50 py-10 grid grid-cols-5 gap-5">
        <GameCard />
        <GameCard />
    </div>
  )
}

export default GameStorePage