import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='home-container'>
      <div className='nav-list'>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/tech'>Techologies</Link>
        <Link to='/useref'>useRef</Link>
        <Link to='/classComp'>classComp</Link>
      </div>
    </div>
  )
}

export default Navbar;