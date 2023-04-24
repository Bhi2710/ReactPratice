import React from 'react';
import './Nav.css';
import fb from '../assets/facebook.png';
import tw from '../assets/twitter.png';
import insta from '../assets/instagram.png';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='title'>
        <h3>logo</h3>
      </div>
      <div className='menu'>
        <a href='/'>HOME</a>
        <a href='/'>ABOUT</a>
        <a href='/'>CONTACT</a>
      </div>
      <div className='images'>
        <img src={fb} alt='load' />
        <img src={tw} alt='load' />
        <img src={insta} alt='load' />
      </div>
    </div>
  )
}

export default Nav;