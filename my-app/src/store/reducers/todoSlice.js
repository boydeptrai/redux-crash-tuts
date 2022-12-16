import {createSlice} from '@reduxjs/toolkit'
const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: [
            {
                id: 1,
                title: 'viec 1',
                completed: false
            },
            {
                id: 2,
                title: 'viec 2',
                completed: false
            },
            {
                id: 3,
                title: 'viec 3',
                completed: false
            },
        ]
    }
})

const todosReducer = todosSlice.reducer

export const todosSelector = state =>state.todosReducer.allTodos

export default todosReducer