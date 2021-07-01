import React, { useEffect, useState } from "react";
import "./styles/style.css";
import QuoteBox from "./components/QuoteBox";
import { randomHSL } from "./functions/randomHSL";

const App = () => {
  //state
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    setBgColor(randomHSL(360, 0, 50, 0, 60, 40));
  }, []);

  return (
    <section style={{ backgroundColor: bgColor }}>
      <QuoteBox bgColor={bgColor} setBgColor={setBgColor} />
    </section>
  );
};

export default App;
