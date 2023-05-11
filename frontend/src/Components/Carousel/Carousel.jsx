import React, { useState } from "react";

const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  const isSmallScreen = windowWidth < 768;
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        style={{ height: isSmallScreen ? "40vh" : "60vh" }}
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          <div className="carousel-item active" style={{ height: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="backvid"
                alt="First slide"
                style={{ height: "100%", objectFit: "cover" }}
              >
                <source src="./Videos/Slide2.mp4" />
              </video>
            </div>
            {/* <img
              className="d-block w-100"
              src="./images/slide1.jpg"
              alt="First slide"
              style={{ height: "100%", objectFit: "cover" }}
            /> */}
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="backvid"
                alt="First slide"
                style={{ height: "100%", objectFit: "cover" }}
              >
                <source src="./Videos/Slide3.mp4" />
              </video>
            </div>
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="backvid"
                alt="First slide"
                style={{ height: "100%", objectFit: "cover" }}
              >
                <source src="./Videos/Slide4.mp4" />
              </video>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
