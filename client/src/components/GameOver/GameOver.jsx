import React from 'react';
import './game-over.scss';

const GameOver = ({score}) => {
    return(
        <div className="game-over">GAME OVER Score:{score}</div>
    )
}

export default GameOver;