import React from "react";

const TodoModal = ({title}) => {
  return (
    <div className="form">
      <div className="title">{title}</div>

      <div className="btn">
        <button className="detailBtn">Detail</button>
        <button className="removeBtn">Remove</button>
      </div>
    </div>
  );
};

export default TodoModal;
