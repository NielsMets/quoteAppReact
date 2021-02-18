import React, { useEffect, Component } from "react";
import QuoteAndAuthor from "./components/QuoteAndAuthor";
import quotes from "./QuoteDB";
import "./styles/style.css";

export default class App extends Component {
  //state
  state = {
    num: 0,
    quote: quotes[0].quote,
    author: quotes[0].author,
    backgroundColor: "blue",
  };

  //get random quote and color
  generateQuote = () => {
    let num = this.randomListIndex(quotes);

    this.setState({
      quote: quotes[num].quote,
      author: quotes[num].author,
      backgroundColor: this.randomHSL(360, 40, 70),
    });
  };

  //generate random HSL color
  randomHSL = (h, s, l) => {
    let randomNum = (max) => {
      return Math.floor(Math.random() * max);
    };
    return `hsl(${randomNum(h)},${randomNum(s)}%,${randomNum(l)}%)`;
  };

  //generate random list index number
  randomListIndex = (list) => {
    //generate number
    let num = Math.floor(Math.random() * list.length);
    //make sure number is different
    if (num == this.state.num) {
      return this.randomListIndex(list);
    } else {
      this.setState({
        num: num,
      });
    }
    return num;
  };

  render() {
    return (
      <section style={{ backgroundColor: this.state.backgroundColor }}>
        <QuoteAndAuthor generateQuote={this.generateQuote} quote={this.state} />
      </section>
    );
  }
}
