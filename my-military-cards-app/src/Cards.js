import React from 'react';
import './Cards.css';

const Card = ({ rank, isFlipped, onFlip }) => {

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
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
