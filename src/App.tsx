import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

  const handleButton1 = () => {
    axios.get("http://localhost:8000/button1/").then((response: any) => {
      const { data } = response;
      const { message } = data;
      setFirst(message);
    });
  };
  const handleButton2 = () => {
    axios.get("http://localhost:8000/button2/").then((response: any) => {
      const { data } = response;
      const { message } = data;
      setSecond(message);
    });
  };

  return (
    <div className="App">
      <h1>Hello, Roulettech!</h1>
      <div>
        <button onClick={handleButton1}>Button 1</button>
        <div>{first}</div>
      </div>
      <button onClick={handleButton2}>Button 2</button>
      <div>{second}</div>
    </div>
  );
}

export default App;
