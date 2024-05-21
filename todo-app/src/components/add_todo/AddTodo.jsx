import React from 'react'
import './AddTodo.scss'

export default function AddTodo() {
  return (
    <div className='addTodo'>
      <input className='addTodo__input' type='text' placeholder='Add a todo' />
      <button className='addTodo__button'>+</button>
    </div>
  )
}
