import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, getTodos, markComplete, todosSelector } from '../store/reducers/todoSlice';
import TodoForm from './TodoForm';

const Todos = () => {
  const todos = useSelector(todosSelector)
  const dispatch = useDispatch();

  const toggleTodoCompleted = todoId =>{
    dispatch(markComplete(todoId))
  }

  const toggleTodoDelete = todoId => {
    dispatch(deleteTodo(todoId))
  }

  useEffect(() =>{
    dispatch(getTodos())
  },[dispatch])
  return (
    <div className='todo-list'>
      <TodoForm />
       <ul>
          {todos.map(todo =>(
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>{todo.title}
             <input type="checkbox" onChange={toggleTodoCompleted.bind(this,todo.id)} checked={todo.completed}/>
             <button onClick={toggleTodoDelete.bind(this,todo.id)}>Delete</button>
            </li>
            ))}
       </ul>
    </div>
  )
}

export default Todos