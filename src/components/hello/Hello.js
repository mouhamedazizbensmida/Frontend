import "./Hello.css";
function Hello() {
  const world = "world";
  function hi() {
    return <div>Hi</div>;
  }
  return (
    <div className="hello">
      <p>hello {world}</p>
      {hi()}
    </div>
  );
}
export default Hello;
