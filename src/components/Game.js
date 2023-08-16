import React from 'react';
import Square from './Square';
import Board from './Board';
import { useState  } from "react";
import "/workspaces/Tic-Tac-Toe/src/style.css";

function Game() {
    const [history, setHistory] = useState([
      {
        squares: Array(9).fill(null),
      },
    ]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
  
    const handleStartNewGame = () => {
      setHistory([
        {
          squares: Array(9).fill(null),
        },
      ]);
      setStepNumber(0);
      setXIsNext(true);
    };
  
    const handleSquareClick = (i) => {
      const newHistory = history.slice(0, stepNumber + 1);
      const current = newHistory[newHistory.length - 1];
      const squares = current.squares.slice();
  
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
  
      squares[i] = xIsNext ? "X" : "O";
      setHistory([...newHistory, { squares }]);
      setStepNumber(newHistory.length);
      setXIsNext(!xIsNext);
    };
  
    const jumpTo = (step) => {
      setStepNumber(step);
      setXIsNext(step % 2 === 0);
    };
  
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
  
    const moves = history.map((_step, move) => (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>
          {move ? `Go to move # ${move}` : "Start"}
        </button>
      </li>
    ));
  
    let status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O");

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    return(
      <div className="game-container">
      <div className="game-board">
        <div><Square/></div>
        <Board squares={current.squares} onClick={handleSquareClick} />
      </div>
      <div className="game-info">
        <div>
          <button onClick={handleStartNewGame}>Start A New Game</button>
        </div>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
    )

}

export default Game;
