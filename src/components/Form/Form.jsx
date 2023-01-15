import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../actions/todo.action';

const Form = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (input.trim() !== '') {
      dispatch(addTodoAction({ id: new Date().getTime(), task: input, done: false }));
      setInput('');
    }
  }

  return (
    <div className="form-container">
      <form action="" onSubmit={e => { e.preventDefault(); addTask() }}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Add Task' />
        <div className="submit">
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  )
}

export default Form