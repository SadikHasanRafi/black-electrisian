import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

import "./Choose.css";

const ChooseData = [
  {
    id: 1,
    title: "Product Service",
    dis: "Product provide this website, and this service are Helpfull Process",
  },
  {
    id: 2,
    title: "Electrical Service",
    dis: "We provide all Electrical Service  and search the Website.",
  },
  {
    id: 3,
    title: "Machanic Service",
    dis: "We provide all Machanic Service  and search the Website.",
  },
  {
    id: 4,
    title: "Payment Service",
    dis: "We provide Payment Services and search the Website.",
  },
  {
    id: 5,
    title: "Order System",
    dis: "We Provide Order System this website, and searching many product provide",
  },
  {
    id: 6,
    title: "Delivery System",
    dis: "We provide all Delivery Product and this this delivery system..",
  },
];
const Choose = () => {
  return (
    <Container>
      <Box sx={{ padding: "100px 0" }}>
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              pb: 2,
              fontFamily: "Georgia",
              fontStyle: "italic",
            }}
          >
            Read on to understand our differene
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "white", fontStyle: "italic" }}
          >
            Why Choose Black-Electrical
          </Typography>
        </Box>

        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {ChooseData.map((data, index) => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  key={index}
                  sx={{ height: "200px" }}
                  className={`${data.id === 1 || data.id === 3 || data.id === 5 ? "Why-ChooseUs-bg" : ""}`}
                >
                  <Box
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    sx={{ display: "flex" }}
                  >
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{ color: "white", fontWeight: "bold" }}
                      ></Typography>
                    </Box>
                    <Box style={{ textAlign: "left" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "white",
                          pb: 2,
                          fontFamily: "Georgia",
                          fontStyle: "italic",
                          fontWeight: "600",
                          textAlign: "left",
                          margin: "5px",
                          fontSize: "20px",
                        }}
                      >
                        <ul>
                          <li> {data.title}</li>
                        </ul>
                      </Typography>
                      <Typography
                        variant="body"
                        style={{
                          color: "white",
                          fontWeight: "600",
                          textAlign: "left",
                          fontStyle: "italic",
                        }}
                      >
                        <ul> {data.dis}</ul>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Choose;
