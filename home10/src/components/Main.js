import React, { useEffect, useState } from 'react'

const Main = () => {

  const [searchItem, setItemSearch] = useState(null);
  const [products, setProduct] = useState([]);



  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/?${searchItem}`)
      const data = await res.json()
      setProduct(data);
    }
    fetchData()
  },[searchItem])

  useEffect(()=>{
    // clenup function
    return()=>{
      setItemSearch('');
    }
  },[])


  const handleSearch = (event) => {
    setItemSearch(event.target.value)
    setProduct([...products,searchItem])
  }


  return (
    <div style={{textAlign:"center"}}>
      <h1>Product Search</h1>
      <input type="text" value={searchItem} onChange={handleSearch} />

      <div style={{display:"flex", width:"100vw", flexWrap:"wrap" , margin:"20px", justifyContent:"center"}}>
      {
        products.map((ele)=>{
          return(
            <div>
              <img style={{padding:"30px"}} src={ele.image} alt='"load..' width="350px" height="350px" />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Main;