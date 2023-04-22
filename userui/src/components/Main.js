import React, { useEffect, useState } from 'react'

const Main = () => {

  const [state, setState] = useState([]);
  const [filter, setFilter] = useState(state);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then(res => res.json())
      .then(data => {
        setState(data.results)
        setFilter(data.results)
      })
  }, [])



  const filterData = (element) =>{
    const updateddata = state.filter((ele)=>{
      return ele.gender === element;
    });
    setFilter(updateddata);
  }

  return (
    <div className='main-container'>
      <div>
        <h2>User Details</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div>
        <form>
          <input type='radio' name='gender' defaultChecked value="All" onClick={()=>setFilter(state)}/>
          <label>All</label>
          <input type='radio' name='gender' value="male" onClick={()=>filterData('male')} />
          <label>Male</label>
          <input type='radio' name='gender' value="female" onClick={()=>filterData('female')} />
          <label>Female</label>
        </form>
      </div>
      <div>
        <div className='second-navbar'>
          <p>IMAGE</p>
          <p>NAME</p>
          <p>EMAIL</p>
          <p>GENDER</p>
        </div>
        {filter.map((ele, idx) => {
          return (
            <div key={idx} className='details'>
              <div>
                <img src={ele.picture.large} alt="loading..." />
              </div>
              <div>{ele.name.first}</div>
              <div>{ele.email}</div>
              <div>{ele.gender}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Main;