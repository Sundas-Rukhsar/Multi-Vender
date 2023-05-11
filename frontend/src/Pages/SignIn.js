import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const empty = {
    email: "",
    password: "",
  };

  // state for handle the login inputs

  const [handle, setHandle] = useState(empty);

  const loginHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  //function for login
  const loginApi = async () => {
    if (handle.email == "" || handle.password == "") {
      alert("Please Enter the Fields First");
    } else {
      let record = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(handle),
      });
      record = await record.json();
      if (record.message == "Login Successfully") {
        // store id in SessionStorage
        sessionStorage.setItem("userId", record.LoginUser._id);
        sessionStorage.setItem("userEmail", record.LoginUser.email);
        // sessionStorage.setItem("userPassword",record.LoginUser.email)
        let adminemail = sessionStorage.getItem("userEmail");
        // let adminPassword = sessionStorage.getItem("userPassword")
        if (adminemail == "admin@gmail.com") {
          alert("Admin Login Successfully");
          navigate("/admin");
        } else {
          alert("Login Successfully");
          navigate("/");
        }
      } else {
        alert("Username and Password is invalid");
      }
    }
  };

  // const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:5000/login/user", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       // User logged in successfully
  //       setMessage(data.message);
  //       navigate("/");
  //       // TODO: Save the JWT token to local storage or session storage
  //     } else if (response.status === 404) {
  //       // User not found
  //       setMessage(data.message);
  //     } else if (response.status === 401) {
  //       // Invalid credentials
  //       setMessage(data.message);
  //     } else {
  //       // Server error
  //       setMessage(data.message);
  //     }
  //   } catch (error) {
  //     setMessage("Error:", error);
  //   }
  // };
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
                <h3> Login as User</h3>
                <form
                  // onSubmit={handleLogin}
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Email Address</h6>
                    </label>
                    <input
                      className="mb-4"
                      type="email"
                      name="email"
                      // value={email}
                      // onChange={handleEmailChange}
                      onChange={loginHandler}
                      placeholder="Enter a valid email address"
                    />
                  </div>
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Password</h6>
                    </label>
                    <input
                      type="password"
                      name="password"
                      // value={password}
                      // onChange={handlePasswordChange}
                      onChange={loginHandler}
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="row mb-3 px-3">
                    <button
                      onClick={loginApi}
                      type="submit"
                      className="btn btn-blue text-center"
                    >
                      Login
                    </button>
                  </div>
                </form>
                {/* {message && <p className=" text-sm">{message}</p>} */}
                <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    Don' have an account??{" "}
                    <Link className="text-danger " to="/signup">
                      SignUp
                    </Link>
                  </small>
                </div>
                {/* <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    Buying for work?{" "}
                    <Link className="text-danger " to={"/VendorSignup"}>
                      Create a free Business Account
                    </Link>
                  </small>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {message && <p className=" text-sm">{message}</p>}
      </div> */}
    </div>
  );
};

export default SignIn;
