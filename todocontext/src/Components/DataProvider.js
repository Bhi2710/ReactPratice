import React, { createContext, useState } from 'react'
import {v4 as uuid} from 'uuid';

export const TodoContext = createContext();

const DataProvider = ({children}) => {

  const [todos, setTodos] = useState([
    {title:"first item", id:1},
    {title:"second item", id:2},
    {title:"third item", id:3},
    {title:"another item", id:4},
  ]);  

  const[editItem, setEditItem] = useState(null);

  const addTodo = (title) =>{
    setTodos([...todos, {title, id:uuid()}])
  }
  
  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const findTodo = (id) =>{
    const item = todos.find(todo => todo.id === id);
    setEditItem(item);
  }

  const editTodo = (title,id) => {
    const newTodos = todos.map(todo => (todo.id === id ? {title, id} : todo))
    setTodos(newTodos);
  }


  return (
    <TodoContext.Provider value={{todos, addTodo, deleteTodo, findTodo, editTodo, editItem}}>
      {children}
    </TodoContext.Provider>
  )
}

export default DataProvider;