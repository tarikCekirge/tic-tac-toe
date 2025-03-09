import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {

  return (
    <main>
      <div className="game-container">
        <ol className="players">
          <Player initialName={"Player-1"} symbol={"X"} />
          <Player initialName={"Player-2"} symbol={"Y"} />
        </ol>
        {/* Game Board */}
        <GameBoard />
      </div>
      {/* Logs */}
    </main>
  )
}

export default App
