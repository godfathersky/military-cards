// src/App.js
import React from 'react';
import Card from './Cards';
import ranks from './ranks';
import './App.css'; // Możesz dodać stylizację aplikacji

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stopnie Wojskowe w Polsce</h1>
      </header>
      <div className="cards-container">
        {ranks.map((rank, index) => (
          <Card key={index} rank={rank} />
        ))}
      </div>
    </div>
  );
}

export default App;
