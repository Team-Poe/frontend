import React from 'react';
import logo from './logo.svg';
import './App.css';
import GamePage from './Components/GamePage/GamePage.component'

import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <GamePage />
      <AppRouter />
    </div>
  );
}

export default App;
