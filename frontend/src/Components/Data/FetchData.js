import React, { useEffect, useState } from "react";
// import axios from "axios";

const FetchData = () => {
  const [prodata, setProData] = useState([]);

  const productsDetail = () => {
    fetch("http://localhost:5000/show")
      .then((res) => res.json())
      .then((data) => {
        setProData(data);
      });
  };
  // console.log(prodata)

  useEffect(() => {
    productsDetail();
  }, []);

  return (
    <>
      {/* <h1>Fetch Data file</h1> */}
      <div className="container" style={{ marginTop: "180px" }}>
        <div className="row">
          {prodata.map((elem) => {
            return (
              <div class="container-fluid col-lg-4 col-md-4 col-12 g-4">
                <div class="card mx-auto  col-10 mt-5">
                  <img
                    src={elem.img}
                    className="card-img-top"
                    height={250}
                    alt="..."
                  />
                  <div class="card-body text-center mx-auto">
                    <div class="cvp">
                      <h5 class="card-title">
                        {elem.description.slice(0, 20)}..
                      </h5>
                      <p class="card-text">Rs.{elem.price}</p>
                      <a href="#" class="btn details px-auto">
                        view details
                      </a>
                      <br />
                      <a href="#" class="btn cart px-auto">
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchData;
