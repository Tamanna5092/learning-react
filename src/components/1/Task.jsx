import React from "react";

const recipe = {
  name: "Pasta Recipe",
  steps: [
    "Boil water in a large pot.",
    "Add pasta and cook for 8–10 minutes.",
    "Drain the water and mix with sauce.",
    "Serve hot with cheese on top.",
    "Enjoy your meal!",
  ],
};

export default function Task() {
  let task1 = [];
  recipe.steps.forEach((step, i) => {
    // task1.push(<span>{"Step" + (i + 1)}</span>);
    task1.push(<li key={i}>{step}</li>);
    task1.push(<hr i={i} />);
  });
  task1.pop()

  return (
    <div>
      <h4n>{recipe.name}</h4n>
      {/* {recipe.steps.map((element, index) => (
        <ul key={index}>
          <span>step {index + 1}</span>
          <hr />
          <li>{element}</li>
        </ul>
      ))} */}
      <ul>{task1}</ul>
    </div>
  );
}
