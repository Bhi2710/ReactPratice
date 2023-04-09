import React, {useContext, useState, useEffect} from 'react';
import { TodoContext } from './DataProvider';


const InputTodo = () => {

  const { addTodo,editItem, editTodo } = useContext(TodoContext); 

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editItem === null){
      addTodo(title);
      setTitle("");
    }else{
        editTodo(title, editItem.id)
    }
  }

  useEffect(()=>{
    if(editItem !== null){
        setTitle(editItem.title)
        console.log(editItem);
    }else{
        setTitle("")
    }
  },[editItem]);


  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleChange} 
        value={title}
        type='text'
        className='todo-input'
        placeholder='Add todo...'
        required
      /> 
      <button className='btn-add'>
        <i className='fas fa-add'></i>
      </button>
    </form>
  )
}

export default InputTodo