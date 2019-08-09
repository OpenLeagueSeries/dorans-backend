import React, { useState } from 'react';

function SummonerForm() {
    const [summ, setSumm] = useState('');

    return (
      <div>
        Make your trophy case! Enter your summoner name below:
        <form>
        <label>
          Summoner Name:
          <input type="text" name="summoner" value={summ} onChange={(ev) => setSumm(ev.target.value)}/>
        </label>
        <input type="submit" value="Submit" />

        </form>
      </div>
    )
}

export default SummonerForm;
