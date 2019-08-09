import React, { useState } from 'react';
import ChampLeaders from './champ';

function Leaderboard() {
  const[champs, setChamps] = useState('');

  const board = champs.map((champ) =>
    <li>
      <ChampLeaders name={champ.champ} id={champ.id} />
    </li>
  )

  return (
    <div>
    <h2> Leaderboard </h2>
      <ul>{board}</ul>
    </div>
  )
}

export default Leaderboard;
