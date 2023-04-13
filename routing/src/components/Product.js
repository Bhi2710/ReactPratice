import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data);
      })

  }, [])

  return (
    <div>
      <h2>Product</h2>
      <div className='product-container'>
        {
          products.map((ele, idx) => {
            return (
              <div className='product-card'>
                <h3>{ele.category}</h3>
                <div className='product-card-items'>
                  <img src={ele.image} alt='products' />
                  <h4>Price $ {ele.price}</h4>
                  <Link to={`/addtocart/${ele.id}`}>
                    <button>Add Card</button>
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

export default Product;