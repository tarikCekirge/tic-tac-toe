import { useState, useRef } from "react";
import PropTypes from "prop-types";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);

    const handleEditClick = () => {
        setIsEditing(prev => !prev);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
        inputRef.current?.focus();
    };

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    };

    return (
        <li className={`flex items-center w-full gap-3 flex-1 text-gray-500 ${isActive ? "font-bold text-white" : ""}`}>
            {isEditing ? (
                <input
                    ref={inputRef}
                    type="text"
                    required
                    value={playerName}
                    onChange={handleChange}
                    className="border px-2 py-1 w-full flex-1"
                />
            ) : (
                <span className="flex-1">{playerName}</span>
            )}
            <span className="player-symbol text-xl">{symbol}</span>
            <button onClick={handleEditClick} className="px-2 py-1 bg-gray-300 rounded text-gray-900 font-normal cursor-pointer">
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
};

Player.propTypes = {
    initialName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onChangeName: PropTypes.func.isRequired,
};

export default Player;
