import logo from "../assets/images.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            <a
              className="navbar-brand ms-5 text-white fw-bold d-flex align-items-center"
              href="#"
            >
              <img
                src={logo}
                alt="logo"
                className="rounded-circle logo-small me-2"
                style={{ width: "40px", height: "40px" }}
              />
              React Jobs
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="navbar-toggler-icon"></span>{" "}
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item me-3">
                  <button
                    className="nav-link active text-white fw-bold bg-dark rounded p-2 border-0"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link text-white fw-bold" href="#">
                    Jobs
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a
                    className="nav-link disabled text-white fw-bold"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Add Job
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
