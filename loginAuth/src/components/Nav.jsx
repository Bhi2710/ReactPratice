import React, { useContext } from 'react';
import { AuthContext } from './Context';

const Nav = () => {

  const { userName,setLoggedIn } = useContext(AuthContext)
  
  console.log(userName);

  return (
    <div className='nav'>
      <div className='title'>
        <h2>React Context</h2>
      </div>
      <div className='menu'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Profile</a>
        <a href='#'>Products</a>
        <button onClick={() => { setLoggedIn(false) }}>Logout</button>
        <span style={{ marginLeft: "20px", color: "yellow", fontSize: "20px" }}>
          <b>{userName}</b>
        </span>
      </div>
    </div>
  )
}

export default Nav