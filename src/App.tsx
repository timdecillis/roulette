import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [firstPushed, setFirstPushed] = useState(false);
  const [secondPushed, setSecondPushed] = useState(false);
  return (
    <div className="App">
      <h1>Hello, Roulettech!</h1>
      <div>
        <button>Push Me!</button>
      </div>
      <button>Push Me!</button>
    </div>
  );
}

export default App;
