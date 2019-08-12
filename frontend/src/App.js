import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Leaderboard from './leaderboard/board';
import SummonerEntry from './summonerForm/form';

function handleSubmit(event) {
  const text = document.querySelector('#char-input').value
  fetch(`/char_count?text=${text}`) // FIXME
    .then(response => response.json())
    .then(function(data) {
      let chars = data.results
      console.log(chars)
    });
}

function App() {
  return (
    <div className="App">
      <div>
        <label htmlFor='char-input'>How many characters does</label>
        <input id='char-input' type='text' />
        <button onClick={handleSubmit}>have?</button>
      </div>

      <div>
        <h3 id='char-count'></h3>
      </div>


      <header className="App-header">
        Doran's trophy case
      </header>
      <Router>
        <Route path='/' exact component={SummonerEntry} />
        <Route path='/' exact component={Leaderboard} />
      </Router>
    </div>
  );
}

export default App;
