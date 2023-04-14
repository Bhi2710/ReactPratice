import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Technologies = () => {
  return (
    <div className='tech-container'>
      <div className='left-tech'>
        <Link to='html' >HTML</Link>
        <Link to='css' >CSS</Link>
        <Link to='javascript' >JavaScript</Link>
        <Link to='react' >React</Link>
      </div>
      <div className='right-tech'>
        <Outlet />
      </div>
    </div>
  )
}

export default Technologies;