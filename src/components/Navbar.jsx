export default function Nav() {
  return (
    <div className="container" style={{ backgroundColor: "antiquewhite" }}>
      <div className="row row-cols-4">
        <div className="col-6 resturantLogo text-start">
          <h1>La Cantina</h1>
        </div>
        <div className="col"></div>
        <div className="col text-end" style={{ marginTop: "20px" }}>
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
        </div>
        <div className="col-6 text-start" style={{ paddingLeft: "45px" }}>
          <h2>Est. 2024</h2>
        </div>
      </div>
    </div>
  );
}
