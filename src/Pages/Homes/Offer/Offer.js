import React from "react";
import { Carousel } from "react-bootstrap";
// import slider1 from '../../../images/bike-11.png'
// import slider2 from '../../../images/bike-12.png'
// import slider3 from '../../../images/bike-13.png'
// import "./Banner.css"
import "./Offer.css";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="mb-5 mt-4">
      <Carousel className="banners">
        <Carousel.Item className="carousel-design values">
          <img
            className="d-block w-100  slide"
            src="https://www.assent.com/wp-content/uploads/2022/02/Dec-7-Electronic-Equipment.jpg"
            alt="First slide"
          />

          <Carousel.Caption className="styles">
            <Link to="/piece">
              {/* <button className="banner  text-white">More Products</button> */}
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-design values">
          <img
            className="d-block w-100  slide"
            src="https://us.123rf.com/450wm/liudmilachernetska/liudmilachernetska2111/liudmilachernetska211108126/178020865-flat-lay-composition-with-electrician-s-tools-and-accessories-on-wooden-background.jpg?ver=6"
            alt="Second slide"
          />

          <Carousel.Caption>
            <Link to="/more">
              {/* <button className="banner  text-white">More Products</button> */}
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-design values">
          <img
            className="d-block w-100  slide"
            src="https://img.freepik.com/premium-photo/electrician-tools-wooden-table_392895-27019.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Link to="/more">
              {/* <button className="banner  text-white">More Products</button> */}
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Offer;
