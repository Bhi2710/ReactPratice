import React, { useState, useRef, useEffect } from 'react'

const UserefBasic = () => {
  const [state, setState] = useState(0);
  let timerId = useRef(null);
  let h2Ref = useRef(null);

  const startItem = () =>{
    timerId.current = setInterval(()=>{
      setState((prev)=>prev + 1)
    },1000)
  }

  useEffect(()=>{
    if(state === 0){
      h2Ref.current.innerText = `Click start button  to state ${state}`;
      h2Ref.current.style.color = "green"
    }else{
      h2Ref.current.innerText = `Click stop button to pause ${state}`;
      h2Ref.current.style.color = "red"
    }
  })

  const endItem = () =>{
    clearInterval(timerId.current)
  }

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1 id='timerId' ref={h2Ref}>Start {state}</h1>
      <button onClick={startItem} style={{padding:"4px 10px"}}>Start</button>&emsp;
      <button onClick={endItem} style={{padding:"4px 10px"}}>Stop</button>
    </div>
  )
}

export default UserefBasic;