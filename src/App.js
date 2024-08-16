import React from 'react';
import './App.css';
import Sparkle from './components/Sparkle';

function App() {
  const name = 'Adam';
  const now = String(new Date())
  return (
    <div className='App'>
      <p>Hello {name}!</p>
      <p>the current time is {now}</p>
      <p> two plus two is now {2+2}</p>
      <Sparkle/>
    </div>
  );
}

export default App;
