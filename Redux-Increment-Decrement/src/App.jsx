import React from "react";
import Header from "./components/Header.jsx";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="center">
        <h1 className="header">Redux Increment Decrement</h1>
        <button className="increment" onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <Header />
        <button className="decrement" onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
