import React from "react";
import TicTacToeDisplay from "./ticTacToeDisplay";

// const TicTacToe = ({ squares = [], xisNext = true, setValue = f => f }) => {
//   return (
//     <div>
//       {checkGameStatus(squares)}
//       Next Move:{xisNext ? "X" : "O"}
//       <div className="main-game-wrapper">
//         {squares.map((value, index) => (
//           <TicTacToeDisplay
//             key={index}
//             value={value}
//             setValue={() => {
//               setValue(index, xisNext);
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

class TicTacToe extends React.Component {
  checkGameStatus = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c] &&
        squares[a] !== "a"
      ) {
        // console.log("INNNN", {squares[a]});
        // return squares[a];
        return { a, b, c };
      }
    }
    return null;
  };

  render() {
    return (
      <div className="main-wrapper">
        <div className="content-wrapper">
          <h3>TIC TAC TOE</h3>
          Winner:{this.checkGameStatus(this.props.squares)
            ? this.props.squares[this.checkGameStatus(this.props.squares).a]
            : ""}
          <br />
          Next Move:{this.props.xisNext ? "X" : "O"}
          <div className="main-game-wrapper">
            {this.props.squares.map((value, index) => (
              <TicTacToeDisplay
                key={index}
                value={value}
                tileIndex={index}
                winningTiles={this.checkGameStatus(this.props.squares)}
                setValue={() => {
                  if (
                    this.props.squares[index] === null &&
                    this.checkGameStatus(this.props.squares) === null
                  ) {
                    this.props.setValue(index, this.props.xisNext);
                  }
                }}
              />
            ))}
          </div>
          <br />
          <button
            onClick={() => {
              this.props.resetGame();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default TicTacToe;
