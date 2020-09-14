import React, { useState } from "react";
import "./style.css";

import AddButton from "../AddButton";
import ItemForm from "../ItemForm";

export default function Component({ color, addItem }) {
  const [status, setStatus] = useState(["display", "hide"]);

  const changeView = () => {
    const copy = status.map((item) => item);
    setStatus(copy.reverse());
  };

  return (
    <>
      <div className={status[0]}>
        <AddButton
          color={color}
          onClick={() => {
            changeView();
          }}
        />
      </div>
      <div className={status[1]}>
        <ItemForm
          addItem={addItem}
          close={() => {
            changeView();
          }}
        />
      </div>
    </>
  );
}
