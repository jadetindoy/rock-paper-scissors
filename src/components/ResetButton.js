import React from 'react';

const ResetButton = ({ resetGame }) => (
  <button className="reset-button" onClick={resetGame}>
    Reset Game
  </button>
);

export default ResetButton;
