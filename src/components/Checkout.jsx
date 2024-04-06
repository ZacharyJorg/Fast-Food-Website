export default function Checkout(props) {
  return (
    <div>
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
        <h2>Subtotal: ${props.total}</h2>
        <button
          type="submit"
          className="btn btn-primary btn-md submit"
          onClick={props.checkedOut}
        >
          Check out
        </button>
      </form>
    </div>
  );
}
