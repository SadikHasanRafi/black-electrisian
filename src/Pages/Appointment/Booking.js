import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import BookingModal from '../BookingModal/BookingModal';
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Booking.css";
import BookingModal from "./BookingModal";
import BookingReview from "./BookingReview/BookingReview";
const Booking = ({ booking, date }) => {
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpens = () => setOpens(true);
  const handleClose = () => setOpen(false);
  const handleCloses = () => setOpens(false);
  const { name, time, space, price, specialist, img, location, _id, expert } =
    booking;

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className="backgroundDesig" sx={{ py: 3 }} elevation={10}>
          <div className="photo">
            <div className="photoShops">
              {/* <img height="200" width="280" style={{borderRadius:"10px", marginTop:"-30px"}} src={img}></img> */}
            </div>
          </div>
          <Box style={{ textAlign: "left", marginLeft: "20px" }}>
            {/* color:'info.main'  */}
            <Typography
              sx={{ fontWeight: 700, marginTop: "5px", fontSize: "18px" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Name : {name}
            </Typography>
            <Typography
              sx={{ fontWeight: 700, marginTop: "5px", fontSize: "18px" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              specialist : {expert}
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: "700", fontSize: "18px" }}
              gutterBottom
              component="div"
            >
              Time : {time}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", fontSize: "18px" }}
              gutterBottom
              component="div"
            >
              Price : TK.{price}
            </Typography>
            {/* <Typography variant="caption" sx={{fontWeight:"700"}} gutterBottom component="div">
           {space} SPACES AVAILABLE
        </Typography> */}
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", fontSize: "18px" }}
              gutterBottom
              component="div"
            >
              location : {location}
            </Typography>

            <Box
              sx={{ display: "flex", justifyContent: "", marginTop: "10px" }}
            >
              <a
                // to={`/payment`}
                style={{ textDecoration: "none", textAlign: "" }}
              >
                {/* <Button
                     className='btn-style download-btn '
                     style={{textAlign:"left"}}
                    size="small">
                      Check
                    </Button> */}
              </a>
              <a
                // to={`/bookDetails/${single._id}`}
                // to={`/bookDetails/${single._id}`}
                className="details-show"
                style={{
                  textDecoration: "none",
                  marginRight: "",
                  marginTop: "7px",
                }}
              >
                <NavLink
                  to={`/Details/${_id}`}
                  className="detailshowss mt-5"
                  style={{
                    padding: "10px 10px",
                    textAlign: "",
                    marginLeft: "-50px",
                    borderRadius: "5px !important",
                  }}
                  size="small"
                >
                  Details
                </NavLink>
              </a>

              <Button
                className="btn-style download-btn details-show ms-2"
                style={{ padding: "8px 10px" }}
                onClick={handleOpen}
                variant=""
              >
                Appointment
              </Button>
              <Button
                className="btn-style download-btn details-show ms-2"
                style={{ padding: "8px 10px" }}
                onClick={handleOpens}
                variant=""
              >
                Review
              </Button>
            </Box>
          </Box>

          {/* <Button onClick={handleOpen} variant="contained">Book Appointment</Button> */}
        </Paper>
      </Grid>

      <Box className="">
        <BookingModal
          booking={booking}
          date={date}
          handleClose={handleClose}
          open={open}
        ></BookingModal>
      </Box>
      <Box className="">
        <BookingReview
          booking={booking}
          date={date}
          handleCloses={handleCloses}
          opens={opens}
        ></BookingReview>
      </Box>
    </>
  );
};

export default Booking;
