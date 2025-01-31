import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import connectImg from "./images/contact.svg";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { baseUrl } from "../../../constants/urls";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const sendEmail = (formData) => {
    emailjs
      .send(
        "service_es28khp",
        "template_1fmwbhh",
        formData,
        "user_bJFVwTvtJQe23vqEilEMy",
      )

      .then(
        (result) => {
          result.text &&
            alert("success", "Success", "Message sent successfully");
        },
        (error) => {
          error.text && alert("error", "Error", "Messege can not send");
        },
      );
    reset();
  };

  const onSubmit = (data) => {
    fetch(baseUrl+"/contactus", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  return (
    <>
      {/* <Header></Header> */}
      {/* <NavigationBar /> */}
      {/* <SharedBanner pageName={"Contact Us"} /> */}
      <div style={{ background: "black" }}>
        <Header></Header>

        <Container className="contacts" id="contacts">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
            sx={{ mt: 3 }}
          >
            <Grid item xs={4} sm={4} md={5} lg={5}>
              <Box style={{ marginTop: "80px" }}>
                <img style={{ width: "370px" }} src={connectImg} alt="" />
              </Box>
            </Grid>

            <Grid item xs={4} sm={4} md={7} lg={7}>
              <Box sx={{ mb: 5 }}>
                <Box style={{ marginTop: "80px" }}>
                  <Typography
                    className="text-white"
                    sx={{ mb: 2, fontWeight: "700", fontSize: "35px" }}
                    variant="h4"
                  >
                    Get in Touch
                  </Typography>
                  <Typography
                    className="text-white"
                    sx={{ mb: 4, fontWeight: "700", fontSize: "20px" }}
                    variant="body"
                  >
                    You can find out any information about e-commerce in this
                    website.If you have any question or confusion! Don&apos;t be shy.
                    Feel free to connect with us. We are waiting for your
                    response.
                  </Typography>
                </Box>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box
                    sx={{ mt: 3 }}
                    style={{ background: "white", padding: "10px 20px" }}
                  >
                    <TextField
                      id="filled-basic"
                      label="Name"
                      fullWidth
                      variant="filled"
                      {...register("name", { required: true })}
                      placeholder=" Your Name"
                      sx={{ my: 2 }}
                    />
                    <TextField
                      id="filled-basic"
                      label="Email"
                      fullWidth
                      variant="filled"
                      {...register("email", { required: true })}
                      placeholder=" Your email"
                      sx={{ my: 2 }}
                    />
                    <TextField
                      id="filled-basic"
                      label="Phone Number"
                      variant="filled"
                      fullWidth
                      {...register("number", { required: true })}
                      placeholder="Number"
                      sx={{ my: 2 }}
                    />
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      variant="filled"
                      label="Massage"
                      multiline
                      rows={4}
                      {...register("message", { required: true })}
                      placeholder=" Your Massage"
                      sx={{ my: 2 }}
                    />{" "}
                    <br />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      endIcon={<SendIcon />}
                    >
                      {" "}
                      Send
                    </Button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ my: 5 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3, lg: 3 }}
              columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
            >
              <Grid item xs={2} sm={4} md={3} lg={3}>
                <Box>
                  <Box sx={{ ml: 5 }}>
                    {/* <img src="https://i.ibb.co/RjMJ1NV/location-removebg-preview-1.png" alt="" /> */}
                  </Box>
                  <Box>
                    <Typography
                      sx={{ ml: 4 }}
                      variant="h5"
                      style={{ color: "white" }}
                    >
                      Location
                    </Typography>
                    <Typography variant="body" style={{ color: "white" }}>
                      Dhaka, Bangladesh
                    </Typography>
                    <br />
                    <Typography variant="body" style={{ color: "white" }}>
                      Asulia, Bangladesh
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2} sm={4} md={3} lg={3}>
                <Box>
                  <Box sx={{ ml: 5 }}>
                    {/* <img src="https://i.ibb.co/kgC58zp/email-removebg-preview-1.png" alt="" /> */}
                  </Box>
                  <Box>
                    <Typography
                      sx={{ ml: 5 }}
                      variant="h5"
                      style={{ color: "white" }}
                    >
                      Mail Us
                    </Typography>
                    <Typography variant="body" style={{ color: "white" }}>
                      isnatera@gmail.com
                    </Typography>
                    <br />
                    <Typography variant="body" style={{ color: "white" }}>
                      isnatera@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2} sm={4} md={3} lg={3}>
                <Box>
                  <Box sx={{ ml: 4 }}>
                    {/* <img src="https://i.ibb.co/J2DjHCn/mobilee-removebg-preview-1.png" alt="" /> */}
                  </Box>
                  <Box>
                    <Typography
                      sx={{ ml: 4 }}
                      variant="h5"
                      style={{ color: "white" }}
                    >
                      Call Us
                    </Typography>
                    <Typography variant="body" style={{ color: "white" }}>
                      +880179689
                    </Typography>
                    <br />
                    <Typography variant="body" style={{ color: "white" }}>
                      +880179677
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2} sm={4} md={3} lg={3}>
                <Box>
                  <Box sx={{ ml: 5 }}>
                    {/* <img src='https://i.ibb.co/YRmJtDr/clock-1.png' alt="" /> */}
                  </Box>
                  <Box>
                    <Typography
                      sx={{ ml: 2 }}
                      variant="h5"
                      style={{ color: "white" }}
                    >
                      Opening Hours
                    </Typography>
                    <Typography variant="body" style={{ color: "white" }}>
                      Mon - Fri : 10am to 2pm
                    </Typography>
                    <br />
                    <Typography variant="body" style={{ color: "white" }}>
                      Sat - Sun : Closed
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Footer></Footer>
      </div>
      {/* <Footer></Footer> */}
      {/* <Footer /> */}
    </>
  );
};
export default Contact;
