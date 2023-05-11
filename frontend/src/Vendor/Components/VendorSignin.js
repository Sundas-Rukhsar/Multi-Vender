import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VendorSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setMessage("");
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login/multivendor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // User logged in successfully
        setMessage(data.message);
        // TODO: Save the JWT token to local storage or session storage
      } else if (response.status === 404) {
        // User not found
        setMessage(data.message);
      } else if (response.status === 401) {
        // Invalid credentials
        setMessage(data.message);
      } else {
        // Server error
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error:", error);
    }
  };
  return (
    <div>
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
                  <h3> Login as Vendor</h3>
                  <form onSubmit={handleLogin}>
                    <div className="row px-3">
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Email Address</h6>
                      </label>
                      <input
                        className="mb-4"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
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
                        onChange={handlePasswordChange}
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="row mb-3 px-3">
                      <button
                        type="submit"
                        className="btn btn-blue text-center"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  {message && <p className=" text-sm">{message}</p>}
                  <div className="row mb-4 px-3">
                    <small className="font-weight-bold">
                      Don' have an account??{" "}
                      <Link className="text-danger " to={"/VendorSignup"}>
                        SignUp
                      </Link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSignin;
