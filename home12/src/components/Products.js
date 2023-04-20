import React, { useState, useEffect } from 'react'

const Products = () => {
 
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setData(data);
    })
  },[])

    
  return (
    <div className='product-container'>
        {
          data.map((ele, idx) => {
            return (
              <div key={idx} className='product-card'>
                <div className='product-card-items'>
                  <img src={ele.image} alt='products' />
                  <h4>Title {ele.Title}</h4>
                  <h4>Price $ {ele.price}</h4>
                  <button>Button</button>
                </div>
              </div>
            )
          })
        }
      </div>
  )
}

export default Products