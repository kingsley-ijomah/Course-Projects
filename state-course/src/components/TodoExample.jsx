import React, { useState } from 'react';

export default function TodoExample() {
  const todoItems = [
    {
      id: 1,
      title: 'learn react',
      completed: false,
    },
    {
      id: 2,
      title: 'learn redux',
      completed: false,
    },
    {
      id: 3,
      title: 'learn react-redux',
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(todoItems);

  const handleCheckboxChange = (todoId) => {
    // find the todo item with the matching id
    // toggle the completed state the todo item and return it
    const newTodos = todos.map((todo) => {
      // find the todo item with the matching id
      if(todo.id === todoId) {
        // edit the todo item and return it
        return { ...todo, completed: !todo.completed };
      }
      // return the todo item edit
      return todo;
    });
    // update the todos state
    setTodos(newTodos);
  };

  // console.log('todo:', todos);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed}
              onChange={()=>handleCheckboxChange(todo.id)}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
