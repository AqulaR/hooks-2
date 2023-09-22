import React, { useEffect, useReducer, useState } from 'react'
import TodoList from './TodoList'
import { Context } from './context'
import reducer from './reducer'

export default function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))
  // const [todos, setTodos] = useState([
  //   { id: 1, title: 'First todo', completed: false },
  //   { id: 2, title: 'Second todo', completed: true },
  // ])

  const [todoTitle, setTodoTitle] = useState('Todo name');
  const handleClick = () => console.log('click');

  // useEffect(() => {
  //   let raw =  || [];
  //   setTodos(JSON.parse(raw));
  // }, [])

  useEffect(() => {
    document.addEventListener('click', handleClick)
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state]);

  const addTodo = (event) => {
    if (event.key === 'Enter' && event.target.value.match(/[^$]\S/)) {
      dispatch({
        type: 'addTodo',
        payload: event
      })
    }
  }

  // const delTodo = (id) => {
  //   setTodos(todos.filter(todos => todos.id !== id));
  // }

  // const toggleTodo = (id) => {
  //   setTodos(todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed
  //     }
  //     return todo
  //   }))
  // }

  return (
    <Context.Provider value={{
      // toggleTodo, delTodo
    }}>
      <div className="container">
        <h1>Todo app</h1>

        <div className="input-field">
          <input type="text" onChange={(event) => setTodoTitle(event.target.value)} value={todoTitle} onKeyDown={addTodo} />
          <label>Todo name</label>
        </div>

        <TodoList todos={state} delTodo={delTodo} />
      </div>
    </Context.Provider>
  );
}