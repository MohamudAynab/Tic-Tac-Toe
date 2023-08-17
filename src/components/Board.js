import React from 'react';
import Square from './Square';

function Board(props) {
  const rows = [];

  for (let row = 0; row < 3; row++) {
    const squaresInRow = [];
    for (let col = 0; col < 3; col++) {
      const index = row * 3 + col;
      squaresInRow.push(
        <Square
          key={index}
          value={props.squares[index]}
          onClick={() => props.onClick(index)}
        />
      );
    }
    rows.push(
      <div key={row} className="board-row">
        {squaresInRow}
      </div>
    );
  }

  return <div className="board">{rows}</div>;
}

export default Board;
