import React, { useState } from 'react';
import MasteryCard from '../masteryCard/card.js';
import './style.css';

function TrophyCase(props) {

  const [champs, setChamps] = useState([]);
  const [progress, setProgress] = useState(0);

  const cards = champs.map(
    (champ) =>
    <li>
      <MasteryCard champ={champ} summoner={props.match.params.summoner} />
    </li> );

  return <div>
    <div id="progress"><div id="bar" width={progress + '%'}> </div> </div>
    <h3>{props.match.params.server} : {props.match.params.summoner}</h3>
    <ul>
      {cards}
    </ul>
  </div>
}

export default TrophyCase;
