import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Vendor.css";

const VendorSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signup/multivendor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        // Additional logic or UI updates on successful registration
      } else {
        setMessage(data.message);
        // Additional error handling or UI updates on registration failure
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error");
      // Additional error handling or UI updates
    }
  };

  return (
    <div style={{ marginTop: "170px" }}>
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row p-3">
                  <div class="col-md-auto col">
                    <h2 class="home-title text-center text-md-start">
                      <span>Vendor Land</span>
                    </h2>
                  </div>
                </div>
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img
                    src="https://i.imgur.com/uNGdWHi.png"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <h4> Sign Up as Vendor</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Name</h6>
                    </label>
                    <input
                      className="mb-4"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter a valid email address"
                    />
                  </div>
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Email Address</h6>
                    </label>
                    <input
                      className="mb-4"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter a valid email address"
                    />
                  </div>
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Password</h6>
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="row mb-3 px-3">
                    <button type="submit" className="btn btn-blue text-center">
                      Sign-Up
                    </button>
                  </div>
                </form>
                {message && <p className=" text-sm">{message}</p>}
                <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    Want to register as a User?{" "}
                    <Link className="text-danger " to={"/signup"}>
                      Create your account
                    </Link>
                  </small>
                </div>
                <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    ALready have Vendor Account?{" "}
                    <Link className="text-danger " to={"/VendorSignin"}>
                      SignIn
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <h1>Vendor Registration</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
        {message && <p>{message}</p>}
      </div> */}
    </div>
  );
};

export default VendorSignup;
