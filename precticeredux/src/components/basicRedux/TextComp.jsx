import React from 'react'
import { useSelector } from 'react-redux'

const TextComp = () => {

  const data = useSelector((storedata)=>{
    return storedata;
  })

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <h3>Text Comp</h3>
      <p>{data.name}</p>
    </div>
  )
}

export default TextComp;