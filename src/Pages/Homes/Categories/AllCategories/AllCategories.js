import React, { useContext, useEffect, useState } from "react";
// import QuestionCart from './QuestionCart';
import { NavLink } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

// import { CartContext } from '../../../Context/CartContext';
import "./AllCategories.css";
import ReactPaginate from "react-paginate";

import { CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import { CartContext } from "../../../../contexts/CartContext";
import useAuth from "../../../../Hooks/useAuth";
import Header from "../../../Shared/Header/Header";
import SearchBar from "../SearchBar";
import Footer from "../../../Shared/Footer/Footer";

const AllCategories = () => {
  const [cart, setCart] = useContext(CartContext);
  const { user } = useAuth();

  const userData = { email: user.email, name: user.displayName };

  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd._id === product._id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd._id !== product._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    localStorage.setItem("productCart", JSON.stringify(newCart));
    setCart(() => newCart);
    Swal.fire("Success Product!");
  };

  const [questions, setQuestions] = useState([]);
  const [model, setModel] = useState([]);

  const [categories, setCategories] = useState("");
  const [sizing, setsizing] = useState("");
  const [warrenty, setwarrenty] = useState("");
  const [material, setmaterial] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const size = 10;

  const handlePageChange = (data) => {
    setPage(data.selected);
  };
  const fetchData = () => {
    fetch(
      `https://black-electrisian.onrender.com/products?page=${page}&&categories=${categories}&&sizing=${sizing}&&warrenty=${warrenty}&&material=${material}&&size=${size}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.allData);
        setModel(data.allData);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  };
  useEffect(() => {
    fetchData();
  }, [categories, page, size, sizing, warrenty, material, size]);

  useEffect(() => {
    fetch("https://black-electrisian.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setModel(data.allData));
  }, []);

  const handleValue = (e) => {
    e.preventDefault();
    const newValue = model?.filter((ques) =>
      ques?.productName?.toLocaleLowerCase()?.includes(searchValue),
    );

    setModel(newValue);
    // console.log(newValue)
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const values = e.target.value;
    const newValue = questions?.filter((ques) =>
      ques?.productName?.toLowerCase()?.includes(values.toLowerCase()),
    );
    // console.log(values)
    newValue.length === 0 &&
      alert("warning", "Warning...", "Not Found Your Result");
    setModel(newValue);
  };

  const loading = (
    <Box sx={{ textAlign: "center", padding: "100px 0" }}>
      <CircularProgress color="secondary" />
      <Typography>Loading...</Typography>
    </Box>
  );

  // alert
  const alert = (icon, title, text) => {
    Swal.fire({
      position: "center",
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const placeholder = "Search by  Product Name, example: light";

  return (
    <div>
      {/* <Header></Header> */}
      <div style={{ background: "" }}>
        <Header></Header>
        <div className="container text-black mt-5 mb-5">
          <div className="row ">
            {/* <div className="col-md-4">
                   
                </div> */}
            {/* <div className="col">
                    
                </div> */}
            <SearchBar
              handleOnChange={handleOnChange}
              placeholder={placeholder}
            />
          </div>
          {/* {questions.length ? */}
          <div className="row g-4">
            <div className="col-12 col-md-2">
              <div className="question-sidebar">
                <form onChange={(e) => setCategories(e.target.value)}>
                  {/* {
                          model.map((models)=>( */}
                  {/* <div> */}
                  <div className="brands mt-3">
                    <h5
                      style={{ fontWeight: "700" }}
                      className="text-black texts-design main-parts"
                    >
                      Brand
                    </h5>
                    <div className="form-check align-items-center me-3">
                      <input
                        className="form-check-input mt-2"
                        type="checkbox"
                        value="electricdrill"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label fw-bold all text-black me-4 sharee-design"
                        htmlFor="flexCheckDefault"
                      >
                        Electricdrill
                      </label>
                    </div>
                    <div className="form-check align-items-center me-5">
                      <input
                        className="form-check-input mt-1"
                        type="checkbox"
                        value="light"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label fw-bold all me-5  text-black sharee-design"
                        htmlFor="flexCheckDefault"
                      >
                        Light
                      </label>
                    </div>
                    <div className="form-check align-items-center me-5">
                      <input
                        className="form-check-input mt-1"
                        type="checkbox"
                        value="fan"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label fw-bold all me-5 text-black sharee-design"
                        htmlFor="flexCheckDefault"
                      >
                        ElectricFan
                      </label>
                    </div>
                    <div className="form-check align-items-center me-5">
                      <input
                        className="form-check-input mt-1"
                        type="checkbox"
                        value="multimeter"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label fw-bold all me-5 text-black sharee-design"
                        htmlFor="flexCheckDefault"
                      >
                        Multimeter
                      </label>
                    </div>
                    <div className="form-check align-items-center me-5">
                      <input
                        className="form-check-input mt-1"
                        type="checkbox"
                        value="ElectricTar"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label fw-bold all me-5 text-black sharee-design"
                        htmlFor="flexCheckDefault"
                      >
                        ElectricTar
                      </label>
                    </div>
                    <div className="form-check align-items-center me-3">
                      <input
                        className="form-check-input mt-2"
                        type="checkbox"
                        value="tester"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label fw-bold all me-4 text-black sharee-design"
                        htmlFor="flexCheckDefault"
                      >
                        VoltageTester
                      </label>
                    </div>
                    <div className="form-check align-items-center me-5">
                      <input
                        className="form-check-input mt-1"
                        type="checkbox"
                        value="robotics"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label fw-bold all me-5 text-black sharee-design"
                        htmlFor="flexCheckDefault"
                      >
                        Robotics
                      </label>
                    </div>
                  </div>
                </form>
                <hr className="text-white"></hr>
              </div>
            </div>
            <div className="col-12 col-md-10">
              <div className="">
                <Grid
                  container
                  spacing={2}
                  sx={{ mt: 6 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {questions.length === 0
                    ? loading
                    : model?.map((single) => (
                        <Grid
                          sx={{ py: 3 }}
                          key={single._id}
                          item
                          xs={4}
                          sm={4}
                          md={4}
                        >
                          <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                              maxWidth: 500,
                              flexGrow: 1,
                              boxShadow: "0px 14px 22px rgb(42 135 158 / 50%)",
                            }}
                          >
                            <Grid
                              container
                              spacing={2}
                              columns={{ xs: 4, sm: 8, md: 4 }}
                            >
                              <Grid item xs={12} sm={12} md={12}>
                                <div className="photo">
                                  <div className="photoShops photoalbums">
                                    <img
                                      height="230"
                                      width="280"
                                      style={{ borderRadius: "10px" }}
                                      src={single?.img}
                                    ></img>
                                  </div>
                                </div>
                              </Grid>
                              <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                                <Box style={{ textAlign: "left" }}>
                                  <h5 style={{ fontWeight: "700" }}>
                                    Name : {single?.productName}
                                  </h5>

                                  <Typography variant="body">
                                    <h5 style={{ fontWeight: 700 }}>
                                      {" "}
                                      price : TK.{single?.ProductPrice}
                                    </h5>
                                  </Typography>

                                  <Typography variant="body">
                                    <span style={{ fontWeight: 700 }}>
                                      {" "}
                                      Brand : {single?.categories}
                                    </span>
                                  </Typography>
                                  <br />
                                  <Rating
                                    name="half-rating-read"
                                    style={{ color: "#D0425C" }}
                                    defaultValue={single?.rating}
                                    precision={0.5}
                                    readOnly
                                  />

                                  <Box style={{ display: "flex" }}></Box>
                                </Box>
                              </Grid>
                            </Grid>
                            <Box sx={{ display: "flex", justifyContent: "" }}>
                              <NavLink
                                to={`/payment`}
                                style={{
                                  textDecoration: "none",
                                  textAlign: "left",
                                }}
                              >
                                <Button
                                  className="btn-style download-btn "
                                  style={{ textAlign: "left" }}
                                  size="small"
                                >
                                  Check
                                </Button>
                              </NavLink>
                              <NavLink
                                to={`/bookDetails/${single._id}`}
                                className="details-show"
                                style={{
                                  textDecoration: "none",
                                  marginRight: "4px",
                                }}
                              >
                                <Button
                                  className="btn-style download-btn details-show ms-4 partdetsils"
                                  style={{ padding: "5px" }}
                                  size="small"
                                >
                                  Details
                                </Button>
                              </NavLink>
                              <Button
                                className="btn-style download-btn"
                                size="small"
                                // sx={ButtonStyle}
                                style={{ textAlign: "left" }}
                                onClick={() => handleAddToCart(single)}
                              >
                                Add cart
                              </Button>
                            </Box>
                          </Paper>
                        </Grid>
                      ))}
                </Grid>
              </div>
            </div>

            <div className="d-flex mt-5">
              <div className="mx-auto">
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={1}
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                  containerClassName="pagination"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-link"
                  nextClassName="page-link"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  activeClassName="active"
                />
              </div>
            </div>
          </div>

          {/* : <div><h5>Loading...</h5></div>} */}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AllCategories;
