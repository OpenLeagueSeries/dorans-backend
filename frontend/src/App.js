import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Leaderboard from './leaderboard/board';
import SummonerEntry from './SummonerForm/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Doran's trophy case
      </header>
      <Route path='/' exact component={SummonerEntry} />
      <Route path='/' exact component={Leaderboard} />
    </div>
  );
}

export default App;
