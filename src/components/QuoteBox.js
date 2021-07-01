import React from "react";
import Button from "./Button";
import Author from "./Author";
import Quote from "./Quote";

export default function (props) {
  const { quote, author, randomQuote, bgColor } = props;
  return (
    <div className="quoteGenerator" style={{ color: bgColor }}>
      <Quote quote={quote} />
      <Author author={author} bgColor={bgColor} />
      <Button randomQuote={randomQuote} bgColor={bgColor} />
    </div>
  );
}
