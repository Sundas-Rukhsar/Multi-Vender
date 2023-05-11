import React, { useEffect, useState } from "react";
import "./Cetagories/Cetagories.css";

const Product = () => {
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
      <div className="lead-text">
        <span className="Cetagories d-inline-block position-relative ms-2 align-items-center justify-content-center d-flex">
          <h3 className="d-inline-block text-primary fw-bold">Products</h3>
          <span className="underline d-inline-block position-absolute h-8px bottom-0 end-0 start-0 bg-primary translate rounded"></span>
        </span>
      </div>

      <div className="container" style={{ marginTop: "180px" }}>
        <div className="row">
          {/* {prodata.map((elem) => {
            return ( */}
          <div class="container-fluid col-lg-4 col-md-4 col-12 g-4">
            <div class="card mx-auto  col-10 mt-5">
              <img src="" className="card-img-top" height={250} alt="..." />
              <div class="card-body text-center mx-auto">
                <div class="cvp">
                  <h5 class="card-title">title</h5>
                  <h5 class="card-title">description..</h5>
                  <p class="card-text">Rs.price</p>
                  
                  <br />
                  <a href="#" class="btn cart px-auto">
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* );
          })} */}
        </div>
      </div>
    </>
  );
};

export default Product;
