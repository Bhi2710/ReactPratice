import React from 'react'

const Card = () => {
  return (
    <div className='Container'>
      <div className='image-container'>
        <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='loading...' />
        <div className='image_menu'>
          <p>+</p>
          <div className='three_dot'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className='name_container'>
        <h2>Dima Blover</h2>
        <p>UI/UX Designer</p>
      </div>
      <table>
        <tr>
          <td>26</td>
          <td>94</td>
          <td>139</td>
        </tr>
        <tr>
          <td>Shoot</td>
          <td>Following</td>
          <td>Followers</td>
        </tr>
      </table>
    </div>
  )
}

export default Card