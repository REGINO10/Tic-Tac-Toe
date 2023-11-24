import { useState } from "react";

export default function Player({ playerName, symbol, nameToSet }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(playerName);

  const saveOrEdit = () => {
    editing ? nameToSet(name, symbol) : undefined;
    setEditing((curState) => !curState);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  return (
    <li>
      <span className="player">
        {editing ? (
          <input type="text" required value={name} onChange={updateName} />
        ) : (
          <span className="player-name">{name}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={saveOrEdit}>{editing ? "save" : "edit"}</button>
    </li>
  );
}
