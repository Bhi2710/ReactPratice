import React from 'react'

const Header = () => {
  return (
    <div style={{textAlign:'center', padding:"1.5rem 0px 0.5rem 0px"}}>
      <h1 style={{fontSize: "60px", color:"#ACAEB2",}}>todos</h1>
      <p style={{fontSize: "15px", color:"gray"}}>Items will persist in the browser local storage</p>
    </div>
  )
}

export default Header;