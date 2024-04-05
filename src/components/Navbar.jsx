export default function Nav() {
  return (
    <div>
      <nav className="navbar">
        <h1>La Cantina</h1>
        <h2>Est. 2024</h2>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a
                className="dropdown-item"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Start Order
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Find Locations
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
