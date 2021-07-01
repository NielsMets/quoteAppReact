export default ({ bgColor, author }) => {
  return (
    <div className="author">
      <div className="line" style={{ backgroundColor: bgColor }}></div>
      <p>{author}</p>
    </div>
  );
};
