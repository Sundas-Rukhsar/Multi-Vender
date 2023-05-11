import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Groceries from "./Pages/Groceries/Groceries";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Fashion from "./Pages/Fashion/Fashion";
import Decor from "./Pages/Home&decor/Decor";
// import About from "./Pages/About/About";
import FetchData from "./Components/Data/FetchData";
import Navbar from "./Components/Nav/Navbar";
import VendorForm from "./Components/Admin/VendorForm";
import VendorSignup from "./Vendor/Components/VendorSignup";
import VendorSignin from "./Vendor/Components/VendorSignin";
import Admin from "./Components/Admin/Admin";
import AllUsers from "./Components/Admin/AllUsers";
import ShowProducts from "./Components/Admin/ShowProducts";
import UpdateProducts from "./Components/Admin/UpdateProducts";

const App = () => {
  const aboutRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const empty = {
    name: "",
    image: "",
    description: "",
    price: "",
  };
  //state for handling input
  const [handle, setHandle] = useState(empty);

  // function for handle the input fields
  const handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };
  // function for creating the Api data
  const createApi = () => {
    const formData = new FormData();
    formData.append("name", handle.name);
    formData.append("description", handle.description);
    formData.append("price", handle.price);
    formData.append("image", handle.image);

    fetch("http://localhost:5000/create", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            element={<Navbar aboutRef={aboutRef} scrollToRef={scrollToRef} />}
          />
          <Route path="/Groceries" element={<Groceries />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Home&Decor" element={<Decor />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/data" element={<FetchData />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/admin-products" element={<ShowProducts />} />
          <Route path="/update-products/:id" element={<UpdateProducts />} />
          {/* For Vendor side routings */}
          <Route
            path="/form"
            element={
              <VendorForm
              // createApi={createApi} handler={handler}
              />
            }
          />
          <Route path="VendorSignup" element={<VendorSignup />} />
          <Route path="VendorSignin" element={<VendorSignin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
