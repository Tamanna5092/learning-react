import React, { useState } from "react";

export default function Mirror({ messageColor }) {
  const [color, setColor] = useState(messageColor);

  const handleColorChange = () => {
    setColor("#0cac0c");
  };

  return (
    <div>
      <div>
        <h1 style={{ color }}>This is a Mirror Component</h1>
      </div>
      <button onClick={handleColorChange}>Change Color From Child</button>
    </div>
  );
}
