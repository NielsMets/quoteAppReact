import React, { useEffect, useState } from "react";
import quotes from "../data/quotes.json";
import Button from "./Button";
import Author from "./Author";
import Quote from "./Quote";
import { randomListIndex } from "../functions/randomListIndex";
import { randomHSL } from "../functions/randomHSL";

export default function (props) {
  const { bgColor, setBgColor } = props;
  const [num, setNum] = useState(0);
  const [quote, setQuote] = useState(quotes.quotes[0].quote);
  const [author, setAuthor] = useState(quotes.quotes[0].author);

  useEffect(() => {
    randomQuote();
  }, []);

  const randomQuote = () => {
    setBgColor(randomHSL(360, 0, 50, 0, 60, 40));
    setNum(randomListIndex(quotes.quotes, num, setNum));
    setQuote(quotes.quotes[num].quote);
    setAuthor(quotes.quotes[num].author);
  };

  return (
    <div className="quoteGenerator" style={{ color: bgColor }}>
      <Quote quote={quote} />
      <Author author={author} bgColor={bgColor} />
      <Button randomQuote={randomQuote} bgColor={bgColor} />
    </div>
  );
}
