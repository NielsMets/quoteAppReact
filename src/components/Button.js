export default ({ randomQuote, bgColor }) => {
  return (
    <button onClick={() => randomQuote()} style={{ backgroundColor: bgColor }}>
      new quote
    </button>
  );
};
