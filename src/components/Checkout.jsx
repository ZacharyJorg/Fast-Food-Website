export default function Checkout() {
  return (
    <div>
      <form action="#" className="container">
        <div className="row g-3">
          <label className="checkoutLabels" htmlFor="firstName lastName">
            Name:
          </label>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              id="firstName"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              id="lastName"
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
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              id="email"
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
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="CVV"
              aria-label="CVV"
              id="cvv"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
