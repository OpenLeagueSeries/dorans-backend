import React, { useState } from 'react';

function MasteryCard(props) {
  const [performance, setPerformance] = useState({});

  return <div> Mastery of {props.champ} wooo: {performance}</div>
}

export default MasteryCard;
