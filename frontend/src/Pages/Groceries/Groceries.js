import React from "react";
import "./Groceries.css";

const Groceries = () => {
  return (
    <div style={{ marginTop: "170px" }}>
      {/* <h1>Groceries section</h1> */}
      <div className="bg">
        <div
          className="col-md-auto col"
          style={{ paddingTop: "200px", width: "500px" }}
        >
          <h2 className="home-title text-center text-md-start">
            <span style={{ backgroundColor: "black" }}>
              Here grocery becomes simple
            </span>
          </h2>
        </div>
      </div>
      <div>
        <h3>Cetagories</h3>
        <section>
          <main className="container">
            <div className="row py-2 align-items-center justify-content-center">
              <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                {/* <Link to={"/Groceries"}> */}
                <button className="btn btn-lg btn-warning mr-1">
                  <img
                    src="./images/snacks.png"
                    height="180"
                    alt="Groceries"
                    loading="lazy"
                  />
                  <br />
                  <br />
                  <h4>Snacks</h4>
                </button>
                {/* </Link> */}
              </div>
              <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                <button className="btn btn-lg btn-warning mr-1">
                  <img
                    src="./images/fresh.png"
                    height="180"
                    alt="Fashion"
                    loading="lazy"
                  />
                  <br />
                  <br />
                  <h4>Fruits and Vegitables</h4>
                </button>
              </div>
              <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                <button className="btn btn-lg btn-warning mr-1">
                  <img
                    src="./images/beverages.png"
                    height="180"
                    alt="Home & Decor"
                    loading="lazy"
                  />
                  <br />
                  <br />
                  <h4>Beverages</h4>
                </button>
              </div>
              <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                <button className="btn btn-lg btn-warning mr-1">
                  <img
                    src="./images/frozen.png"
                    height="180"
                    alt="Home & Decor"
                    loading="lazy"
                  />
                  <br />
                  <br />
                  <h4>Frozen</h4>
                </button>
              </div>{" "}
              <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                <button className="btn btn-lg btn-warning mr-1">
                  <img
                    src="./images/icecream.png"
                    height="180"
                    alt="Home & Decor"
                    loading="lazy"
                  />
                  <br />
                  <br />
                  <h4>Ice Cream</h4>
                </button>
              </div>{" "}
              <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                <button className="btn btn-lg btn-warning mr-1">
                  <img
                    src="./images/pet.png"
                    height="180"
                    alt="Home & Decor"
                    loading="lazy"
                  />
                  <br />
                  <br />
                  <h4>Pet Care</h4>
                </button>
              </div>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Groceries;
