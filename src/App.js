import React from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = React.useState(0);

  const subtract = () => {
    setCounter(counter - 1);
  };
  // function subtract() {
  //   setCounter(counter - 1);
  // }
  function add() {
    setCounter(counter + 5);
  }

  // document.getElementById("btn").addEventListener("click",function(){

  // })

  return (
    <div className="App">
      <div className="counter-container">
        <button className="btn" onClick={subtract}>
          -
        </button>
        <div className="counter">{counter}</div>
        <button className="btn" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
