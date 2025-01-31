import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import Header from "../../../Shared/Header/Header";
import Footer from "../../../Shared/Footer/Footer";
import { baseUrl } from "../../../../constants/urls";
// import useAuth from '../../../../hooks/useAuth';

const ShowBlog = () => {
  const [service, setService] = useState([]);
  const { user } = useAuth();
  const [control, setControl] = useState(false);
  // const email=user?.email

  useEffect(() => {
    fetch(`${baseUrl}/showBlog`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  return (
    <div>
      <Header></Header>
      <h1>Blog</h1>
      <div className="container">
        <div className="shadow p-3">
        {service?.map((offers, index) => (
  <div key={offers?._id || index} className="row mb-5 mt-5 col-sm-12 image-card">
    <div className="col-lg-6">
      <div className="c">
        <h3>{offers?.BlogName || "No Title Available"}</h3>
        <h4>{offers?.Equipment || "No Equipment Info"}</h4>
        <h6>{offers?.description || "No Description Available"}.</h6>
      </div>
    </div>
    <div className="col-lg-6">
      <img
        className="image-design card-img-top"
        height="280"
        width="280"
        src={offers?.img || "https://via.placeholder.com/280"}
        alt={offers?.BlogName || "Blog Image"}
      />
    </div>
  </div>
))}

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ShowBlog;
