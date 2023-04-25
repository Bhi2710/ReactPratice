import React from 'react';
import rock from '../assets/rocket.png';
import total from '../assets/total.jpg';
import connect from '../assets/connect.jpg';
 
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <img src={rock} alt='load' />
        <h3>2,500</h3>
        <p>enterprise organization successfully launched</p>
      </div>
      <div>
        <img src={total} alt='load' />
        <h3>45,000</h3>
        <p>enterprise users onboarded seamlessly</p>
      </div>
      <div>
        <img src={connect} alt='load' />
        <h3>200,000+</h3>
        <p>professionals trained on product and strategy</p>
      </div>
    </div>
  )
}

export default Footer;