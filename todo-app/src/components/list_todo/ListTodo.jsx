import React from 'react'
import './ListTodo.scss'

export default function ListTodo() {
  return (
    <div className='listTodo'>
      <div className='listTodo__row'>
        <div className='listTodo__item'>Buy New Laptop</div>
        <div className='listTodo__delete'>Del</div>
      </div>

      <div className='listTodo__row'>
        <div className='listTodo__item'>Make Codehance Course</div>
        <div className='listTodo__delete'>Del</div>
      </div>

      <div className='listTodo__row'>
        <div className='listTodo__item'>Complete Today's Task</div>
        <div className='listTodo__delete'>Del</div>
      </div>
    </div>
  )
}
