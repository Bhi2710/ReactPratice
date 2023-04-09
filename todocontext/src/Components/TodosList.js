import React, { useContext } from 'react'
import { TodoContext } from './DataProvider';
import TodoItem from './TodoItem';

const TodosList = () => {

  const {todos} = useContext(TodoContext)  
  console.log(todos);
  return (
    <div>
      {todos.map((todo)=>{
        return(
          <TodoItem todo={todo} key={todo.id}/>
        )
      })}
    </div>
  )
}

export default TodosList;