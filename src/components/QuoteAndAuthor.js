import React from "react";

export default function QuoteAndAuthor(props) {
  const { quote, generateQuote } = props;
  return (
    <div className="quoteGenerator" style={{ color: quote.backgroundColor }}>
      <h2>{quote.quote}</h2>
      <div className="author">
        <div
          className="line"
          style={{ backgroundColor: quote.backgroundColor }}
        ></div>
        <p>{quote.author}</p>
      </div>

      <button
        onClick={() => generateQuote()}
        style={{ backgroundColor: quote.backgroundColor }}
      >
        new quote
      </button>
    </div>
  );
}
