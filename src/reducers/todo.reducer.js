const initialState = [
    { id: 1, task: 'task one', done: false },
    { id: 2, task: 'task two', done: true }
]

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'REMOVE_TODO':
            return state.filter(task => task.id !== action.payload);
        case 'UPDATE_STATUS':
            let updatedStatus = state.map(item => {
                if (item.id === action.payload) {
                    item.done ? item.done = false : item.done = true;
                }
                return item;
            });
            return updatedStatus;
        default:
            return state;
            break;
    }
}