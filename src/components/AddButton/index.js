import React from "react";
import "./style.css";

import { FaPlusCircle } from "react-icons/fa";

export default function Component({ color, onClick }) {
  return (
    <div className={`add-button-${color}`} onClick={onClick}>
      <FaPlusCircle />
    </div>
  );
}
