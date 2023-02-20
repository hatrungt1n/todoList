import React, { useState } from "react";
import "./index.css";

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

  return (
    <div>
      <h1>New Task</h1>

      <input
        className="input"
        id="newTaskInput"
        type="text"
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
          <select className="prio" id="prio" onChange={e => console.log(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Normal" selected>
              Normal
            </option>
            <option value="High">High</option>
          </select>
        </div>
      </div>

      <button className="addBtn">Add</button>
    </div>
  );
};

export default NewTask;
