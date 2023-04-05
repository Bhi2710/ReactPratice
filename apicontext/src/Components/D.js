// import React from 'react';
// import { useContext } from 'react';
// import myContext from './context';

// const D = () => {
//   const state = useContext(myContext);
//   console.log(state)
//   return (
//     <div>
//         <h2>Component D</h2>
//         <p style={{color:"red"}}>Data coming from A {state}</p>
//     </div>
//   )
// }

// export default D;



import React from 'react';
import { useContext, useState } from 'react';
import myContext from './context';

const D = () => {
  const {setState} = useContext(myContext);

  const [dchild, setDchild] = useState([]);

  const handleClickChildtoparent = () => {
    setState(dchild)
  }

  return (
    <div>
        <h2>Component D</h2>
        <input type='text' placeholder='Send Data' onChange={(e) => setDchild(e.target.value)}/>
        <button onClick={handleClickChildtoparent}>Send Data</button>
    </div>
  )
}

export default D;

