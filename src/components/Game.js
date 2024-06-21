import React, { useState } from 'react';

const choices = ['🪨', '📄', '✂️'];

const Game = ({ score, setScore, history, setHistory }) => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const playGame = (player) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(player);
    setComputerChoice(computer);
    const outcome = determineWinner(player, computer);
    setResult(outcome);
    updateScore(outcome);
    updateHistory(player, computer, outcome);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return 'Draw';
    if (
      (player === '🪨' && computer === '✂️') ||
      (player === '✂️' && computer === '📄') ||
      (player === '📄' && computer === '🪨')
    ) {
      return 'Player Wins';
    } else {
      return 'Computer Wins';
    }
  };

  const updateScore = (outcome) => {
    if (outcome === 'Player Wins') {
      setScore({ ...score, player: score.player + 1 });
    } else if (outcome === 'Computer Wins') {
      setScore({ ...score, computer: score.computer + 1 });
    }
  };

  const updateHistory = (player, computer, outcome) => {
    const newHistory = [...history, { player, computer, outcome }];
    setHistory(newHistory);
  };

  return (
    <div className="game">
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {result && (
        <div className="result">
          <p>Player Choice: {playerChoice}</p>
          <p>Computer Choice: {computerChoice}</p>
          <p>Result: {result}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
