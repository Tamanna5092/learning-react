import React from 'react'

// Pure Component
function Greetng({ name }) {
  return <h1>Hello {name}</h1>;
}

// Impure Component
let count = 0;

function Counter() {
  count++;
  return <p>Count {count} time</p>;
}


export default function Pure() {
  return <h1>Hello </h1>;
}
