import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState('black');

  const handleButton1 = () => {
    axios.get("http://localhost:8000/button1/").then((response: any) => {
      const { data } = response;
      setFirst(data);
    });
  };
  const handleButton2 = () => {
    axios.get("http://localhost:8000/button2/").then((response: any) => {
      const { data } = response;
      setSecond(data);
    });
  };

  return (
    <div className="App">
      <h1>Hello, Roulettech!</h1>
      <div>
        <h3>Click below to add a random number here! *{first}*</h3>
        <button onClick={handleButton1}>Button 1</button>
      </div>
      <h3 style={{color: second}} >Click below to change this text color</h3>
      <button onClick={handleButton2}>Button 2</button>
    </div>
  );
}

export default App;
