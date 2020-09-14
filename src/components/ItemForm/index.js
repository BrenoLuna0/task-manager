import React, { useState } from "react";
import "./style.css";
import uniqid from "uniqid";

import Button from "../Button";

export default function Component({ addItem, close }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="item-form">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="form-title"
        placeholder="Título"
      />
      <textarea
        className="form-description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Descrição"
      />
      <input
        type="text"
        className="form-date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        placeholder="Data"
      />
      <div className="row">
        <div className="cancel">
          <Button
            cancel
            text="Descartar"
            onClickCancel={() => {
              setDescription("");
              setDate("");
              close();
            }}
          />
        </div>
        <div className="confirm">
          <Button
            text="Confirmar"
            onClickConfirm={() => {
              addItem({
                id: uniqid(),
                title,
                description,
                date,
              });
              setTitle("");
              setDescription("");
              setDate("");
              close();
            }}
          />
        </div>
      </div>
    </div>
  );
}
