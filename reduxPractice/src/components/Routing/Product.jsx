import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'

const Product = () => {

  const dispatch = useDispatch()

    const {products}  = useSelector((storedata)=>{return storedata})

    console.log(products)

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
      {products.length > 0 ? (
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
      ) : (
        <h2 style={{color:"red", textAlign: "center", marginTop:"100px"}}>
          No Product to display
        </h2>
      )}
    </div>
  )
}
export default Product;