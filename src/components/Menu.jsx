import { useState } from "react";
import { menuItems } from "../MenuItems";
import "bootstrap-icons/font/bootstrap-icons.css";

// you can map over state
// set state to the menuItems array and create the elements from the state
// set a conditional to render the buttons based off the quanittity property from the state
// change menuItems.quantity to .quantityButtons for better readabillity
// cahnge the condition on which the quantity buttons render so they leave when amount == 1
// increasing the quantity cannot be stopped by the qunatity state, it breaks things

//create a popup that confirms you added an item to your cart for easier readability

// try and make the basket icon at the bottom display the number dynamically with the items amounts

export default function Menu(props) {
  const [showMenu, setShowMenu] = useState(menuItems);
  const [reset, setReset] = useState(false);

  function increaseQuantity(id) {
    setShowMenu(
      showMenu.map((item) => {
        if (item.amount === 99) {
          return item;
        }
        return item.id === id
          ? { ...item, amount: parseFloat(item.amount + 1) }
          : item;
      })
    );
  }
  function decreaseQuantity(id) {
    setShowMenu(
      showMenu.map((item) => {
        if (item.amount === 1) {
          return item;
        }
        return item.id === id
          ? { ...item, amount: parseFloat(item.amount - 1) }
          : item;
      })
    );
  }

  function showQuantityButton(id) {
    setShowMenu(
      showMenu.map((item) => {
        return item.id === id ? { ...item, quantity: !item.quantity } : item;
      })
    );
  }

  function resetMenu() {
    setShowMenu(menuItems);
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 2800);
  }

  const menuItemElements = showMenu.map((item) => {
    return (
      <div className="col-md-12 mb-3" key={item.id}>
        <div className="card">
          <img
            src={item.image}
            loading="lazy"
            className="card-img-top"
            alt={item.name}
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              Ingredients: {item.ingredients.join(", ")}
            </p>
            {item.quantity && (
              <button
                className={item.amount ? "" : "visually-hidden"}
                onClick={() => decreaseQuantity(item.id)}
              >
                <i className="bi bi-dash-lg"></i>
              </button>
            )}
            <button
              className="btn btn-primary"
              onClick={() => {
                showQuantityButton(item.id);
              }}
            >
              {(item.price * item.amount).toFixed(2)}
            </button>
            {item.quantity && (
              <button
                className={item.amount ? "" : "visually-hidden"}
                onClick={() => increaseQuantity(item.id)}
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            )}
          </div>
          {item.quantity && (
            <button
              className="btn btn-primary"
              id="liveAlertBtn"
              style={{ width: "100px", alignSelf: "center" }}
              onClick={() => {
                props.addTotal(item.id, item.amount);
                resetMenu();
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                MENU
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {reset && (
              <div className="alert alert-primary" role="alert">
                Added!
              </div>
            )}
            <div className="modal-body container">{menuItemElements}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary position-relative"
              >
                <i className="bi bi-basket"></i>
                <span
                  className={
                    props.cart &&
                    "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  }
                >
                  {props.cart > 0 && props.cart}
                  <span className="visually-hidden"></span>
                </span>
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={props.placeOrder}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
