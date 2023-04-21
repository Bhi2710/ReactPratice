import React from 'react'

const Card = () => {
  return (
    <div className='Container'>
      <div className='image-container'>
        <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='loading...' />
        <div></div>
      </div>
      <div className='name_container'>
        <h2>Alexandra Caulea</h2>
        <p>I enjoy drinking a cup of coffee every day</p>
      </div>
      <table>
        <tr>
          <td>172</td>
          <td>47</td>
          <td>20</td>
        </tr>
        <tr>
          <td>POSTS</td>
          <td>FOLLOWERS</td>
          <td>FOLLOWING</td>
        </tr>
      </table>
      <div className='buttons'>
        <button>FOLLOW</button>&emsp;&nbsp;
        <button>MESSAGE</button>
      </div>
    </div>
  )
}

export default Card