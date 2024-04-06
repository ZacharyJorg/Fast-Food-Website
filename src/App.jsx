import Body from "./components/Body";
import Nav from "./components/Navbar";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  const [checkOut, setCheckOut] = useState(false);

  function placeOrder() {
    setCheckOut(true);
  }

  return (
    <>
      {checkOut ? (
        <Checkout />
      ) : (
        <div>
          <Nav />
          <Body />
          <Menu placeOrder={placeOrder} />
        </div>
      )}
    </>
  );
}

export default App;
