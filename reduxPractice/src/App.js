import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './components/context/Context';
import Login from './components/context/Login';
import Nav from './components/context/Nav';
import Home from './components/context/Home';
import Technologies from './components/Routing/Technologies';
import Product from './components/Routing/Product';
import Inputcomp from './components/basicRedux/Inputcomp';
import ProductDetails from './components/Routing/ProductDetails';
import Html from './components/Routing/Html';
import Css from './components/Routing/Css';
import Javascript from './components/Routing/Javascript';
import Reactpage from './components/Routing/Reactpage';
import Protect from './components/Routing/Protect';
import PageNotFound from './components/Routing/PageNotFound';
import TextComp from './components/basicRedux/TextComp';


function App() {

  const { isloggedin } = useContext(AuthContext)

  return (
    <div className="App">
      {isloggedin ? <Nav /> : null}
      <Routes>
        <Route path='/' element={isloggedin ? <Home /> : <Login/> } />
        <Route path='/tech' element={<Protect><Technologies /></Protect>} >
          <Route path='' element={<Navigate to="html" />} />
          <Route path='html' element={<Html /> } />
          <Route path='css' element={<Css />} />
          <Route path='javascript' element={<Javascript />}/>
          <Route path='react' element={<Reactpage />} />
        </Route>
        <Route path='/products' element={<Protect><Product /></Protect>} />
        <Route path='/productdetail/:id' element={<ProductDetails />} />
        <Route path='/basicRedux' element={
          <>
            <Inputcomp /><br/>
            <TextComp />
          </>} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
