import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, todosSelector } from '../store/reducers/todoSlice';
import TodoForm from './TodoForm';

const Todos = () => {
  const todos = useSelector(todosSelector)
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getTodos())
  },[dispatch])
  return (
    <div className='todo-list'>
      <TodoForm />
       <ul>
          {todos.map(todo =>(
            <li key={todo.id}>{todo.title}
             <input type="checkbox" />
             <button>Delete</button>
            </li>
            ))}
       </ul>
    </div>
  )
}

export default Todos