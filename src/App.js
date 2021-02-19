import React, { useEffect, useState } from "react";
import QuoteAndAuthor from "./components/QuoteAndAuthor";
import quotes from "./QuoteDB";
import "./styles/style.css";

function App() {
  //state

  const [num, setNum] = useState(0);
  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    setBgColor(randomHSL(360, 40, 70));
  }, []);

  //get random quote and color
  const randomQuote = () => {
    let num = randomListIndex(quotes);

    setQuote(quotes[num].quote);
    setAuthor(quotes[num].author);
    setBgColor(randomHSL(360, 40, 70));
  };

  //generate random HSL color
  const randomHSL = (h, s, l) => {
    let randomNum = (max) => {
      return Math.floor(Math.random() * max);
    };
    return `hsl(${randomNum(h)},${randomNum(s)}%,${randomNum(l)}%)`;
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
        generateQuote={randomQuote}
        quote={quote}
        author={author}
        bgColor={bgColor}
      />
    </section>
  );
}

export default App;
