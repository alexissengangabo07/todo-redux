import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Todo</h1>
      <form action="">
        <input type="text" placeholder='Add task' />
        <div className="submit">
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  )
}

export default App
