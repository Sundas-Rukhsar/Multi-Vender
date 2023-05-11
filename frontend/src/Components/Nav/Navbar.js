import React, { useRef } from "react";
import "./Navbar.css";
// import SignUp from "../../Pages/SignUp";
import { Link } from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll";

const Navbar = (props) => {
  const {
    aboutRef,
    scrollToRef,
    // updateApi
  } = props;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <div className="container"> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => scrollToRef(aboutRef)}
                className="nav-link"
                // to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center ms-auto order-lg-0">
          <Link className="nav-link mr-20" to="/cart">
            <i className="bi bi-cart"></i>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span class="badge badge-warning" id="lblCartCount">
              {" "}
              4{" "}
            </span>
          </Link>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
