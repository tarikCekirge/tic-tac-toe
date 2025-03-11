import { useState, useCallback } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const getActivePlayer = (turns) => {
  return turns.length > 0 && turns[0].player === "X" ? "O" : "X";
};

const deriveGameBoard = (gameTurns) => {
  return INITIAL_GAME_BOARD.map((row, rowIndex) =>
    row.map((cell, cellIndex) => {
      const turn = gameTurns.find(t => t.square.row === rowIndex && t.square.cell === cellIndex);
      return turn ? turn.player : null;
    })
  );
};

const deriveWinner = (gameBoard, players) => {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    const symbol = gameBoard[a.row][a.cell];
    if (symbol && symbol === gameBoard[b.row][b.cell] && symbol === gameBoard[c.row][c.cell]) {
      return players[symbol];
    }
  }
  return null;
};

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = useCallback((rowIndex, cellIndex) => {
    if (gameBoard[rowIndex][cellIndex] !== null) return;

    setGameTurns(prevTurns => [
      { square: { row: rowIndex, cell: cellIndex }, player: activePlayer },
      ...prevTurns
    ]);
  }, [gameBoard, activePlayer]);

  const handleRematch = useCallback(() => {
    setGameTurns([]);
  }, []);

  const handlePlayerNameChange = useCallback((symbol, newName) => {
    setPlayers(prevPlayers => ({
      ...prevPlayers,
      [symbol]: newName
    }));
  }, []);

  return (
    <main>
      <div className="game-container">
        <ol className="players highlight-player flex justify-center gap-4  my-4 bg-gray-950 p-4 max-w-[400px] mx-auto">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        <Log turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
