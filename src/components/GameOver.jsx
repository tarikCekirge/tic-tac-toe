import React from "react";
import PropTypes from "prop-types";

const GameOver = ({ winner, onRestart }) => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800/50 backdrop-blur-sm  flex items-center justify-center">
            <div className="bg-gray-200 p-7 rounded-lg shadow-2xl space-y-4 max-w-md w-full">
                <h2 className="text-3xl font-bold text-center">Game Over</h2>
                {winner ? <p className="text-xl text-center">{winner} won!</p> : <p className="text-xl text-center">It's a draw!</p>}
                <button onClick={onRestart} className="text-center bg-gray-900 p-4 text-white w-full rounded-md cursor-pointer ">Rematch</button>
            </div>
        </div>
    );
};

GameOver.propTypes = {
    winner: PropTypes.string,
    onRestart: PropTypes.func.isRequired,
};

export default GameOver;
