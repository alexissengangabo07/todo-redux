export const todoAction = (input) => (dispatch) => {
    dispatch({
        type: 'ADD_TODO',
        payload: input
    })
}