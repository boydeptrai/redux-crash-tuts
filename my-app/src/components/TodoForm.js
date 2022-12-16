import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos } from '../store/reducers/todoSlice';

const TodoForm = () => {
    const [title,setTitle] = useState('');
    const dispatch = useDispatch()

    const changeTitle = event =>{
        setTitle(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();
        
        dispatch(addTodos(title));
        setTitle('');
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" value={title} onChange={changeTitle} />
            <input type="submit" value='Add'  />
        </form>
    </div>
  )
}

export default TodoForm