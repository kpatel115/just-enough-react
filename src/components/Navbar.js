import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='p-4 bg-slate-200'>
      <ul className='m-0 p-0 list-none leading-loose'>
        <li>
            <Link to="/" className='no-underline font-bold text-lg text-blue-200 :visited:text-blue-500 hover:text-red-300 focus:text-red-300'>Home</Link>
        </li>
        <li>
            <Link to="/MyNotes" className='no-underline font-bold text-lg text-blue-200 :visited:text-blue-500 hover:text-red-300 focus:text-red-300'>My Notes</Link>
        </li>
        <li>
            <Link to="/Favorites" className='no-underline font-bold text-lg text-blue-200 :visited:text-blue-500 hover:text-red-300 focus:text-red-300'>Favorites</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
