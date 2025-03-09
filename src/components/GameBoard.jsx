import React, { useState } from "react";
import PropTypes from "prop-types";

const initialGameBoard = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
];

const GameBoard = (props) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    return (
        <div className="grid grid-cols-3 gap-2 max-w-[400px] aspect-square">
            {gameBoard.map((row, rowIndex) =>
                row.map((cell, cellIndex) => (
                    <button onClick={() => { console.log(gameBoard[rowIndex][cellIndex]) }}
                        key={`${rowIndex}-${cellIndex}`}
                        className="aspect-square flex items-center justify-center bg-slate-400"
                    >
                        {cell}
                    </button>
                ))
            )}
        </div>
    );
};

GameBoard.propTypes = {};

export default GameBoard;
