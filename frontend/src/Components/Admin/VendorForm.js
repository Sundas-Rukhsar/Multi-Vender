import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const VendorForm = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({});

  const [title, setName] = useState("");
  const [description, setEmail] = useState("");
  const [artType, setPassword] = useState("");
  const [image, setImage] = useState("");

  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const Submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("price", input.price);
    formData.append("art_file", image);

    const response = await Axios.post(
      "http://localhost:8000/art/new",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    navigate("/admin-products");
  };

  const back = () => {
    navigate("/admin");
  };
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState("");
  // const [image, setImage] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedSubcategory, setSelectedSubcategory] = useState("");

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("description", description);
  //   formData.append("category", category);
  //   formData.append("price", price);
  //   formData.append("image", image);

  //   axios
  //     .post("http://localhost:5000/create", formData)
  //     .then((response) => {
  //       console.log(response.data);
  //       // Handle success, e.g., show a success message
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // Handle error, e.g., show an error message
  //     });
  // };

  // const handleCategoryChange = (e) => {
  //   const selectedCategory = e.target.value;
  //   setSelectedCategory(selectedCategory);
  //   setSelectedSubcategory("");
  // };

  // const handleSubcategoryChange = (e) => {
  //   const selectedSubcategory = e.target.value;
  //   setSelectedSubcategory(selectedSubcategory);
  // };

  return (
    <div style={{ marginTop: "170px" }}>
      <div className="container">
        <form
          onSubmit={Submit}
          // onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            required
            name="title"
            placeholder="Title"
            value={input.title}
            onChange={handler}
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={input.description}
            onChange={handler}
            name="description"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          /> */}
          {/* <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Fashion">Fashion</option>
            <option value="Home & Decor">Home & Decor</option>
          </select>
          {selectedCategory === "Grocery" && (
            <select
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}
            >
              <option value="">Select Subcategory</option>
              <option value="Snacks">Snacks</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Beverages">Beverages</option>
              <option value="Frozen">Frozen</option>
              <option value="Ice Cream">Ice Cream</option>
              <option value="Pet Care">Pet Care</option>
            </select>
          )}
          {selectedCategory === "Fashion" && (
            <select
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}
            >
              <option value="">Select Subcategory</option>
              <option value="Makeup">Makeup</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Bags">Bags</option>
              <option value="Footwear">Footwear</option>
              <option value="Shirts">Shirts</option>
              <option value="Bottoms">Bottoms</option>
            </select>
          )}
          {selectedCategory === "Home & Decor" && (
            <select
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}
            >
              <option value="">Select Subcategory</option>
              <option value="Makeup">living room</option>
              <option value="Jewelry">bed room</option>
              <option value="Bags">kitchen & dining</option>
              <option value="Footwear">home office</option>
              <option value="Shirts">gaming room</option>
              <option value="Bottoms">outdoor</option>
            </select>
          )} */}
          <input
            type="number"
            placeholder="Price"
            onChange={handler}
            value={input.price}
            name="price"
            // value={price}
            // onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="file"
            name="image"
            // accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            // onChange={(e) => setImage(e.target.files[0])}
          />
          <button type="submit">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default VendorForm;
