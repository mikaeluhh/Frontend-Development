import React from 'react';
import './History.css';
import riceCropImage from '../../assets/ricecrop.jpg'; // You need to add the image to your assets folder

function History() {
  const cards = [1, 2, 3, 4, 5, 6]; // Example array to generate the cards

  return (
    <div className="container" id="history-section">
      <h2 className="history-title">HISTORY</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="image-container">
              <img src={riceCropImage} alt={`Scan No.${card}`} />
              <button className="results-btn">Show Results</button>
            </div>
            <p className="scan-title">SCAN NO.{card}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
