import Body from "./components/Body.jsx";
import Nav from "./components/Navbar.jsx";
import Menu from "./components/Menu.jsx";
import Checkout from "./components/Checkout.jsx";
import { useState } from "react";
import { menuItems } from "./MenuItems.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  const [checkOut, setCheckOut] = useState(false);
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState(0);

  function addTotal(id) {
    const selectedItem = menuItems.find((item) => item.id === id);
    setTotal((prevTotal) => prevTotal + selectedItem.price);
    setCart(cart + 1);
  }

  function placeOrder() {
    setCheckOut(true);
  }

  function checkedOut() {
    setCheckOut(false);
    setCart(0);
    setTotal(0);
  }

  return (
    <>
      {checkOut ? (
        <Checkout checkedOut={checkedOut} total={total} />
      ) : (
        <div>
          <Nav />
          <Body />
          <Menu
            placeOrder={placeOrder}
            addTotal={addTotal}
            total={total}
            cart={cart}
          />
        </div>
      )}
    </>
  );
}

export default App;
