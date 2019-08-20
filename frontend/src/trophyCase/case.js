import React, { useState } from 'react';

function trophyCase(props) {
  return <div>{props.match.params.server} : {props.match.params.summoner}</div>
}

export default trophyCase
