import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState(null);

  const addTask = () => {
    const tasksTemp = [...tasks, input];
    setTasks(tasksTemp);
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <form action="" onSubmit={e => { e.preventDefault(); addTask() }}>
        <input type="text" onChange={e => setInput(e.target.value)} placeholder='Add task' />
        <div className="submit">
          <input type="submit" value="Add" />
        </div>
      </form>
      <div>
        <ul>
          {
            ...tasks?.map((task, index) => (
              <li key={index}>{task}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
