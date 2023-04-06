import React, { useContext, useState } from 'react'
import { AuthContext } from './Context'


const Login = () => {

  const { setUserName, setLoggedIn } = useContext(AuthContext)
  const [user, setUser] = useState({
    name: "",
    password: "",
  });


  const handleAuth = () =>{
    if(
      (user.name === "Abhi" && user.password === "Abhi@111") || 
      (user.name === "admin" && user.password === "admin@111")  
    ){
      setLoggedIn(true);
      setUserName(user.name);
    }else{
      alert("Your Username or password is worng")
    }
  }

  return (
    <div className='Login-container'>
      <div className='login-items-container'>
        <div>
          <input type='text' placeholder='Enter Username' onChange={(e) => { setUser({...user, name: e.target.value})}}/>
        </div>
        <div>
          <input type='password' placeholder='Enter Password' onChange={(e) => { setUser({...user, password: e.target.value})}} />
        </div>
        <div>
          <button onClick={handleAuth}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login;