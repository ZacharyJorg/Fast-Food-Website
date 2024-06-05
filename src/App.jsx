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
  const [order, setOrder] = useState([]);

  function addTotal(id, amount) {
    const selectedItem = menuItems.find((item) => item.id === id);
    setTotal((prevTotal) => prevTotal + selectedItem.price * amount);
    setCart(cart + amount);
    setOrder((prevOrder) => [
      ...prevOrder,
      {
        id: selectedItem.id,
        name: selectedItem.name,
        amount: amount,
      },
    ]);
  }

  function placeOrder() {
    setCheckOut(true);
  }

  function checkedOut(e) {
    e.preventDefault();
    setCheckOut(false);
    setCart(0);
    setTotal(0);
    setOrder([]);
  }

  return (
    <div>
      {checkOut ? (
        <Checkout checkedOut={checkedOut} total={total} order={order} />
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
    </div>
  );
}

export default App;

//things to add
//change the logo to an actual png
//make the subtitles more appealing
//make it so i can only checkout when the form is completed
// change the drop down buttons
//Add a google font
