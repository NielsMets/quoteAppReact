export default function (props) {
  const { bgColor, author } = props;
  return (
    <div className="author">
      <div className="line" style={{ backgroundColor: bgColor }}></div>
      <p>{author}</p>
    </div>
  );
}
