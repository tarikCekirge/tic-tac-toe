import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Player = ({ initialName, symbol }) => {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);

    const handleEditClick = () => {
        setIsEditing((prev) => !prev);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    };

    return (
        <li>
            <span className="player">
                {isEditing ? (
                    <input
                        ref={inputRef}
                        type="text"
                        required
                        value={playerName}
                        onChange={handleChange}
                    />
                ) : (
                    <span className="player-name">{playerName}</span>
                )}
            </span>
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};

Player.propTypes = {
    initialName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
};

export default Player;
