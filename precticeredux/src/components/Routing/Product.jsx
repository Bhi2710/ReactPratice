import React, { useEffect, } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'

const Product = () => {

  const dispatch = useDispatch()

    const {products} = useSelector((storedata)=>{return storedata})

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
          dispatch({
            type:"products",
            payload:data
          })
        })
  
    }, [])


  return (
    
    <div>
      <h2>Product</h2>
      <div className='product-container'>
        {
          products.map((ele, idx) => {
            return (
              <div key={idx} className='product-card'>
                <h3>{ele.category}</h3>
                <div className='product-card-items'>
                  <img src={ele.image} alt='products' />
                  <h4>Price $ {ele.price}</h4>
                  <Link to={`/productdetail/${ele.id}`}>
                    <button>Product Detail</button>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Product