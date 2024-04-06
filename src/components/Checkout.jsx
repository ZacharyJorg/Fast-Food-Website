export default function Checkout() {
  return (
    <div>
      <form action="#">
        <label htmlFor="name">First and Last Name</label>
        <input id="name" type="text" placeholder="Name..." />
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="number" placeholder="Phone Number..." />
        <label htmlFor="creditcard cvv">Credit Card Info</label>
        <input
          id="creditcard"
          type="number"
          placeholder="Creditcard Number..."
        />
        <input id="cvv" type="number" placeholder="CVV..." />
      </form>
    </div>
  );
}
