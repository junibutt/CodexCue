import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const savedCounter = localStorage.getItem("counter");
  const [counter, changeCounter] = useState(
    savedCounter ? JSON.parse(savedCounter) : 0
  );

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  function plus() {
    changeCounter(counter + 1);
  }

  function minus() {
    changeCounter(counter - 1);
  }

  function reset() {
    changeCounter(0);
  }

  return (
    <div className="main">
      <p>Counter Value is {counter}</p>
      <div className="button-container">
        <button onClick={plus} className="btn">
          INCREMENT
        </button>
        <button onClick={reset} className="btn">
          RESET
        </button>
        <button onClick={minus} className="btn">
          DECREMENT
        </button>
      </div>
    </div>
  );
}

export default App;
