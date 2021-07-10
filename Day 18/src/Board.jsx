import "./App.css";
import Box from "./Box";

const Board = () => {
  const board = [];
  for (let r = 1; r <= 8; r++) {
    let row = [];
    for (let i = 1; i <= 8; i++) {
      if (r % 2 !== 0) {
        if (i % 2 === 0) {
          row.push(Box("white"));
        } else {
          row.push(Box("black"));
        }
      } else {
        if (i % 2 === 0) {
          row.push(Box("black"));
        } else {
          row.push(Box("white"));
        }
      }
    }
    board.push(row);
  }

  return (
    <div className="Board" id="board">
      {board}
    </div>
  );
};

export default Board;
