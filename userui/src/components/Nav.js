import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='title'>
      </div>
      <div className='menu'>
        <a href='/'>Home</a>
        <a href='/'>Products</a>
        <a href='/'>Users</a>
        <a href='/'>Contact</a>
      </div>
    </div>
  )
}

export default Nav