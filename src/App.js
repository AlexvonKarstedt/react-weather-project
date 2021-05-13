import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className ="Container">   
      <header>
      </header>
      <Weather />
      <footer>
         Open-Source code by <a href ="https://github.com/AlexvonKarstedt/react-weather-project" target="_">Alexandra von Karstedt</a> 
    </footer>
    </div>
    </div>
  );
}

export default App;
