import React from 'react';
import './start-button.scss';

const StartButton = ({clickHandler}) => {
    return(
        <div onClick={(e) => {clickHandler(e)}} className="start-button">
            I ACCEPT
        </div>
    )
}

export default StartButton;