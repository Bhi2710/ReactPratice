import React, { useContext } from 'react';
import { TodoContext } from './DataProvider';

const TodoItem = ({todo}) => {
  const { deleteTodo, findTodo } = useContext(TodoContext);  
  return (
    <div className='TodoItem-container'>
      <div>
        <input type='checkbox' />&emsp;
        <span>{todo.title}</span>
      </div>
      <div>
        <button onClick={() => findTodo(todo.id)} className='btn-edit task-btn'>
          <i className='fas fa-pen'></i>
        </button>&emsp;
        <button onClick={()=> deleteTodo(todo.id)} className='btn-delete task-btn'>
          <i className='fas fa-trash-alt'></i>
        </button>
      </div>
    </div>
  )
}

export default TodoItem;