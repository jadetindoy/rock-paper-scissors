import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';
import History from './components/History';
import ResetButton from './components/ResetButton';
import './styles.css';

const App = () => {
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedScore = JSON.parse(localStorage.getItem('score'));
    const savedHistory = JSON.parse(localStorage.getItem('history'));
    if (savedScore) setScore(savedScore);
    if (savedHistory) setHistory(savedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
    localStorage.setItem('history', JSON.stringify(history));
  }, [score, history]);

  const resetGame = () => {
    setScore({ player: 0, computer: 0 });
    setHistory([]);
    localStorage.removeItem('score');
    localStorage.removeItem('history');
  };

  return (
    <div className="app">
      <h1>Rock, Paper, Scissors 🪨📄✂️</h1>
      <Game score={score} setScore={setScore} history={history} setHistory={setHistory} />
      <Scoreboard score={score} />
      <History history={history} />
      <ResetButton resetGame={resetGame} />
    </div>
  );
};

export default App;
