import React, { useState } from "react";
import "./index.css";
import { addNewDoc } from "../../firebase/services";

const NewTask = () => {
  const newDate = new Date();
  const newDateForat = `${newDate.getFullYear()}-${
    newDate.getMonth() + 1 > 12
      ? newDate.getMonth() + 1
      : `0${newDate.getMonth() + 1}`
  }-${newDate.getDate()}`;

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDes, setTaskDes] = useState("");
  const [date, setDate] = useState(newDateForat);
  const [priority, setPriority] = useState("Normal");

  const addDoc = function (e) {
    addNewDoc(e, taskTitle, taskDes, date, priority);
    setTaskTitle("");
    setTaskDes("");
    setDate(newDateForat);
    setPriority("Normal");
  };

  return (
    <div>
      <h1>New Task</h1>

      <input
        className="input"
        id="newTaskInput"
        type="text"
        required
        placeholder="Add new task ..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <div className="description">
        <h2>Description</h2>
        <textarea
          className="desInput"
          value={taskDes}
          onChange={(e) => setTaskDes(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div className="props">
        <div className="dueDate">
          <h2>Due Date</h2>
          <input
            className="date"
            type="date"
            min={newDateForat}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="priority">
          <h2>Priority</h2>
          <select
            className="prio"
            id="prio"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value={priority} selected>
              Normal
            </option>
            <option value="High">High</option>
          </select>
        </div>
      </div>

      <button className="addBtn" onClick={(e) => addDoc(e)}>
        Add
      </button>
    </div>
  );
};

export default NewTask;
