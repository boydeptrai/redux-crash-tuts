const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        todos: action.payload
      }
    case "MARK_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) todo.completed = !todo.completed;
          return todo;
        }),
      };
    
    case "ADD_TODO":
        return {
            ...state,
            todos: [...state.todos, action.payload]
        }
    default:
      return state;
  }
};

export default todoReducer;
