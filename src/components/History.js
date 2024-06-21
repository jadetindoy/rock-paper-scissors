import React from 'react';

const History = ({ history }) => (
  <div className="history">
    <h2>Game History</h2>
    <ul>
      {history.map((game, index) => (
        <li key={index}>
          Player: {game.player} - Computer: {game.computer} | Result: {game.outcome}
        </li>
      ))}
    </ul>
  </div>
);

export default History;
