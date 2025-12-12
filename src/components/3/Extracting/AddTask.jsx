import React, { useState } from "react";

export default function AddTask({ onAdd }) {
  const [Text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input placeholder="Add task" value={Text} onChange={handleChangeText} />
      <button
        onClick={() => {
          setText("");
          onAdd(Text);
        }}
      >
        Add
      </button>
    </>
  );
}
