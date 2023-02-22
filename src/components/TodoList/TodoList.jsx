import React, { useEffect, useState } from "react";
import "./index.css";
import TodoModal from "./TodoModal";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [state, setstate] = useState({
    query: "",
    list: [],
  });

  const handleChange = (e) => {
    const results = todos.filter((todo) => {
      if (e.target.value === "") return todos.title;
      return todo.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setstate({
      query: e.target.value,
      list: results,
    });
  };

  const fetchPost = () => {
    const q = query(collection(db, "tasks"), orderBy("date", "asc"));
    onSnapshot(q, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="right-cont">
      <div className="mainList">
        <h1>Todo List</h1>
        <input
          className="input"
          id="searchInput"
          type="text"
          placeholder="Search ..."
          onChange={(e) => handleChange(e)}
        />
        <ul>
          {state.query === ""
            ? todos
              ? todos.map((todo) => {
                  return (
                    <div key={todo.id}>
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
              : null
            : state.list.map((todo) => {
                return (
                  <div key={todo.id}>
                    <TodoModal
                      id={todo.id}
                      title={todo.title}
                      description={todo.description}
                      date={todo.date}
                      priority={todo.priority}
                    />
                  </div>
                );
              })}
        </ul>
      </div>

      <div className="bulkAction">
        <div>Bulk action</div>

        <div className="btn">
          <button className="doneBtn">Done</button>
          <button className="removeSelectedBtn">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
