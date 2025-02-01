import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

// import './Register.css'
import "./Register.css";
import useAuth from "../../../Hooks/useAuth";
// import useFirebase from '../../../Hooks/useFirebase';
// import useAuth from '../../Hooks/useAuth';
import Modal from "@mui/material/Modal";
import {
  Autocomplete,
  Button,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/system";
const Register = () => {
  const { registerUser, loginWithGoogle, authError } = useAuth();


  const [opens, setOpens] = React.useState(false);
  const handleOpens = () => setOpens(true);
  // const handleClose = () => setOpen(false);
  const handleCloses = () => setOpens(false);

  const style = {
    position: "absolute",
    // color="warning",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 80,
    bsckGround: "white",
    p: 4,
  };

  //Location & Navigate
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  //handle google login
  const handleGoogleLogin = () => {
    loginWithGoogle(location, navigate);
  };

  const { register, handleSubmit } = useForm();
 
 
  const onSubmit = (data) => {
    // console.log(data)
    if (data.password !== data.password2) {
      alert("Your Password did not match");
      return;
    }

    registerUser(
      data.email,
      data.password,
      data.name,
      data.client = "buyer",
      data.profession,
      data.choose,
      data.address, 
      data.phone,
      location,
      navigate,
    );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const getAuthErrorMessage = (error) => {
    if (error && typeof error === "string") {
      const match = error.match(/\(auth\/([^)]+)\)/);
      if (match && match[1]) {
        const errorCode = `auth/${match[1]}`;
        switch (errorCode) {
          case "auth/invalid-email":
            return "The email address is not valid. Please enter a valid email.";
          case "auth/user-disabled":
            return "This account has been disabled. Please contact support.";
          case "auth/user-not-found":
            return "No user found with this email. Please check or sign up.";
          case "auth/wrong-password":
            return "Incorrect password. Please try again.";
          case "auth/email-already-in-use":
            return "This email is already registered. Please log in or reset your password.";
          case "auth/weak-password":
            return "The password is too weak. Please use a stronger password.";
          case "auth/popup-closed-by-user":
            return "The sign-in popup was closed before completing the process. Please try again.";
          case "auth/cancelled-popup-request":
            return "Sign-in request was canceled because another popup is open. Close it and try again.";
          case "auth/popup-blocked":
            return "The browser blocked the popup. Please enable popups and try again.";
          case "auth/unauthorized-domain":
            return "This domain is not authorized for Google sign-in. Please check your Firebase configuration.";
          default:
            return "An unknown error occurred. Please try again later.";
        }
      }
    }
    return "An error occurred. Please try again.";
  };

  return (
    <div className="signin-background">
      <div className="py-5">
        <Container>
          <Row>
            <div className="row">
              <div className="col-lg-4">
                <div className="mt-5">
                  <img
                    data-aos="zoom-in"
                    height="380"
                    width="350"
                    src="https://t4.ftcdn.net/jpg/01/06/07/11/360_F_106071121_8BHLklbWHp2caRkEmA1xtvYtUtDy4kQ2.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <Col md={{ span: 8, offset: 2 }}>
                  <div
                    className="login-form text-center shadow"
                    style={{ background: "black", borderRadius: "20px" }}
                  >
                    <h2 className="mb-5  text-white">
                      Sign Up to Black Electrical
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        style={{ fontWeight: "500" }}
                        className="w-75 mb-3"
                        {...register("name", { required: true })}
                        placeholder="Enter Full Name"
                      />{" "}
                      <br />
                      <input
                        style={{ fontWeight: "500" }}
                        className="w-75 mb-3"
                        {...register("email", { required: true })}
                        placeholder="Enter Email"
                      />{" "}
                      <br />
                      <input
                        style={{ fontWeight: "500" }}
                        className="w-75 mb-3"
                        {...register("password", { required: true })}
                        placeholder="6-digit password"
                        type="password"
                      />{" "}
                      <br />
                      <input
                        style={{ fontWeight: "500" }}
                        className="w-75 mb-3"
                        {...register("password2", { required: true })}
                        placeholder="Re-enter Password"
                        type="password"
                      />{" "}
                      <br />
                      {/* <input
                        style={{ fontWeight: "500" }}
                        className="w-75 mb-3"
                        {...register("client", { required: true })}
                        placeholder="Buyer / User"
                      />{" "} */}
                      <br />
                      {/* <Form.Group as={Col} controlId="formGridRating"        style={{marginLeft:"74px",marginRight:"74px", borderRadius:"15px",color:"black"}}>
                                        
                                        <select
                                        style={{borderRadius:"30px"}}
                                            required
                                            className="form-control shadow-none"
                                            placeholder='buyer / user/ doctor' 
                                            {...register("client")}
                                        >
                                           <option>Select categories</option>
                                            <option value="buyers">buyers</option>
                                            <option value="users">users</option>
                                            <option value="doctors">doctors</option>
                                            
                                           
                                          
                                        </select>
                                    </Form.Group><br /> */}
                      {/* start  */}
                      {/* <Button className="user-designs ms-5"  style={{background:"", padding:"", fontSize:""}} onClick={handleOpens}>Info</Button> */}
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={opens}
                        onClose={handleCloses}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={opens}>
                          <Box sx={style}>
                            <Box>
                              <div className="set-infos">
                                <input
                                  {...register("profession")}
                                  type="text"
                                  placeholder="profession"
                                  // onChange={handleonChange}
                                  className="p-2 m-2"
                                />
                                <input
                                  {...register("address")}
                                  type="text"
                                  placeholder="address"
                                  // onChange={handleonChange}
                                  className="p-2 m-2"
                                />
                                <input
                                  {...register("phone")}
                                  type="number"
                                  placeholder="phone"
                                  // onChange={handleonChange}
                                  className="p-2 m-2"
                                />
                                <input
                                  {...register("choose")}
                                  type="text"
                                  style={{ padding: "10px 20px !important" }}
                                  placeholder="why chosse website"
                                  // onChange={handleonChange}
                                  className="p-2 m-2"
                                />
                              </div>

                              {/* <button className="btn-style" onClick={() => handleUpdate(cart._id)}>update</button> */}
                            </Box>
                          </Box>
                        </Fade>
                      </Modal>
                      {/* end  */}
                      {/* <div >
                                    <select name="client"  className="pending p-2 ">
                                        <option defaultValue="">please Select</option>
                                        <option defaultValue="buyer">Buyer</option>
                                        <option defaultValue="user">User</option>
                                       
                                    </select>



                                    

                                    // start 

                                    



                                    // end 
                                </div> */}
                      <button className="submit-all ms-3 me-5" type="submit">
                        Sign Up
                      </button>
                    </form>
                    <div className="login-meta mt-4">
                      <p className="text-white">
                        Already have an account?{" "}
                        <Link to={"/login"}>
                          <span
                            className="login-links"
                            style={{ color: "#46AADC" }}
                          >
                            Login here
                          </span>
                        </Link>
                      </p>
                      <span
                        style={{ cursor: "pointer" }}
                        className="fs-4 text-white"
                      >
                        Continue with{" "}
                        <FcGoogle
                          onClick={handleGoogleLogin}
                          className="fs-2 google"
                        />
                      </span>
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </Row>
        </Container>

        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {authError && getAuthErrorMessage(authError)}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Register;
