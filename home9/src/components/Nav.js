import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='menu'>
        <a href='/'>Hootsuite*</a>
        <a href='/'>Platform</a>
        <a href='/'>Plans</a>
        <a href='/'>Enterprise</a>
        <a href='/'>Resources</a>
        <a href='/'>Education</a>
      </div>
      <div className='buttons'>
        <button>Contact Us</button>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Nav;