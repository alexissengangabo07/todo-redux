import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskAction } from '../../actions/todo.action';

const Tasks = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todoReducer);
    const deleteTask = (id) => {
        dispatch(deleteTaskAction(id));
    }

    return (
        <div className='tasks-container'>
            <ul className='list-items'>
                {
                    todos?.map((todo, index) => (
                        <li key={index}>
                            <div>
                                <span>{todo.task}</span>
                            </div>
                            <div className='actions'>
                                <input type="checkbox" name="done" id="done" />
                                <button onClick={() => deleteTask(todo.id)}>X</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Tasks