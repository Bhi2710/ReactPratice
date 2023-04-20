import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddProducts } from '../Redux/ProductsReducer';
import { AddCart } from '../Redux/ProductsReducer';

const Home = () => {

  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.ProductsReducer);
  // console.log(allProducts)

  const getdata = async () => {
    let data = await fetch("https://fakestoreapi.com/products")
    data = await data.json();
    dispatch(AddProducts(data));
  }

  useEffect(() => {
    getdata();
  }, [])

  return (
    <div className='product-container'>
      {
        allProducts.map((ele, idx) => {
          return (
            <div key={idx} className='product-card'>
              <h3>{ele.category}</h3>
              <div className='product-card-items'>
                <img src={ele.image} alt='products' />
                <h4>Price $ {ele.price}</h4>
                <button onClick={()=>{dispatch(AddCart(ele))}}>Add Cart</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home