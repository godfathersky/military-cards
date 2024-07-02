// src/Flashcard.js
import React, { useState } from 'react';
import './Cards.css'; // Stwórz plik CSS dla stylów

const Card = ({ rank }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <img src={rank.image} alt={rank.name} />
        </div>
        <div className="card-back">
          <h3>{rank.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
