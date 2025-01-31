import React, { useEffect } from "react";

import "./Bonus.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Bonus = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <h1
        className=" text-white"
        style={{
          fontStyle: "italic",
          fontSize: "50px",
          marginTop: "110px",
          fontWeight: "700",
        }}
      >
        Offers Products
      </h1>
      <div className="container mb-5 p-3 mt-5">
        {/* <h1  className="text-info mb-5 mt-5">Services</h1> */}
        <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">
          <div data-aos="fade-up" className="col">
            <div className="card  " style={{ border: "2px solid white" }}>
              {/* <h1>{id}</h1> */}
              <img style={{ border: "2px solid white", height: "300px" }} className="card-img-top image-design" src="https://www.alphaeshop.store/cdn/shop/products/HavellsStealthUnderLight50_White_H179..._1024x1024.jpg?v=1672311244&fbclid=IwAR2CfYeEqe5nBP4fBjpqxSNCgxvU4zQbNNfQ-8vE8ur8h9bCXD_e8N9E60c" alt="..." />
            </div>
          </div>

          {/* 2nd  */}
          <div data-aos="fade-up" className="col">
            <div className="card ">
              {/* <h1>{id}</h1> */}
              <img className=" card-img-top image-design" style={{ border: "2px solid white", height: "300px" }} src="https://images.thdstatic.com/productImages/07501677-5fa3-49f6-a8b6-6f495fd560a8/svn/carro-ceiling-fans-with-lights-s453v-l12-w1-1-31_600.jpg" alt="..." />
            </div>
          </div>

          {/* 3rd  */}
          <div data-aos="fade-up" className="col">
            <div className="card  ">
              {/* <h1>{id}</h1> */}
              <img className=" card-img-top image-design" style={{ border: "2px solid white", height: "300px" }} src="https://www.dtledlights.com/images/dt_banner01.jpg?fbclid=IwAR12PDF3SIPsl_TcWmZ34-WdYp8A-f7F9zqw0M_yFHNW-ONanWe-oWoSP4k" alt="..." />
            </div>
          </div>

          {/* 4rd  */}
          <div data-aos="fade-up" className="col">
            <div className="card  ">
              {/* <h1>{id}</h1> */}
              <img className="card-img-top image-design" style={{ border: "2px solid white", height: "300px" }} src="https://5.imimg.com/data5/QB/PT/YY/SELLER-16333734/poster-designs-for-swichit-led-lights-service-500x500.png?fbclid=IwAR38J2Y7cQ8ClMrxJTJlRJtry8p8fLuwyZHQ3RmXkrKu_6G6fL71wjtNHMw"  alt="..." />
            </div>
          </div>

          {/* 5th  */}
          <div data-aos="fade-up" className="col">
            <div className="card  ">
              {/* <h1>{id}</h1> */}
              <img className="card-img-top image-design" style={{ border: "2px solid white", height: "300px" }} src="https://www.alphaeshop.store/cdn/shop/products/HavellsStealthUnderLight50_White_H179..._1024x1024.jpg?v=1672311244&fbclid=IwAR2CfYeEqe5nBP4fBjpqxSNCgxvU4zQbNNfQ-8vE8ur8h9bCXD_e8N9E60c" alt="..." />
            </div>
          </div>

          {/* 6th  */}
          <div data-aos="fade-up" className="col">
            <div className="card  ">
              {/* <h1>{id}</h1> */}
              <img className="image-design card-img-top" style={{ border: "2px solid white", height: "300px" }} src="https://images.thdstatic.com/productImages/07501677-5fa3-49f6-a8b6-6f495fd560a8/svn/carro-ceiling-fans-with-lights-s453v-l12-w1-1-31_600.jpg"  alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
