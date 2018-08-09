import React from "react";

const TicTacToeDisplay = ({ value, setValue, tileIndex, winningTiles }) => {
  let classname = winningTiles
    ? winningTiles.a === tileIndex ||
      winningTiles.b === tileIndex ||
      winningTiles.c === tileIndex
      ? "winner-buttons"
      : "buttons"
    : "buttons";
  return (
    <div className={classname} onClick={setValue}>
      {value}
    </div>
  );
};

export default TicTacToeDisplay;
