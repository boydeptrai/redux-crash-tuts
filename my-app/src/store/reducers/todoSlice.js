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
const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: []
    },
    reducers: {},
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
        }
    }
})

const todosReducer = todosSlice.reducer

export const todosSelector = state =>state.todosReducer.allTodos

export default todosReducer