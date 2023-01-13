import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoAction, deleteTaskAction } from './actions/todo.action';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todoReducer);

  const addTask = () => {
    if (input.trim() !== '') {
      dispatch(addTodoAction({ id: new Date().getTime(), task: input }));
      setInput('');
    }
  }

  const deleteTask = (id) => {
    dispatch(deleteTaskAction(id));
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <form action="" onSubmit={e => { e.preventDefault(); addTask() }}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Add Task' />
        <div className="submit">
          <input type="submit" value="Add" />
        </div>
      </form>
      <div>
        <ul>
          {
            todos?.map((todo, index) => (
              <li key={index}>
                <span>{todo.task}</span>
                <button onClick={() => deleteTask(todo.id)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
