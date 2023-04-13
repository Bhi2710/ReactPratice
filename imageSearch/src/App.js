import React from 'react';
import './App.css';
import Photo from './components/Photo';

function App() {


  // useEffect(()=>{
  //   fetch("https://api.unsplash.com/search/photos?page=1&query=office&client_id=IWL2h8fldqu6CUScgHQVG7YgASuXNJeQPQaBfSumloE")
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //   })
  // },[])

  return (
    <div className="App">
      <Photo />
    </div>
  );
}

export default App;
