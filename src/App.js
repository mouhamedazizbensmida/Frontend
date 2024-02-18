import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/hello/Hello";
import TaskPage from "./Pages/TaskPages/TaskPage";

function App() {
  return (
    <div className="App">
      <Hello />
      <TaskPage />
    </div>
  );
}

export default App;

{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
