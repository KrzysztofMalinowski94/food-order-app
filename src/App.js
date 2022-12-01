import React, { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import FoodSection from "./components/FoodSection/FoodSection";
import Header from "./components/Header/Header";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleCartVisibility = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <div className="App">
      {cartIsOpen && <Cart toggleCartVisibility = {toggleCartVisibility}/>}
      <Header toggleCartVisibility = {toggleCartVisibility}/>
      <main>
        <FoodSection />
      </main>
    </div>
  );
}

export default App;
