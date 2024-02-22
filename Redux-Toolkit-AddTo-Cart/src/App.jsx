import products from "./products.json";
import React from "react";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <h1 className="header">Redux Toolkit</h1>
      <div className="App">
        <Cart />
        <div className="products">
          {products.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
