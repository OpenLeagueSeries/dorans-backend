import React, { useState } from 'react';

function ChampLeaders (props) {
  const[leaders, setLeaders] = useState('');

  const list = leaders.map((leader) =>
    <li>{leader.name}: {leader.points}</li>
  )

  return(
    <div>
      <h3>{props.name}</h3>
      <ul>{list}</ul>
    </div>
  )
}

export default ChampLeaders;
