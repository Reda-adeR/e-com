import React from "react";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="assets/logo.jpg"
            alt="Logo"
            className="img-decor me-2"
          />
          <span className="fw-bold">ChriChri</span>
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Menu */}
          <ul className="navbar-nav mx-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="h">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="h">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="h">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="h">Contact</a>
            </li>
          </ul>

          {/* Search + Cart */}
          <form className="d-flex align-items-center ms-auto gap-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <a href="h" className="text-dark fs-5">
              <i className="bi bi-cart"></i>
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;