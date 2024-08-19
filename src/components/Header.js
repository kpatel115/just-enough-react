import React from 'react'
import logo from '../img/logo.svg';

const Header = () => {
  return (
    <header className='h-1/5 w-screen flex-col'>
      <img src={logo} alt="Notedly Logo" className='h-10 w-10 float-left'/>
      <h1 className='text-4x1 text-blue-700 m-1 float-right' >Notedly - A place for neat notes</h1>
    </header>
  )
}

export default Header
