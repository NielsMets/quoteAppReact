import React, { useEffect, useState } from "react";
import QuoteBox from "./components/QuoteBox";
import "./styles/style.css";
import quotes from "./quotes.json";

import { randomListIndex } from "./functions/randomListIndex";
import { randomHSL } from "./functions/randomHSL";

function App() {
  //state
  const [num, setNum] = useState(0);
  const [quote, setQuote] = useState(quotes.quotes[0].quote);
  const [author, setAuthor] = useState(quotes.quotes[0].author);
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    randomQuote();
  }, []);

  //get random quote and color
  const randomQuote = () => {
    setNum(randomListIndex(quotes.quotes, num, setNum));

    setQuote(quotes.quotes[num].quote);
    setAuthor(quotes.quotes[num].author);
    setBgColor(randomHSL(360, 0, 50, 0, 60, 40));
  };

  return (
    <section style={{ backgroundColor: bgColor }}>
      <QuoteBox
        randomQuote={randomQuote}
        quote={quote}
        author={author}
        bgColor={bgColor}
      />
    </section>
  );
}

export default App;
