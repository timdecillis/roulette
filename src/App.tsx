import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [firstPushed, setFirstPushed] = useState(false);
  const [secondPushed, setSecondPushed] = useState(false);

  const negative = "push me";
  const positive = "unpush me";
  return (
    <div className="App">
      <h1>Hello, Roulettech!</h1>
      <div>
        <button onClick={() => setFirstPushed(!firstPushed)}>
          {firstPushed ? positive : negative}
        </button>
      </div>
      <button onClick={() => setSecondPushed(!secondPushed)}>
        {secondPushed ? positive : negative}
      </button>
    </div>
  );
}

export default App;
