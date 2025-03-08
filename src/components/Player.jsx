import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Player = ({ name, symbol }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((prev) => !prev)
    }

    let playerName = <span className="player-name">{name}</span>
    if (isEditing) {
        playerName = <input type='text' required value={name} />
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};

Player.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
};

export default Player;
