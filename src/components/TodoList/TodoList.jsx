import React, { useEffect, useState } from "react";
import "./index.css";
import TodoModal from "./TodoModal";
import { fetchPost } from "../../firebase/services";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // eslint-disable-next-line 
  const getTodo = async () => {
    setTodos(await fetchPost());
  };
  
  useEffect(() => {
    getTodo();
  }, [getTodo]);

  return (
    <div>
      <h1>Todo List</h1>
      <input
        className="input"
        id="searchInput"
        type="text"
        placeholder="Search ..."
      />
      {todos
        ? todos.map((todo, id) => {
            return (
              <div key={id}>
                <TodoModal
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  date={todo.date}
                  priority={todo.priority}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default TodoList;
