import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [total, setTotal] = React.useState(0);

  async function addNumbers() {
    let n1 = document.getElementById("n1")! as HTMLInputElement;
    let n2 = document.getElementById("n2")! as HTMLInputElement;

    const data = {
      n1: parseFloat(n1.value),
      n2: parseFloat(n2.value),
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("/add", data, config)
      .then(async (res) => {
        setTotal(parseFloat(res.data["total"]));
      })
      .catch((err) => {
        console.error({ err });
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Adding Two Numbers</p>
        <input id="n1" type="number" />
        <input id="n2" type="number" />
        <button onClick={addNumbers}>Add Two Numbers</button>

        <p>Total = {total}</p>
      </header>
    </div>
  );
}

export default App;
