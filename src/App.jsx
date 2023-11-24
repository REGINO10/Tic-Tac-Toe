import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import { useState } from "react";

const PLAYER_NAMES = {
  X: "PLAYER1",
  O: "PLAYER2",
};

let GAME_BOARD_ENTRIES = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [clickList, setClickList] = useState([]);

  const currentClicks = [...GAME_BOARD_ENTRIES.map((row) => [...row])];

  let winner = WINNING_COMBINATIONS.some((combo) => {
    return (
      GAME_BOARD_ENTRIES[combo[0][0]][combo[0][1]] &&
      GAME_BOARD_ENTRIES[combo[0][0]][combo[0][1]] ===
        GAME_BOARD_ENTRIES[combo[1][0]][combo[1][1]] &&
      GAME_BOARD_ENTRIES[combo[0][0]][combo[0][1]] ===
        GAME_BOARD_ENTRIES[combo[2][0]][combo[2][1]]
    );
  });

  let draw =
    GAME_BOARD_ENTRIES.every((row) => row[0] && row[1] && row[2]) && !winner;

  const nameOfPlayer = (name, symbol) => {
    PLAYER_NAMES[symbol] = name;
  };

  const changeActive = (currentPlayer, row, col) => {
    GAME_BOARD_ENTRIES[row][col] = currentPlayer;

    setClickList((old) => [{ player: currentPlayer, row, col }, ...old]);
  };

  const reStartGame = () => {
    GAME_BOARD_ENTRIES = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    setClickList([]);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName={PLAYER_NAMES.X}
            symbol="X"
            nameToSet={nameOfPlayer}
          />
          <Player
            playerName={PLAYER_NAMES.O}
            symbol="O"
            nameToSet={nameOfPlayer}
          />
        </ol>
        {winner || draw ? (
          <GameOver
            winner={winner ? PLAYER_NAMES[clickList[0].player] : null}
            reMatch={reStartGame}
          />
        ) : undefined}
        <GameBoard
          boxes={GAME_BOARD_ENTRIES}
          changeContent={changeActive}
          activePlayerSymbol={
            clickList.length > 0
              ? clickList[0].player === "X"
                ? "O"
                : "X"
              : "X"
          }
        />
      </div>
      <Log clicks={clickList ? clickList : null} />
    </main>
  );
}

export default App;
