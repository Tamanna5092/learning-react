import React from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
    "And so are you",
    "Distilling clarity",
  ],
};

export default function Poem() {
  let output = [];
  poem.lines.forEach((line, i) => {
    output.push(<hr key={i + "-separator"} />);
    output.push(<p key={i + "-text"}>{line}</p>);
  });
  output.shift();

  return (
    <div>
      <article>
        {/* {poem.lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))} */}
        {output}
      </article>
    </div>
  );
}
