export default function Log({ clicks }) {
  return (
    <ol id="log">
      {clicks.map((ele) => {
        return (
          <li key={`${ele.row}${ele.col}`}>
            {ele.player} Selected {ele.row},{ele.col}
          </li>
        );
      })}
    </ol>
  );
}
