import React, { useState } from 'react';
import myStore from '../../Redux/Store';

const Inputcomp = () => {
  
  const [data, setData] = useState("");

  const callDispatch = () => {
    myStore.dispatch({
        type: "name",
        username: data,
    })
  }

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h3>Input Component</h3>
      <div>
        <input type='text' onChange={(e) => {setData(e.target.value)}}/>&nbsp;
        <button onClick={callDispatch}>Submit</button>
      </div>
    </div>
  )
}

export default Inputcomp;