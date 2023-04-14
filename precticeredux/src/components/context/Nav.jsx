import React,{ useContext } from 'react';
import './Nav.css';
import { AuthContext } from './Context';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  return (
    <div className="nav">
      <div id="title">
        <h2>React Context</h2>
      </div>
      <div id="menu">
        <Link to="/">Home</Link>
        <Link to="/tech">Technologies</Link>
        <Link to="/products">Products</Link>
        <Link to="/basicRedux">basicRedux</Link>
        <button 
          onClick={()=> {
            setIsLoggedIn(false);
            navigate("/");
          }}
        >
          Logout
        </button>
        <span style={{ marginLeft: "30px", color: "yellow", fontSize: "22px" }}>
          <b></b>
        </span>
      </div>
    </div>
  )
}

export default Nav;