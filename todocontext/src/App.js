import './App.css';
import Header from './Components/Header';
import InputTodo from './Components/InputTodo';
import TodosList from './Components/TodosList';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <InputTodo />
        <div>
          <TodosList />
        </div>
      </div>
    </div>
  );
}

export default App;
