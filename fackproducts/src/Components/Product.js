import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddProducts } from '../Redux/ProductsReducer';

const Product = () => {

  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.ProductsReducer);

  const getdata = async () => {
    let data = await fetch("https://fakestoreapi.com/products")
    data = await data.json();
    dispatch(AddProducts(data));
  }

  useEffect(() => {
    getdata();
  }, [])

  return (
    <div className='ProductConts'>
    <h1>Latest Products</h1>
      {
        allProducts.map((ele, idx) => {
          return (
            <div key={idx} className='product-item'>
              <div className='left_image'>
                <img src={ele.image} alt='products' />
              </div>
              <div className='right_details_container'>
                <div>
                  <span>Category :- </span>
                  <span>{ele.category}</span>
                </div>
                <div>
                  <span>Description :- </span>
                  <span>{ele.description}</span>
                </div>
                <div>
                  <span>Title :- </span>
                  <span>{ele.title}</span>
                </div>
                <div>
                  <span>Price :- </span>
                  <span>${ele.price}</span>
                </div>
                <div>
                  <span>Rating :- </span>
                  <span>{ele.rating.rate}</span>
                </div>
                <div>
                  <span>Count :- </span>
                  <span>{ele.rating.count}</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Product;





