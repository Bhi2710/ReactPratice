import React from 'react'

const Card = () => {
  return (
    <div className='Container'>
      <div className='name_container'>
        <h2>Abhishek Yadav</h2>
        <p>B.tech Information Technology</p>
        <a href='https://www.linkedin.com/in/abhishek-yadav-1606aa18b/'>Linkedin</a>&emsp;
        <a href='https://github.com/Bhi2710'>Github</a>
        <hr/>
      </div>
      <div>
        <h2>Educations</h2>
        <p>Dr AITH, Kanpur
          B.Tech in Information Technology
          Percentage-76% Aug 2018 – June 2022
          <br />
          Subhagi Intermediate College, Azamgarh
          Class 12th (UP Board)
          Percentage- 69% Apr 2015–Apr2016
          <br />
          Subhagi Higher Secodary College,
          Renukoot
          Class 10th (UP Board)
          Percentage-78.6% Apr2013–Apr2014
        </p>
        <hr/>
      </div>
      <div>
        <h2>CERTIFICATIONS | INTERNSHIPS</h2>
        <p>
          Solved 150+ DSA/Coding questions on
          the geekster platform.<br />
          Participated in various Coding contests
          organized by the platform.<br />
          Worked on various projects like Tic Tac
          Toe and weather app.<br />
          Technical Stack Learned: HTML, CSS,
          JavaScript, React, SQL, and Java
        </p>
        <hr/>
      </div>
      <div>
        <h2>Skills</h2>
        <ul>
          <li> Java, HTML, CSS, JavaScript, Basic Python </li>
          <li> ReactJs, Material UI,Redux</li>
          <li> DataStructureand Algorithms, SQL</li>
          <li> GIT, VS code</li>
        </ul>
        <hr/>
      </div>
      <div>
        <h2>Hobbies</h2>
        <ol>
          <li> Cricket</li>
          <li> Chess</li>
          <li> Deginer</li>
          <li> Travling</li>
        </ol>
        <hr/>
      </div>
    </div>
  )
}

export default Card