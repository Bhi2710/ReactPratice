import React from 'react'

const Card = () => {
  return (
    <div className='Container'>
      <div className='Navbar'>
        <div className='left_side'>
          <p>Koding Made Simple</p>
        </div>
        <div className='right_side'>
          <button>Bootstrap</button>
          <button>Themes</button>
          <button>Blog</button>
        </div>
      </div>
      <div className='details'>
        <div className='middle'>
          <h1>Customize Bootstrap Navbar</h1>
          <p>Easy way to change navbar background, text and hover link color in bootstrap...</p>
        </div>
        <div className='email'>
          <p>www.kodingmadesimple.com</p>
        </div>
      </div>
    </div>
  )
}

export default Card