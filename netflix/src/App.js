import './App.css';

function App() {
  return (
    <div className="App">
      <div className="shadow">
        <div className="heading">
          <div className="images">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="loading..." width="150px" height="50px"/>
          </div>
          <div className="buttons">
            <button className="signin">SignIn</button>&emsp;
            <button className="signin">Register</button>
          </div>
        </div>
        <div className="main">
          <h1>Unlimited movies, TV shows and more.</h1>
          <p className="p1">Watch anywhere. Cancel anytime</p>
          <p className="p2">Ready to watch? Enter your email to create or reset your membership.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
