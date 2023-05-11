import React from "react";
import "./Decor.css";

const Decor = () => {
  return (
    <div>
      <div>
        <div style={{ marginTop: "170px" }}>
          <>
            <div className="main-bg" />
            <div className="main-content">
              <h1>
                Home's Like <strong>Heaven</strong>
              </h1>
              <p style={{ width: "500px" }}>
                Make your home significantly better.
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
                    <button
                      className="btn btn-lg btn-info mr-1"
                      style={{ height: "266px" }}
                    >
                      <img
                        src="./images/LivingRoom.png"
                        height="150"
                        alt="Fashion"
                        loading="lazy"
                      />
                      <br />
                      <br />
                      <h4>Living Room</h4>
                    </button>
                  </div>
                  <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                    <button
                      className="btn btn-lg btn-info mr-1"
                      style={{ height: "266px" }}
                    >
                      <img
                        src="./images/bedroom.png"
                        height="150"
                        alt="Fashion"
                        loading="lazy"
                      />
                      <br />
                      <br />
                      <h4>Bed Room</h4>
                    </button>
                  </div>
                  <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                    <button className="btn btn-lg btn-info mr-1">
                      <img
                        src="./images/dining.png"
                        height="180"
                        alt="Home & Decor"
                        loading="lazy"
                      />
                      <br />
                      <br />
                      <h4>Kitchen and dining</h4>
                    </button>
                  </div>
                  <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                    <button className="btn btn-lg btn-info mr-1">
                      <img
                        src="./images/homeoffice.png"
                        height="180"
                        alt="Home & Decor"
                        loading="lazy"
                      />
                      <br />
                      <br />
                      <h4>Home Office</h4>
                    </button>
                  </div>{" "}
                  <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                    <button className="btn btn-lg btn-info mr-1">
                      <img
                        src="./images/gamingroom.png"
                        height="180"
                        alt="Home & Decor"
                        loading="lazy"
                      />
                      <br />
                      <br />
                      <h4>Gaming Room</h4>
                    </button>
                  </div>{" "}
                  <div className="cat col-md-auto col-12 col-sm-6 col-lg-4 mb-4">
                    <button className="btn btn-lg btn-info mr-1">
                      <img
                        src="./images/outdoor.png"
                        height="180"
                        alt="Home & Decor"
                        loading="lazy"
                      />
                      <br />
                      <br />
                      <h4>Outdoor</h4>
                    </button>
                  </div>
                </div>
              </main>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decor;
