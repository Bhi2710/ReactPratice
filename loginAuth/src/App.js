import { useContext } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import { AuthContext } from './components/Context';

const App = () => {

  const { isloggedin } = useContext(AuthContext);

  return (
    <div className="App">
      {isloggedin ? (
        <div>
          <Nav />
          <Home />
        </div>  
      ):(
        <Login />
      )}
      
    </div>
  );
}

export default App;
