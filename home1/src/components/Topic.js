import React from 'react'

const Topic = () => {
  return (
    <div className='Container'>
        <div>
          <h1>Topics covered</h1>
          <span>The following is a list of all topics we cover in the MDN learning area.</span>
        </div>
        <div>
          <a href='#'>Getting started with the web</a>
          <p>Provides a practical introduction to web development for complete beginners.</p>
        </div>
        <div>
          <a href='#'>HTML --- Structure the web</a>
          <p>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. The topic teaches HTML in detail.</p>
        </div>
        <div>
          <a href='#'>CSS --- Styling the web</a>
          <p>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This provides comprehensive coverage of CSS.</p>
        </div>
    </div>
  )
}

export default Topic;