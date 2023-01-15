import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskAction, updateStatusAction } from '../../actions/todo.action';

const Tasks = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todoReducer);
    const deleteTask = (id) => {
        dispatch(deleteTaskAction(id));
    }

    const updateStatus = (id) => {
        dispatch(updateStatusAction(id));
    }

    return (
        <div className='tasks-container'>
            <ul className='list-items'>
                {
                    todos?.map((todo, index) => (
                        <li key={index}>
                            <div>
                                <span className={`${todo.done ? 'task-done' : ''}`}>{todo.task}</span>
                            </div>
                            <div className='actions'>
                                <input type="checkbox" name="done" id="done" onChange={() => updateStatus(todo.id)} checked={todo.done} />
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