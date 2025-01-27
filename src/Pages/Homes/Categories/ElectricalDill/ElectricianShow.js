import React, { useContext, useEffect, useState } from 'react';
// import QuestionCart from './QuestionCart';
import { NavLink } from "react-router-dom";



// import useAuth from '../../hooks/useAuth';
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

import ReactPaginate from 'react-paginate';

import { CircularProgress } from '@mui/material';
// import SearchBar from '../SearchBar';
import Swal from 'sweetalert2';

import Footer from '../../../Shared/Footer/Footer';
import { CartContext } from '../../../../contexts/CartContext';
import Header from '../../../Shared/Header/Header';
import SearchBar from '../SearchBar';
import useAuth from '../../../../Hooks/useAuth';
// import Footer from '../../Shared/Footer/Footer';

const ElectricianShow = () => {

  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = (product) => {
    const exists = cart.find(pd => pd._id === product._id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter(pd => pd._id !== product._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product]

    }
    localStorage.setItem("productCart", JSON.stringify(newCart));
    setCart(() => newCart);
    Swal.fire(
      'Success Product!',

    )
  };

  const [questions, setQuestions] = useState([]);
  const [model, setModel] = useState([]);
  const [type, setType] = useState("")
  const [searchValue, setSearchValue] = useState('')
  const [searchQuestion, setSearchQuestion] = useState('')
  const [searchYear, setSearchYear] = useState('')
  // const [searchValue, setSearchValue] = useState([]);
  const [code, setCode] = useState("")
  const [year, setYear] = useState("")
  const [page, setPage] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const size = 10;

  // console.log(questions)

  const handlePageChange = (data) => {
    setPage(data.selected);
  }


  const { user } = useAuth()
  const userData = { email: user.email, name: user.displayName };





  const fetchData = () => {
    fetch('http://localhost:5000/showElectrician')
      .then(res => res.json())
      .then(data => {
        setQuestions(data)
        setModel(data)
        //   console.log(data.allData)
        const count = data.count;
        const pageNumber = Math.ceil(count / size)
        setPageCount(pageNumber)
      })
  }
  useEffect(() => {
    fetchData()
  }, [type, year, code, page])




  useEffect(() => {
    fetch('http://localhost:5000/showElectrician')
      .then(res => res.json())
      .then(data => setModel(data))
  }, [])



  // const managePost = questions?.filter(models => models?.role === true);



  const handleOnChange = (e) => {
    e.preventDefault()
    const values = e.target.value;
    const newValue = questions?.filter(ques => ques?.productName?.toLowerCase()?.includes(values.toLowerCase()))
    // console.log(values)
    newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
    setModel(newValue)
  }


  // alert 
  const alert = (icon, title, text) => {
    Swal.fire({
      position: 'center',
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleSubmit = () => {
    // handleValue()
  }

  const loading =
    <Box sx={{ textAlign: 'center', padding: '100px 0' }}>
      <CircularProgress color="secondary" />
      <Typography>Loading...</Typography>
    </Box>
  const placeholder = 'Search by Electrician Name';
  return (

    <div>
      {/* <Header></Header> */}
      <div style={{ background: "black" }}>
        <Header></Header>
        <div className="container text-black mt-5 mb-5">
          <div className="row ">
            {/* <div className="col-md-4">
                   
                </div> */}
            <div className="col">
              {/* <div className="search-box mb-8"> */}

              <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} />
              {/* </div> */}
            </div>
          </div>
          {/* {questions.length ? */}
          <div className="row g-4" >
            <div className="col-12">
              <div className="question-sidebar">

                <form
                  onChange={(e) => setType(e.target.value)}
                >



                </form>




              </div>
            </div>
            <div className="">




              {/* <div className="row"> */}
              <Grid
                container
                spacing={2}
                sx={{ mt: 6 }}
                columns={{ xs: 3, sm: 8, md: 12 }}
              >

                {

                  questions.length === 0 ? loading
                    :


                    model?.map((single) => (
                      <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={4}>
                        <Paper
                          sx={{
                            p: 1,
                            margin: "auto",
                            maxWidth: 500,
                            flexGrow: 1,
                            boxShadow: "0px 14px 22px rgb(42 135 158 / 50%)"
                          }}
                        >
                          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 4 }}>
                            <Grid item xs={12} sm={12} md={12}>

                              <div className='photo'>
                                <div className='photoShops photoalbum'>

                                  <img height="230" width="335" style={{ borderRadius: "15px" }} src={single?.img}></img>

                                </div>
                              </div>

                              {/* <CardMedia
                      component="img"
                      sx={{ objectFit: "cover", height: 200 }}
                      alt="complex"
                      src={single?.img}
                    /> */}
                            </Grid>
                            <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                              <Box style={{ textAlign: "left" }}>
                                <h5 style={{ fontWeight: "700" }}>Name : {single?.Name}</h5>

                               

                                <Typography variant="body">
                                  <h5 style={{ fontWeight: 700 }}> Salary : TK.{single?.ProductPrice}</h5>

                                </Typography>
                                <Typography variant="body">
                                  <h5 style={{ fontWeight: 700 }}> Contact:{single?.contact}</h5>

                                </Typography>
                                <Typography variant="body">
                                  <h5 style={{ fontWeight: 200 }}> Description:{single?.description}</h5>

                                </Typography>

                                <Typography variant="body">
                                  <h6 style={{ fontWeight: 700 }}> Address: {single?.address} </h6>

                                </Typography>
                                <Typography variant="body">
                                  <h6 style={{ fontWeight: 700 }}> Experience: {single?.experience} </h6>

                                </Typography>
                                <Typography variant="body">
                                  <h6 style={{ fontWeight: 700 }}> Position: {single?.position} </h6>

                                </Typography>

                               

                              </Box>
                            </Grid>
                          </Grid>


                          {/* button  */}

                          <Box sx={{ display: 'flex', justifyContent: '', marginBottom: "" }}>

                            <NavLink
                              to={`/electricianDetails/${single._id}`}
                              className="details-show"
                              style={{ textDecoration: "none", marginRight: "" }}
                            >
                              <Button
                                className='btn-style download-btn details-show downpart'
                                style={{ padding: "5px", marginLeft:"30px", display:"flex", justifyContent:"center", alignItems:"center" }}
                                size="small">
                                Details
                              </Button>
                            </NavLink>

                          </Box>
                        </Paper>
                      </Grid>
                    ))}
              </Grid>
              {/* </div> */}

            </div>

            <div className="d-flex mt-5">
              <div className='mx-auto'>

                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={1}
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                  containerClassName='pagination'
                  pageClassName='page-item'
                  pageLinkClassName='page-link'
                  previousClassName='page-link'
                  nextClassName='page-link'
                  breakClassName='page-item'
                  breakLinkClassName='page-link'
                  activeClassName='active'
                />

              </div>
            </div>


          </div >

          {/* : <div><h5>Loading...</h5></div>} */}



        </div >
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ElectricianShow;