import { useState } from "react";
import "./App.css";
import axios from "axios";
const { handleNumberRequest, handleColorRequest } = require("./utils/requests");

function App() {
  const [randomNumber, setRandomNumber] = useState<null | number>(null);
  const [color, setColor] = useState("black");

  const handleButton1 = () => {
    handleNumberRequest()
    .then((data:number) => setRandomNumber(data))
  };
  const handleButton2 = () => {
    handleColorRequest(color)
    .then((data: string) => setColor(data))
  };

  return (
    <div className="App">
      <h1>Hello, Roulettech!</h1>
      <div>
        <h3>Click below to add a random number here! *{randomNumber}*</h3>
        <button onClick={handleButton1}>Button 1</button>
      </div>
      <h3 style={{ color: color }}>Click below to change this text color</h3>
      <button onClick={handleButton2}>Button 2</button>
    </div>
  );
}

export default App;
