import { useState } from 'react';

function Todo() {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    setTodos([...todos, item]);
    setItem('');
  }

  const handlechange = (e) => {
    setItem(e.target.value);
  }


  return (
    <>
      <ul>
        {todos.map((todo)=>(
          <li>{todo}</li>
        ))}
      </ul>

      <input type="text" value={item} onChange={handlechange} placeholder="todo" />
      <button onClick={handleClick} type="submit"> Submit</button>
    </>
  );
}

export default Todo;