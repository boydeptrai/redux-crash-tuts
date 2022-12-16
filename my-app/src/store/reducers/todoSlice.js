import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodos = createAsyncThunk('todos/todosFetched', async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')

    return response.data
});

export const addTodos = createAsyncThunk('todos/addAdded', async title =>{
    const newTodos = {
        id: nanoid(),
        title,
        completed: false
    }

    await axios.post('https://jsonplaceholder.typicode.com/todos',newTodos)

    return newTodos
})

export const deleteTodo = createAsyncThunk('todos/todoDelete', async todoId =>{
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)

    return todoId
})
const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: []
    },
    reducers: {
        markComplete(state,action){
          const todoId = action.payload;
          state.allTodos = state.allTodos.map(todo =>{
            if (todo.id === todoId) todo.completed = !todo.completed

            return todo
          })
        }
    },
    extraReducers:{
        [getTodos.pending]: (state,action) =>{
            console.log('Fetching data from backend..')
        },
        [getTodos.fulfilled]: (state,action) =>{
            state.allTodos = action.payload
        },
        [getTodos.rejected]: (state,action) =>{
            console.log('Failed to get todos !!')
        },

        [addTodos.fulfilled]: (state,action) =>{
            state.allTodos.unshift(action.payload)
        },
        [deleteTodo.fulfilled]: (state,action) =>{
            const todoId = action.payload
            state.allTodos = state.allTodos.filter(todo =>todo.id !== todoId)
        }
    }
})

const todosReducer = todosSlice.reducer

export const todosSelector = state =>state.todosReducer.allTodos

export const {markComplete} = todosSlice.actions

export default todosReducer