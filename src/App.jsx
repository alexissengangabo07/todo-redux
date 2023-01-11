import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoAction } from './actions/todo.action';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todoReducer);

  const addTask = () => {
    if (input.trim() !== '') {
      dispatch(todoAction(input));
      setInput('');
    }
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
            todos?.map((task, index) => (
              <li key={index}>
                <span>{task}</span>
                <button>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
