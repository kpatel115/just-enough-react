import React from 'react';
import Sparkle from './components/Sparkle';

function App() {
  const name = 'Adam';
  const now = String(new Date())
  return (
    <div className='App'>
      <h1>Hello Notedly</h1>
      <p>Welcome to the Notedly application!</p>

      <p>Hello {name}!</p>
      <p>the current time is {now}</p>
      <p> two plus two is now {2+2}</p>
      <Sparkle/>
    </div>
  );
}

export default App;
