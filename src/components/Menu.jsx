import { menuItems } from "../MenuItems";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Menu(props) {
  const menuItemElements = menuItems.map((item) => {
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
            <button
              className="btn btn-primary"
              onClick={() => props.addTotal(item.id)}
            >
              {item.price}
            </button>
          </div>
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
        <div className="modal-dialog">
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
