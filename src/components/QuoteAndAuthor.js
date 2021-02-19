import React from "react";

export default function QuoteAndAuthor(props) {
  const { quote: quote, author, generateQuote, bgColor } = props;
  return (
    <div className="quoteGenerator" style={{ color: bgColor }}>
      <h2>{quote}</h2>
      <div className="author">
        <div className="line" style={{ backgroundColor: bgColor }}></div>
        <p>{author}</p>
      </div>

      <button
        onClick={() => generateQuote()}
        style={{ backgroundColor: bgColor }}
      >
        new quote
      </button>
    </div>
  );
}
