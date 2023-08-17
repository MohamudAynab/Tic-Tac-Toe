import React from "react";
import Square from "./Square";
import "/workspaces/Tic-Tac-Toe/src/style.css";


function Board() {
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
