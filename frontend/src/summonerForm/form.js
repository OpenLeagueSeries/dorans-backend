import React, { useState } from 'react';

function SummonerForm() {
    const [summ, setSumm] = useState('');
    const [count, setCount] = useState(0);
    const [level, setLevel] = useState(0);
    const [region, setRegion] = useState('');
    const charSocket = new Websocket(`/char_count`);
    const riotSocket = new Websocket(`/riot`);

    const checkCharCount = (summ) => {
      charSocket.send(summ);
    }
    charSocket.onmessage = (ev) => {
      setCount(ev.data);
    }

    const getData = (summ) => {
      riotSocket.send(summ);
    }
    riotSocket.onmessage = (ev) => {
      setLevel(ev.data);
    }

    return (
      <div>
        Make your trophy case! Enter your summoner name below:
        <form>
        <label>
          Summoner Name:
          <input type="text" name="summoner" value={summ} onChange={(ev) =>
              {
                setSumm(ev.target.value);
                checkCharCount(ev.target.value);
                getData(ev.target.value);
              }}/>
        </label>
        {count}
        {level}
        {region}
        <input type="submit" value="Submit" />

        </form>
      </div>
    )
}

export default SummonerForm;
