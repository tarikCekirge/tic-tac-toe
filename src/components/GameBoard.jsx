import PropTypes from "prop-types";

const GameBoard = ({ onSelectSquare, board }) => {
    return (
        <div className="grid grid-cols-3 gap-2 max-w-[400px] aspect-square mx-auto">
            {board.map((row, rowIndex) =>
                row.map((cell, cellIndex) => (
                    <button
                        key={`${rowIndex}-${cellIndex}`}
                        onClick={() => onSelectSquare(rowIndex, cellIndex)}
                        className="aspect-square flex items-center justify-center bg-gray-950 text-white text-7xl"
                        disabled={cell !== null}
                    >
                        {cell}
                    </button>
                ))
            )}
        </div>
    );
};

GameBoard.propTypes = {
    onSelectSquare: PropTypes.func.isRequired,
    board: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default GameBoard;
