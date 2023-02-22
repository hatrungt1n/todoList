import React, { useEffect, useState } from "react";
import { deleteCurrentDoc, updateCurrentDoc } from "../../firebase/services";

const TodoModal = ({ id, title, description, date, priority }) => {
  const [show, setShow] = useState(false);

  const [newTaskTitle, setNewTaskTitle] = useState(title);
  const [newTaskDes, setNewTaskDes] = useState(description);
  const [newDate, setNewDate] = useState(date);
  const [newPriority, setNewPriority] = useState(priority);

  useEffect(() => {
    setNewTaskTitle(title);
    setNewTaskDes(description);
    setNewDate(date);
    setNewPriority(priority);
  }, [title, description, date, priority]);

  return (
    <div className="formModal">
      <div className="form">
        <input type="checkbox" id={id} onChange={console.log(id)} />
        <label for={id} className="title">{title}</label>

        <div className="btn">
          <button className="detailBtn" onClick={(e) => setShow(!show)}>
            Detail
          </button>
          <button className="removeBtn" onClick={(e) => deleteCurrentDoc(id)}>
            Remove
          </button>
        </div>
      </div>

      <div className={show ? "detailShow" : "detailHide"}>
        <input
          className="input"
          id="newTaskInput"
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />

        <div className="description">
          <h2>Description</h2>
          <textarea
            className="desInput"
            cols="30"
            rows="10"
            value={newTaskDes}
            onChange={(e) => setNewTaskDes(e.target.value)}
          ></textarea>
        </div>

        <div className="props">
          <div className="dueDate">
            <h2>Due Date</h2>
            <input
              className="date"
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
          </div>

          <div className="priority">
            <h2>Priority</h2>
            <select
              className="prio"
              id="prio"
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <button
          id={id}
          className="updateBtn"
          onClick={(e) =>
            updateCurrentDoc(id, newTaskTitle, newTaskDes, newDate, newPriority)
          }
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default TodoModal;
