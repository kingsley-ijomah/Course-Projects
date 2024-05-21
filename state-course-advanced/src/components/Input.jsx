import React from 'react'

export default function Input({ value, onHandleChange }) {
  return (
    <div>
      <input type="text" value={value} onChange={onHandleChange} />
    </div>
  )
}
