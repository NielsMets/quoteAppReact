import React, { useEffect, useState } from "react";
import QuoteAndAuthor from "./components/QuoteAndAuthor";
import "./styles/style.css";
import quotes from "./quotes.json";

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
    let num = randomListIndex(quotes.quotes);

    setQuote(quotes.quotes[num].quote);
    setAuthor(quotes.quotes[num].author);
    setBgColor(randomHSL(360, 0, 50, 0, 60, 40));
  };

  //generate random HSL color
  const randomHSL = (h, hMin, s, sMin, l, lMin) => {
    let randomNum = (max, min) => {
      let num = Math.floor(Math.random() * max);
      if (num < min) {
        num = min;
      }
      return num;
    };
    return `hsl(${randomNum(h, hMin)},${randomNum(s, sMin)}%,${randomNum(
      l,
      lMin
    )}%)`;
  };

  //generate random list index number
  const randomListIndex = (list) => {
    //generate number
    let i = Math.floor(Math.random() * list.length);
    //make sure number is different
    if (i == num) {
      return randomListIndex(list);
    } else {
      setNum(i);
    }
    return i;
  };

  return (
    <section style={{ backgroundColor: bgColor }}>
      <QuoteAndAuthor
        randomQuote={randomQuote}
        quote={quote}
        author={author}
        bgColor={bgColor}
      />
    </section>
  );
}

export default App;
