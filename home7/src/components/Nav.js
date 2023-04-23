import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='title'>
        <h3>LOGO</h3>
      </div>
      <div className='menu'>
        <a href='/'>HOME</a>
        <a href='/'>ABOUT</a>
        <a href='/'>MENU</a>
        <a href='/'>ORDER</a>
        <a href='/'>CONTACT</a>
      </div>
    </div>
  )
}

export default Nav;