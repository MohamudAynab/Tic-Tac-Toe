import React from "react";
import Square from "./Square";
import "/workspaces/Tic-Tac-Toe/src/style.css";


function Board({squares, onClick}) {

    const rows = [];

    for (let row = 0; row < 3; row++) {
        const squaresInRow = [];
        for (let col = 0; col <3; col++) {
            const index = row * 3 + col;
            squaresInRow.push(
                <Square
                key={index}
                value={squares[index]}
                onClick={() => onClick(index)}
                />
            );
        }
        rows = push(
            <div key={row} className="board-row">
                {squaresInRow}

            </div>
        );
    }


    return(
        <div className="game-board">
            <div className="board-row">
            <Square />
            <Square />
            <Square />
            </div>
            <div className="board-row">
            <Square />
            <Square />
            <Square />
            </div>
            <div className="board-row">
            <Square />
            <Square />
            <Square />
            </div>
        </div>
    )
  }

  export default Board;
