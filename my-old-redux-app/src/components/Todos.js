import React, { useEffect } from "react";
import  PropTypes  from "prop-types";
import {connect} from 'react-redux';
import { markComplete,getTodos } from "../store/actions/todoActions";
import TodoForm from "./TodoForm";

const Todos = ({todos,markComplete,getTodos}) => {

useEffect(() =>{
  getTodos()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  return (
    <div className="todo-list">
    <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>{todo.title}
          <input type="checkbox" onChange={markComplete.bind(this,todo.id)}/>
          <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.propTypes = {
   todos: PropTypes.array.isRequired,
   markComplete: PropTypes.func.isRequired,
   getTodos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.myTodos.todos
})
export default connect(mapStateToProps,{markComplete,getTodos})(Todos);
