export default function Checkout(props) {
  const taxTotal = props.total * 0.08;
  const finalTotal = props.total + taxTotal;

  // add a breakdown of the items you got and the amount of them

  // split the page in two, one side with what i have righjt now and the other side with a breakdown of the reciept (use google font VT323)
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1>CHECKOUT:</h1>
          <form action="#" className="container">
            <div className="row g-3">
              <label className="checkoutLabels" htmlFor="firstName lastName">
                *Name:
              </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  id="firstName"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  id="lastName"
                  required
                />
              </div>
            </div>
            <div className="row g-3">
              <label className="checkoutLabels" htmlFor="phone email">
                Contact:
              </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  id="phone"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="row g-3">
              <label className="checkoutLabels" htmlFor="credit cvv">
                Payment Info:
              </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Credit Card Number"
                  aria-label="Credit Card Number"
                  id="credit"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="CVV"
                  aria-label="CVV"
                  id="cvv"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col">
          <h2>Order Summary:</h2>
          {props.order.map((item, index) => (
            <h4 key={index}>
              {item.name} - Quantity: {item.amount}
            </h4>
          ))}
          <div>
            <h2>Subtotal: ${props.total.toFixed(2)}</h2>
            <h3>Tax: ${taxTotal.toFixed(2)}</h3>
            <h4>Total: ${finalTotal.toFixed(2)}</h4>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-md submit"
            onClick={props.checkedOut}
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}
