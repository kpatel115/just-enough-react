/* React */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Components */
import Header from './components/Header';
import Navbar from './components/Navbar';
/* Pages */
import Home from './pages/Home';
import MyNotes from './pages/MyNotes';
import Favorites from './pages/Favorites';
/* Styling */
import './App.css';


const App = () => {
  return (
    <Router>
      <Header/>
      <Navbar/>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyNotes" element={<MyNotes />} />
          <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </Router>
  )
}

export default App;
