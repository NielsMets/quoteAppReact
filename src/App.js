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

  generateQuote = () => {
    //get random number
    let num = this.getRandomNum();

    this.setState({
      quote: quotes[num].quote,
      author: quotes[num].author,
      backgroundColor: this.getRandomColor(360, 40, 70),
    });
  };

  //generate random color
  getRandomColor = (h, s, l) => {
    let hue = (h) => {
      return Math.floor(Math.random() * h);
    };

    let saturation = (s) => {
      return Math.floor(Math.random() * s);
    };

    let lightness = (l) => {
      return Math.floor(Math.random() * l);
    };

    let color = `hsl(${hue(h)},${saturation(s)}%,${lightness(l)}%)`;
    return color;
  };

  //generate random number
  getRandomNum = () => {
    //generate number
    let num = Math.floor(Math.random() * quotes.length);
    //make sure number is different
    if (num == this.state.num) {
      return this.getRandomNum();
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
