import React from "react";
import "./style.css";
import { FaTimes } from "react-icons/fa";

export default function Component({
  provided,
  snapshot,
  value,
  removeItem,
  item,
  openModal,
}) {
  return (
    <div
      className="card"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      onClick={openModal}
    >
      <div
        className="remove"
        onClick={(event) => {
          event.stopPropagation();
          removeItem(item);
        }}
      >
        <FaTimes color="#C9C9C9" size="15" />
      </div>
      {value}
    </div>
  );
}
