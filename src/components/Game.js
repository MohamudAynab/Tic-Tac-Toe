import React from 'react';
import Board from './Board';
import { useState} from 'react';
import "/workspaces/Tic-Tac-Toe/src/style.css";

function Game() {

  const [history, setHistory] = useState([...Board]);

  const [stepNumber, setStepNumber] = useState(0);

  const [xIsNext, setXIsNext] = useState(true);


  return (
    <div className="game-container">
      <div className="game-board">
      <Board 
      
      squares = {history[stepNumber].squares}
      onClick={handleSquareClick}
      />
    </div>
    <div className="game-info">
    </div>
  </div>
  );
}

export default Game;