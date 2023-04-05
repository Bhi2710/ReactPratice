// import React, { useState } from 'react';
// import B from './B';
// import myContext from './context';

// const A = () => {
//   const [state, setState] = useState("");
//   const [data, setData] = useState([]);

//   const handleChange = (e) =>{
//     setState(e.target.value)
//   }

//   const handleClick = () => {
//     setData(state)
//   }

//   return (
//     <div>
//         <h2>Component A</h2>
//         <input type='text' placeholder='Enter Data' onChange={(e)=>handleChange(e)}/>
//         <button onClick={handleClick}>Send Data</button>
//         <hr />
//         <myContext.Provider value={data}>
//           <B />
//         </myContext.Provider>
//     </div>
//   )
// }

// export default A;




import React, { useState } from 'react';
import B from './B';
import myContext from './context';

const A = () => {
  const [state, setState] = useState("");


  return (
    <div>
        <h2>Component A</h2>
        <p style={{color:"red"}}>Data from Child : {state}</p>
        <hr />
        <myContext.Provider value={{setState}}>
          <B />
        </myContext.Provider>
    </div>
  )
}

export default A;