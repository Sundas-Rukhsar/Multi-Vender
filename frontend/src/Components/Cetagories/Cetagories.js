import React from "react";
import "./Cetagories.css";
import { Link } from "react-router-dom";

const Cetagories = () => {
  return (
    <div>
      <div className="container">
        <div className="lead-text">
          <span className="Cetagories d-inline-block position-relative ms-2 align-items-center justify-content-center d-flex">
            <h3 className="d-inline-block text-primary fw-bold">
              Browse Categories
            </h3>
            <span className="underline d-inline-block position-absolute h-8px bottom-0 end-0 start-0 bg-primary translate rounded"></span>
          </span>
        </div>
        <br />
        <br />
        <section>
          <main className="container">
            <div className="row py-2 align-items-center justify-content-center">
              <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                <Link to={"/Groceries"}>
                  <button className="btn btn-lg btn-info mr-1">
                    <img
                      src="./images/Groceries.png"
                      height="180"
                      alt="Groceries"
                      loading="lazy"
                    />
                    <br />
                    <br />
                    <h4>Groceries</h4>
                  </button>
                </Link>
              </div>
              <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                <Link to={"/Fashion"}>
                  <button className="btn btn-lg btn-secondary mr-1">
                    <img
                      src="./images/Fashion.png"
                      height="180"
                      alt="Fashion"
                      loading="lazy"
                    />
                    <br />
                    <br />
                    <h4>Fashion</h4>
                  </button>
                </Link>
              </div>
              <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                <Link to={"/Home&Decor"}>
                  <button className="btn btn-lg btn-warning mr-1">
                    <img
                      src="./images/Homee.png"
                      height="180"
                      alt="Home & Decor"
                      loading="lazy"
                    />
                    <br />
                    <br />
                    <h4>Home & Decor</h4>
                  </button>
                </Link>
              </div>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Cetagories;
