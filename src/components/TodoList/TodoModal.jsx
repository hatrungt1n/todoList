import React, { useState } from "react";

const TodoModal = ({ title }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="formModal">
      <div className="form">
        <div className="title">{title}</div>

        <div className="btn">
          <button className="detailBtn" onClick={e => setShow(!show)}>Detail</button>
          <button className="removeBtn">Remove</button>
        </div>
      </div>

      <div className={show ? "detailShow" : "detailHide"}>
        <input
          className="input"
          id="newTaskInput"
          type="text"
          placeholder=""
        />

        <div className="description">
          <h2>Description</h2>
          <textarea className="desInput" cols="30" rows="10"></textarea>
        </div>

        <div className="props">
          <div className="dueDate">
            <h2>Due Date</h2>
            <input className="date" type="date" />
          </div>

          <div className="priority">
            <h2>Priority</h2>
            <select className="prio" id="prio">
              <option value="Low">Low</option>
              <option value="Normal" selected>
                Normal
              </option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <button className="updateBtn">Update</button>
      </div>
    </div>
  );
};

export default TodoModal;
