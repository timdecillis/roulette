import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [color, setColor] = useState('black');

  const handleButton1 = () => {
    axios.get("http://localhost:8000/button1/").then((response: any) => {
      const { data } = response;
      setRandomNumber(data);
    });
  };
  const handleButton2 = () => {
    axios.post("http://localhost:8000/button2/", {currentColor: color}).then((response: any) => {
      const { data } = response;
      setColor(data);
    });
  };

  return (
    <div className="App">
      <h1>Hello, Roulettech!</h1>
      <div>
        <h3>Click below to add a random number here! *{randomNumber}*</h3>
        <button onClick={handleButton1}>Button 1</button>
      </div>
      <h3 style={{color: color}} >Click below to change this text color</h3>
      <button onClick={handleButton2}>Button 2</button>
    </div>
  );
}

export default App;
