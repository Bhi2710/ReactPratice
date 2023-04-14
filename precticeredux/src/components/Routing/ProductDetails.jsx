import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

const ProductDetails = () => {

  const { id } = useParams();
  const [cart, setCart] = useState({})


  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) =>{
      setCart(data)
    })
  },[id]);

  return (
    <>
      <h3>Product Details Lists: </h3>
      <div className='cart-container'>
        <div className='cart-items-container'>
          <div className="cart-image">
            <img src={cart.image} alt='Not found' />
          </div>
          <div className="cart-details">
            <dl>
              <dt><b>Title : </b></dt>
              <dd>{cart.title}</dd>
            </dl>

            <dl>
              <dt><b>Price : </b></dt>
              <dd>$ {cart.price}</dd>
            </dl>

            <dl>
              <dt><b>Description : </b></dt>
              <dd>{cart.description}</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails;