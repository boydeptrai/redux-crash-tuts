import React from "react";
import  PropTypes  from "prop-types";
import {connect} from 'react-redux'
import { TodoForm } from "./TodoForm";
import { markComplete } from "../store/actions/todoActions";

const Todos = ({todos,markComplete}) => {
  
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
   markComplete: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.myTodos.todos
})
export default connect(mapStateToProps,{markComplete})(Todos);
