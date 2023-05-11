import React from "react";
import "./Fashion.css";
import { Link } from "react-router-dom";

const Fashion = () => {
  return (
    <div>
      <div style={{ marginTop: "170px" }}>
        <>
          <div className="main-bg" />
          <div className="main-content">
            <h1>
              You're a Fashion <strong>Superstar</strong>
            </h1>
            <p style={{ width: "500px" }}>
              Be Yourself
              <br /> and Look Great Doing It.
            </p>
          </div>
          <footer>
            <div className="makeup" />
            <h3
              style={{
                paddingTop: "100px",
                paddingLeft: "100px",
                color: "#ecbd13",
              }}
            >
              Cetagories
            </h3>
            <div className="block one" />
            <div className="block two" />
          </footer>
        </>

        <div>
          <section>
            <main className="container">
              <div className="row py-2 align-items-center justify-content-center">
                <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                  {/* <Link to={"/Groceries"}> */}
                  <Link to={"/data"}>
                    <button className="btn btn-lg btn-secondary mr-1">
                      <img
                        src="./images/Makeup1.png"
                        height="180"
                        alt="Groceries"
                        loading="lazy"
                      />
                      <br />
                      <br />
                      <h4>Makeup</h4>
                    </button>
                  </Link>
                  {/* </Link> */}
                </div>
                <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                  <button
                    className="btn btn-lg btn-secondary mr-1"
                    style={{ height: "266px" }}
                  >
                    <img
                      src="./images/Jewellery.png"
                      height="150"
                      alt="Fashion"
                      loading="lazy"
                    />
                    <br />
                    <br />
                    <h4>Jewellery</h4>
                  </button>
                </div>
                <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                  <button className="btn btn-lg btn-secondary mr-1">
                    <img
                      src="./images/Bags.png"
                      height="180"
                      alt="Home & Decor"
                      loading="lazy"
                    />
                    <br />
                    <br />
                    <h4>Bags</h4>
                  </button>
                </div>
                <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                  <button className="btn btn-lg btn-secondary mr-1">
                    <img
                      src="./images/Footwear.png"
                      height="180"
                      alt="Home & Decor"
                      loading="lazy"
                    />
                    <br />
                    <br />
                    <h4>Footwear</h4>
                  </button>
                </div>{" "}
                <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                  <button className="btn btn-lg btn-secondary mr-1">
                    <img
                      src="./images/shirt.png"
                      height="180"
                      alt="Home & Decor"
                      loading="lazy"
                    />
                    <br />
                    <br />
                    <h4>Shirts</h4>
                  </button>
                </div>{" "}
                <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                  <button className="btn btn-lg btn-secondary mr-1">
                    <img
                      src="./images/Bottoms.png"
                      height="180"
                      alt="Home & Decor"
                      loading="lazy"
                    />
                    <br />
                    <br />
                    <h4>Bottoms</h4>
                  </button>
                </div>
              </div>
            </main>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
