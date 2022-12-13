export const markComplete = id => dispatch =>{
    console.log(id)
    dispatch({
        type: 'MARK_COMPLETE',
        payload: id
    })
}