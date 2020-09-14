import React from "react";
import "./style.css";

export default function Component({
  cancel,
  text,
  onClickConfirm,
  onClickCancel,
}) {
  return cancel ? (
    <div className="button-cancel" onClick={onClickCancel}>
      {text}
    </div>
  ) : (
    <div className="button-confirm" onClick={onClickConfirm}>
      {text}
    </div>
  );
}
