import React from 'react';
import { Link } from 'react-router-dom;'

const Home = () => {

  return (
    <div>
      <h1>Notedly</h1>
      <p>This is the home page</p>
      <ul>
        <li>
          <Link to="/MyNotes">MyNotes</Link>
        </li>
        <li>
          <Link to="/Favorites">favorites</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;
