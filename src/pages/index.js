import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import MyNotes from './MyNotes';
import Favorites from './Favorites';

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/MyNotes" element={<MyNotes/>} />
        <Route path="/Favorites" element={<Favorites/>} />
      </Routes>
    </Router>
  )
}

export default Pages;
