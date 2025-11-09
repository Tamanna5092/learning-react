import React from "react";

function Drink({ name }) {
  let caffeine
  let partOfPlant
  let age;
  if (name === "tea") {
    partOfPlant = "leaf";
    caffeine = "15–70 mg/cup";
    age = "4,000+ years";
  } else {
    partOfPlant = "bean";
    caffeine = "80–185 mg/cup";
    age = "1,000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant : {partOfPlant}</dt>
        {/* <dd>{name === "tea" ? "leaf" : "bean"}</dd> */}
        <dt>Caffeine content : {caffeine}</dt>
        {/* <dd>{name === "tea" ? "15–70 mg/cup" : "80–185 mg/cup"}</dd> */}
        <dt>Age : {age}</dt>
        {/* <dd>{name === "tea" ? "4,000+ years" : "1,000+ years"}</dd> */}
      </dl>
    </section>
  );
}

export default function Drinks() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
