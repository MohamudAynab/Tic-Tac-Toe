import React from "react";
import "/workspaces/Tic-Tac-Toe/src/style.css";

function Square(value, handleClick) {
    return (
      <button className="square" onClick={handleClick}>
      </button>
    );
  }

  export default Square;