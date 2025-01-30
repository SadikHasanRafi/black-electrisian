import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-container data-foot">
        <div className="row">
          <div className="col-lg-3">
            <div className="left-container text-start">
              <div className="tm-logo">
                {/* <img src="http://www.logo-designer.co/wp-content/uploads/2017/10/2017-Green-Textile-rebranding-Signet-Mills-logo-design-3.png" alt="" srcset="" /> */}
                <h3 className="ms-2 company">Black-Electrical</h3>
              </div>

              <p className="mt-2">
                The purpose of life is to live and let live. The societal living
                is possible when there are communal harmony and feeling of
                brotherhood among its members. The institutions of family and
                marriage contribute to the harmonious living in a
                society.Electrical equipment means any apparatus, appliance,
                cable, conductor, fitting, insulator, material, meter or wire
                that is used for controlling, generating, supplying,
                transforming.
              </p>
              <p>
                <h4>Contact-us</h4>
                <div className="contact-road">
                  <i className="fas fa-map-marker-alt"></i>

                  <div className="ms-2">Asulia, Dhaka</div>
                </div>
                <div className="contact-road">
                  <i className="fas fa-phone-square-alt"></i>

                  <div className="ms-2">+8801334343434, +8801787878787</div>
                </div>
                <div className="contact-road">
                  <i className="fas fa-envelope"></i>

                  <div className="ms-2">isnatera@gmail.com</div>
                </div>
                <div className="contact-road">
                  <i className="fas fa-comment-dots"></i>

                  <div className="ms-2">black.com</div>
                </div>
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="menu-container">
              <ul>
                <div className="contact-road">
                  <p>
                    {" "}
                    <i className="fas fa-angle-double-right footer-menubar"></i>
                  </p>
                  <Link className="ms-2 footer-menubar" to="/">
                    <li>Home</li>
                  </Link>
                </div>
                <div className="contact-road">
                  <p>
                    {" "}
                    <i className="fas fa-angle-double-right footer-menubar"></i>
                  </p>
                  <Link className="ms-2 footer-menubar" to="/light">
                    <li>Light</li>
                  </Link>
                </div>
                <div className="contact-road">
                  <p>
                    {" "}
                    <i className="fas fa-angle-double-right footer-menubar"></i>
                  </p>
                  <Link className="ms-2 footer-menubar" to="/all-categories">
                    <li>All Categories</li>
                  </Link>
                </div>
              </ul>

              <h2 className="me-5 social">Social Links</h2>

              <div className="icons-container d-flex text-center ms-5">
                <div className="links-icons">
                  <i className="fab fa-facebook-square"></i>
                </div>
                <div className="links-icons">
                  <i className="fab fa-youtube"></i>
                </div>
                <div className="links-icons">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="links-icons">
                  <i className="fab fa-twitter-square"></i>
                </div>
                <div className="links-icons">
                  <i className="fab fa-instagram-square"></i>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd column  */}
          <div className="col-lg-3">
            <div className="menu-container">
              <ul>
                <div className="contact-road">
                  <p>
                    {" "}
                    <i className="fas fa-angle-double-right footer-menubar"></i>
                  </p>
                  <Link className="ms-2 footer-menubar" to="/about">
                    <li>About US</li>
                  </Link>
                </div>
                <div className="contact-road">
                  <p>
                    {" "}
                    <i className="fas fa-angle-double-right footer-menubar"></i>
                  </p>
                  <Link className="ms-2 footer-menubar" to="/multimeter">
                    <li>Multimeter</li>
                  </Link>
                </div>
                <div className="contact-road">
                  <p>
                    {" "}
                    <i className="fas fa-angle-double-right footer-menubar"></i>
                  </p>
                  <Link className="ms-2 footer-menubar" to="/">
                    <li>Contact-us</li>
                  </Link>
                </div>
              </ul>

              <h5 className="download">Download Our App</h5>
            </div>
          </div>

          {/* end  */}
          <div className="col-lg-3">
            <div className="right-footer-container">
              <div className="contact-road">
                <p>
                  {" "}
                  <i className="fas fa-angle-double-right footer-menubar"></i>
                </p>
                <Link className="ms-2 footer-menubar" to="/">
                  <li>Dashboard</li>
                </Link>
              </div>
              <div className="contact-road">
                <p>
                  {" "}
                  <i className="fas fa-angle-double-right footer-menubar"></i>
                </p>
                <Link className="ms-2 footer-menubar" to="/showElectrician">
                  <li>Electrician</li>
                </Link>
              </div>
              <div className="contact-road">
                <p>
                  {" "}
                  <i className="fas fa-angle-double-right footer-menubar"></i>
                </p>
                <Link className="ms-2 footer-menubar" to="/">
                  <li>Robotics</li>
                </Link>
              </div>

              <div className="download-apps">
                <div className="">
                  <img
                    src="https://i.ibb.co/5vsfCnc/googleplay.png"
                    alt=""
                    srcSet=""
                  />
                  <div className="">
                    <img
                      className="mt-2"
                      src="https://i.ibb.co/nbnHMTX/appstor.png"
                      alt=""
                      srcSet=""
                    />
                  </div>
                </div>

                {/* <img className='ms-3' src="https://i.ibb.co/5vsfCnc/googleplay.png" alt="" srcset="" /> */}
              </div>
            </div>
          </div>
          <h5>
            {" "}
            Black-Electrical 2023. All rights reserved. Created by
            Black-Electrical.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
