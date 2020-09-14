import React from "react";
import "./style.css";

export default function Component({ title, color }) {
  return <div className={`title-${color}`}>{title}</div>;
}
