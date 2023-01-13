export const addTodoAction = (input) => (dispatch, getState) => {
    dispatch({
        type: 'ADD_TODO',
        payload: input
    })
}

export const deleteTaskAction = (id) => (dispatch, getState) => {
   dispatch({
    type: 'REMOVE_TODO',
    payload: id
   }) 
}
