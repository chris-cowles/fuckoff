import React from 'react';
import './Card.css';
import CallCat from '../CallCat/CallCat.js';     
import CallChance from '../CallChance/CallChance.js';

const Card = ({ catImage, message }) => {
    return (
        <div className="card">
            <div className="card-image-container">
                {catImage && <img src={catImage} alt="Cat" className="cat-image" />}
                <CallCat />
            </div>
            <div className="card-content">
                {message && <p className="card-message">{message}</p>}
                <CallChance />
            </div>
        </div>
    );
};

export default Card;