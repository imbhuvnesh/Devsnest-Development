import { useState } from "react";
import "./App.css";

import Counter from "./Counter";

function App() {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(0);
  const [num3, setnum3] = useState(0);
  const [num4, setnum4] = useState(0);

  return (
    <div className="App">
      <Counter counter={num} setCounter={setnum}></Counter>
      <Counter counter={num2} setCounter={setnum2}></Counter>
      <Counter counter={num3} setCounter={setnum3}></Counter>
      <Counter counter={num4} setCounter={setnum4}></Counter>
    </div>
  );
}

export default App;
