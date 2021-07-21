import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const [color, setColor] = useState("grey");
  const [fontSize, setFontSize] = useState(6);
  const [opacity, setOpacity] = useState(0);

  return (
    <main>
      <h6 style={{ fontSize: fontSize }}>Hello To Everyone</h6>
      <div className="wrapper-button">
        <button className="btn btn-primary" onClick={() => setColor("yellow")}>
          Warning 😅
        </button>
        <button className="btn btn-primary" onClick={() => setColor("red")}>
          Error 😡
        </button>
        <button className="btn btn-primary" onClick={() => setColor("green")}>
          Success 😍
        </button>
      </div>
      <div
        className="plus-minus-icon"
        onClick={() => setFontSize((f) => f - 2)}
      >
        -
      </div>
      <div
        className="plus-minus-icon"
        onClick={() => setFontSize((f) => f + 2)}
      >
        +
      </div>
      <div className="wrapper-square" style={{ backgroundColor: color }}></div>
      <br />
      <ul style={{ opacity: opacity }}>
        <li>Home</li>
        <li>About</li>
        <li>Categories</li>
      </ul>
      <button
        className="btn btn-block btn-success"
        onClick={() => {
          setOpacity(1);
        }}
      >
        Show
      </button>
      <button
        className="btn btn-block btn-success"
        onClick={() => {
          setOpacity(0);
        }}
      >
        Hide
      </button>
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
