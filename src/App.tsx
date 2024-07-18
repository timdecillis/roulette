import { useState } from "react";
import "./App.css";
const { handleNumberRequest, handleColorRequest } = require("./utils/requests");

function App() {
  const [randomNumber, setRandomNumber] = useState<null | number>(null);
  const [color, setColor] = useState<string>("black");

  const handleNumberButton = async () => {
    try {
      const newNumber = await handleNumberRequest();
      setRandomNumber(newNumber);
    } catch (error) {
      console.error(
        `The following error occurred while generating a number: ${error}`
      );
    }
  };
  const handleColorButton = async () => {
    try {
      const newColor = await handleColorRequest(color);
      setColor(newColor);
    } catch (error) {
      console.error(
        `The following error occurred while generating a color: ${error}`
      );
    }
  };

  return (
    <div className="App">
      <h1>Hello, Roulettech!</h1>
      <div>
        <h3>Click below to show a random number here *{randomNumber}*</h3>
        <button onClick={handleNumberButton}>Show Number</button>
      </div>
      <h3 style={{ color: color }}>Click below to change this text color</h3>
      <button onClick={handleColorButton}>Change Color</button>
    </div>
  );
}

export default App;
