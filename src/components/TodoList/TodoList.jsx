import React from 'react'
import "./index.css";
import TodoModal from './TodoModal';

const TodoList = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <input
        className="input"
        id='searchInput'
        type="text"
        placeholder="Search ..."
      />
      <TodoModal title="Go home"/>
      <TodoModal title="Coding"/>
      <TodoModal title="Buy coin"/>
    </div>
  )
}

export default TodoList