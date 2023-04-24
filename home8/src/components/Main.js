import React from 'react'

const Main = () => {
  return (
    <div className='Main_container'>
      <div className='text'>
        <div>
          <h1>Header</h1>
          <h1>Footer</h1>
        </div>
        <div>
          <p>3D Latest Vacancies Near You. High Paying Jobs For Freshers And Experienced. Apply Now. Thousands Of Jobs Added Per Day. Search And Apply Now To Get Hired Fast.</p>
        </div>
        <div className='colors'>
          <div className='yellow'></div>
          <div className='red'></div>
          <div className='blue'></div>
        </div>
      </div>
      <div className='images_container'>
        <img src='https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1461&q=80' alt='load' />
      </div>
    </div>
  )
}

export default Main;