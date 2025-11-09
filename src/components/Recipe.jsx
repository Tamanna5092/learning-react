import React from "react";

export default function Recipe({ name, ingredients }) {
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {ingredients.map((indgredient) => (
          <li key={indgredient}>{indgredient}</li>
        ))}
      </ul>
    </div>
  );
}
