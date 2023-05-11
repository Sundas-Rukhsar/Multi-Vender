import React from "react";
import Navbar from "../Nav/Navbar";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
// import SignUp from "../../Pages/SignUp";
// import { Link } from "react-router-dom";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 0) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  });

  const navigate = useNavigate();
  let adminemail = sessionStorage.getItem("userEmail");
  const sesionExpire = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <div class="container">
        <div className="header">
          <div class="row justify-content-between align-items-center">
            <div class="col-auto" style={{ marginLeft: "100px" }}>
              <div class="row align-items-center">
                <div
                  class="col-md-auto col-6"
                  // style={{
                  //   display: "flex",
                  //   alignItems: "center",
                  //   paddingBottom: "20px",
                  // }}
                >
                  <div class="row align-items-center">
                    <a class="navbar-brand" href="home.js">
                      <img src="./images/logo.png" height="70" alt="logo" />
                    </a>
                  </div>
                  {/* <div class="col-auto">
                    <h2 class="home-title text-center text-md-start">
                      <span>Vendor Land</span>
                    </h2>
                  </div> */}
                </div>
              </div>
            </div>

            {adminemail ? (
              <button
                onClick={sesionExpire}
                class="btn btn-outline-primary ms-auto px-4 rounded-pill"
              >
                <i class="fa  me-2"></i>Logout
              </button>
            ) : (
              /* Login and Signup Button */
              <div className="col-md-auto col-6">
                <div
                  className="buttons col-auto d-flex justify-content-center justify-content-md-end align-items-center"
                  style={{ marginRight: "90px" }}
                >
                  <button>
                    <Link
                      to={"/login"}
                      style={{ textDecoration: "none", color: "#FFC107" }}
                    >
                      Log-In
                    </Link>
                  </button>

                  <button>
                    <Link to={"/signup"} style={{ textDecoration: "none" }}>
                      Sign-Up
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </div>

          <Navbar class="content-section" />
        </div>
      </div>
    </div>
  );
};

export default Header;
