import React from "react";
import "./style.css";
import { FaTimes } from "react-icons/fa";

export default function Component({
  color,
  visible,
  title,
  description,
  date,
  closeModal,
}) {
  return (
    <div className={`pop-up-${visible}`}>
      <div className="black-background"></div>
      <div className={`card-detail-${color}`}>
        <div className="pop-up-close" onClick={closeModal}>
          <FaTimes color="#989898" size="24" />
        </div>
        <div className="pop-up-title">{title}</div>
        <div className="pop-up-description">{description}</div>
        <div className="pop-up-date">{date}</div>
      </div>
    </div>
  );
}
