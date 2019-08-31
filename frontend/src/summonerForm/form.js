import React, { useState } from 'react';

function SummonerForm() {
    const [summ, setSumm] = useState('');
    const [count, setCount] = useState(0);
    const [level, setLevel] = useState(0);
    const [region, setRegion] = useState('');

    const checkCharCount = (summ) => {
      fetch(`/char_count?text=${summ}`)
        .then(response => response.json())
        .then(data => setCount(data.count))
        .catch(err => console.log(err));
    }

    const getData = (summ) => {
      fetch(`/riot?summoner=${summ}`)
      .then(response => response.json())
      .then(data => { setLevel(data.level); setRegion(data.level); })
      .catch(err => console.log(err));
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
