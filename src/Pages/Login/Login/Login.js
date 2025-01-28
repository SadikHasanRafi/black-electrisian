import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
import { useState, useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";

const Login = () => {
  const { loginWithGoogle, loginWithOwnEmailAndPass, authError } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Update open state when authError changes
  useEffect(() => {
    if (authError) {
      setOpen(true);
    }
  }, [authError]);

  const handleGoogleLogin = () => {
    loginWithGoogle(location, navigate);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    loginWithOwnEmailAndPass(data.email, data.password, location, navigate);
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
    <div className="login-background">
      <div className="py-5">
        <Container>
          <Row>
            <div className="row">
              <div className="col-lg-4">
                <div className="mt-5">
                  <img
                    data-aos="zoom-in"
                    height="330"
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
                    <h2 className="mb-5 text-white">Login to Black-Electrical</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        style={{ fontWeight: "500" }}
                        className="w-75 mb-3"
                        {...register("email", { required: true })}
                        placeholder="Enter Email"
                      />
                      <br />
                      <input
                        style={{ fontWeight: "500" }}
                        className="w-75 mb-3"
                        {...register("password", { required: true })}
                        placeholder="Enter Password"
                        type="password"
                      />
                      <br />
                      <button className="submit-all" type="submit">
                        Login
                      </button>
                    </form>
                    <div className="login-meta mt-4">
                      <p className="text-white">
                        New to Black Electrician?{" "}
                        <Link to={"/register"}>
                          <span className="login-links" style={{ color: "#46AADC" }}>
                            Create a free Account
                          </span>
                        </Link>
                      </p>
                      <span
                        onClick={handleGoogleLogin}
                        style={{ cursor: "pointer" }}
                        className="fs-4 text-white"
                      >
                        Continue with <FcGoogle className="fs-2 google" />
                      </span>
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </Row>
        </Container>

        {/* Snackbar with Alert for error messages */}
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
            sx={{ width: '100%' }}
          >
            {authError && getAuthErrorMessage(authError)}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Login;