import { useState } from "react";
import "./App.css";
const { handleNumberRequest, handleColorRequest } = require("./utils/requests");

function App() {
  const [randomNumber, setRandomNumber] = useState<null | number>(null);
  const [color, setColor] = useState("black");

  const handleButton1 = async () => {
    const newNumber = await handleNumberRequest();
    setRandomNumber(newNumber);
  };
  const handleButton2 = async () => {
    const newColor = await handleColorRequest(color);
    setColor(newColor);
  };

  return (
    <div className="App">
      <h1>Hello, Roulettech!</h1>
      <div>
        <h3>Click below to show a random number here *{randomNumber}*</h3>
        <button onClick={handleButton1}>Show Number</button>
      </div>
      <h3 style={{ color: color }}>Click below to change this text color</h3>
      <button onClick={handleButton2}>Change Color</button>
    </div>
  );
}

export default App;
