import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import AddtoCart from './components/AddtoCart';
import Navbar from './components/Navbar';
import Technology from './components/Technology';
import Html from './components/Html';
import Css from './components/Css';
import Javascript from './components/Javascript';
import Reactpage from './components/Reactpage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/addtocart/:id' element={<AddtoCart />} />
        <Route path='/tech' element={<Technology />}>
          <Route path='' element={<Navigate to='html' />} />
          <Route path='html' element={<Html /> } />
          <Route path='css' element={<Css />} />
          <Route path='javascript' element={<Javascript />}/>
          <Route path='react' element={<Reactpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
