export default function GameBoard({
  boxes,
  changeContent,
  activePlayerSymbol,
}) {
  return (
    <ol id="game-board">
      {boxes.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((column, columnIndex) => {
                return (
                  <li key={columnIndex}>
                    <button
                      onClick={() => {
                        changeContent(
                          activePlayerSymbol,
                          rowIndex,
                          columnIndex
                        );
                      }}
                    >
                      {boxes[rowIndex][columnIndex]}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
