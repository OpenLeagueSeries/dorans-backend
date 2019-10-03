import React, { useState, useEffect } from 'react';

const charSocket = new WebSocket(`ws://Localhost:9092/api/char_count`);
const riotSocket = new WebSocket(`ws://Localhost:9092/api/riot`);

function SummonerForm() {
    const [summ, setSumm] = useState('');
    const [level, setLevel] = useState(0);

    const submitForm = () => {
      riotSocket.send(summ);
    }

    riotSocket.onmessage = (ev) => {
      setLevel(ev.data);
    }

    return (
      <div>
        Make your trophy case! Enter your summoner name below:
        <label>
          Summoner Name:
          <input type="text" name="summoner" value={summ} onChange={(ev) =>
              {
                setSumm(ev.target.value);
              }}/>
        </label>
        {level}
        <input type='button' onClick={submitForm} value="Submit" />
      </div>
    )
}

export default SummonerForm;
