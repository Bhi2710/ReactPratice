import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';
import Cart from './Components/Cart';
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
       <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
