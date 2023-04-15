import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,  } from './utils/counter';

function App() {

  const dispatch = useDispatch()

  const { data } = useSelector((storedata)=>{
    return storedata
  })  
  
  return (
    <div className="App">
      <h1>{data.count}</h1>
      <div className='buttons'>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
      </div>
    </div>
  );
}

export default App;
