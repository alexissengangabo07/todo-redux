export const todoReducer = (state = ['task one', 'task two'], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'REMOVE_TODO':
            return action.payload;
        default:
            return state;
            break;
    }
}