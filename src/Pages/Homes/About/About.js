import React from "react";
// import Footer from '../../../Shared/Footer/Footer';
// import Header from '../../../Shared/Header/Header';
import "./About.css";
import { Container, Grid, Typography } from "@mui/material";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
const Abouts = () => {
  return (
    <div style={{ background: "black" }}>
      <Header></Header>
      <Container sx={{ my: 10 }}>
        <Grid container spacing={2}>
          <Grid
            // data-aos="fade-right"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
            // data-aos-duration="3000"
            item
            xs={12}
            sm={12}
            md={6}
          >
            <Typography
              sx={{ fontStyle: "italic", fontSize: 22, color: "whte" }}
              variant="body1"
              gutterBottom
            ></Typography>
            <Typography
              sx={{ fontWeight: "500", fontSize: 42, color: "white" }}
              variant="h4"
              gutterBottom
              component="div"
            ></Typography>
            <h2
              className="text-white"
              style={{ textAlign: "left" }}
              sx={{ fontSize: 15, color: "white !important" }}
              variant="body2"
              gutterBottom
            >
              Electrical equipment means any apparatus, appliance, cable,
              conductor, fitting, insulator, material, meter or wire that is
              used for controlling, generating, supplying, transforming or
              transmitting electricity at a voltage greater than extra low
              voltage or is operated by electricity at a voltage greater than
              extra-low ...
            </h2>

            <br />
            <Typography
              sx={{ fontSize: 15, color: "white" }}
              variant="body2"
              gutterBottom
            ></Typography>
          </Grid>
          <Grid
            // data-aos="fade-left"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
            // data-aos-duration="3000"
            item
            xs={12}
            sm={12}
            md={6}
          >
            <img
              height="370px"
              width="450px"
              src="https://media.istockphoto.com/id/612248188/photo/electrical-tools-and-cables-used-in-electrical-installations.jpg?s=1024x1024&w=is&k=20&c=YGbCqmHJV0dkzbyauHx5J_g0oi9VRBe7kyImY2oNFZM="
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Abouts;
