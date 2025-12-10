import React, { useState } from "react";
import Counter from "./Counter";

export default function ScoreBoard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />}
      {/* {isPlayerA ? (
        <Counter key={"Taylor"} person="Taylor" />
      ) : (
        <Counter key={"Sarah"} person="Sarah" />
      )} */}
      {/* {isPlayerA && <Counter person="Taylor"></Counter>}
      {!isPlayerA && <Counter person="Sarah"></Counter>} */}

      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next player!
      </button>
    </div>
  );
}
