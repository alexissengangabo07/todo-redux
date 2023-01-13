export const todoReducer = (state = [{ id: 1, task: 'task one' }, { id: 2, task: 'task two' }], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'REMOVE_TODO':
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
            break;
    }
}