import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../Redux/ProductsReducer';

const Cart = () => {

  const dispatch = useDispatch();

  const { allCart } = useSelector((state) => state.ProductsReducer);


  return (
    <div className='cart_container'>
      <h1>All Cart Items</h1>
      {
        allCart.length === 0 ? (<h1>No item...</h1>) : (
          <div className='product-container'>
            {
              allCart.map((ele, idx) => {
                return (
                  <div key={idx} className='product-card'>
                    <h3>{ele.category}</h3>
                    <div className='product-card-items'>
                      <img src={ele.image} alt='products' />
                      <h4>Price $ {ele.price}</h4>
                      <h4>Total: {ele.quantity}</h4>
                      <div>
                        <button onClick={()=>dispatch(removeItem(ele))}>Remove</button>
                      </div>
                    </div>               
                  </div>             
                )                      
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default Cart;