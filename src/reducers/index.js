import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';

const reducers = combineReducers({
    todoReducer
});

export default reducers;