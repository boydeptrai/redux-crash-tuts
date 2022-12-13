import axios from 'axios';

export const getTodos = () => async dispatch =>{
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
        dispatch({
            type: 'GET_TODOS',
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const markComplete = id => dispatch =>{
    console.log(id)
    dispatch({
        type: 'MARK_COMPLETE',
        payload: id
    })
}

export const addTodo = newTodo => async dispatch => {
    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos',newTodo)
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        })
    } catch (error) {
        console.log(error)
    }
}