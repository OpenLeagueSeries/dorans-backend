import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Leaderboard from './leaderboard/board';
import SummonerEntry from './summonerForm/form';
import TrophyCase from './trophyCase/case';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Doran's trophy case
      </header>
      <Router>
        <Route path='/' exact component={SummonerEntry} />
        <Route path='/' exact component={Leaderboard} />
        <Route path='/:server/:summoner' component={TrophyCase} />
      </Router>
    </div>
  );
}

export default App;
