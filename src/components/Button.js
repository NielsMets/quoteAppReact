import React from "react";

export default function (props) {
  const { randomQuote, bgColor } = props;
  return (
    <button onClick={() => randomQuote()} style={{ backgroundColor: bgColor }}>
      new quote
    </button>
  );
}
