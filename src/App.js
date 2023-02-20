import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <div className="newTask">
        <NewTask />
      </div>

      <div className="todoList">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
