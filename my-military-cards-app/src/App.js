// src/App.js
import React, { useState } from 'react';
import Card from './Cards';
import ranks from './ranks';
import './App.css';

function App() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stopnie Wojskowe w Polsce</h1>
      </header>
      <div className="cards-container">
        {ranks.map((rank, index) => (
          <Card
            key={index}
            rank={rank}
            isFlipped={index === flippedIndex}
            onFlip={() => handleFlip(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
