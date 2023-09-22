import React, { useState, useContext, useReducer } from 'react'
import {Context} from './context'

export default function TodoItem({ todo}) {
  // const [checked, setChecked] = useState(todo.completed)
  const {toggleTodo, delTodo} = useContext(Context)
  const cls = ['todo'];

  if (todo.completed) {
    cls.push('completed')
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.title}</span>
        <button onClick={() => delTodo(todo.id)}>
          <i className="material-icons red-text">
            delete
          </i>
        </button>
      </label>
    </li>
  )
}