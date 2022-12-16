import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodos = createAsyncThunk('todos/todosFetched', async () =>{
    const response = await axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')

    return response.data
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
        }
    }
})

const todosReducer = todosSlice.reducer

export const todosSelector = state =>state.todosReducer.allTodos

export default todosReducer