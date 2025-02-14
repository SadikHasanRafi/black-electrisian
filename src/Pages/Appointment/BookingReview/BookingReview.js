import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
// import useAuth from '../../../hooks/useAuth';
import swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Form, Col } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import { baseUrl } from "../../../constants/urls";
// import {  Container } from '@mui/material';
// import './BookingModal.css'
// import useAuth from '../../Hooks/useAuth';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingReview = ({ opens, handleCloses, booking, date }) => {
  const { name, time, price, _id } = booking;
  const { user } = useAuth();
  const newUserInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(newUserInfo);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBooking = (e) => {
    // collect data
    const appointments = {
      ...bookingInfo,
      time,
      price,
      serViceName: name,
      date: date.toLocaleDateString(),
    };
    // console.log(appointments)
    fetch(baseUrl+"/postReview ", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointments),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal(
            "Good job!",
            "Appointment has been Booked successfully !",
            "success",
          );
          handleCloses();
        }
      });

    alert("submit");

    e.preventDefault();
  };

  const handleonBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setBookingInfo(newInfo);
  };

  return (
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
          <Typography
            className="mode"
            id="transition-modal-title"
            variant="h6"
            component="h2"
          >
            {name}
          </Typography>

          <form onSubmit={handleBooking} className="mode">
            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={_id}
              size="small"
            />

            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={user.displayName}
              onBlur={handleonBlur}
              name="patientName"
              size="small"
            />

            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={user.email}
              onBlur={handleonBlur}
              name="email"
              size="small"
            />

            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue="Phone Number"
              onBlur={handleonBlur}
              name="phone"
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue="Comment"
              onBlur={handleonBlur}
              name="comment"
              size="small"
            />

            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />

            {/* <TextField> */}
            <Form.Group
              as={Col}
              controlId="formGridRating"
              style={{
                marginLeft: "104px",
                marginRight: "104px",
                borderRadius: "15px",
                color: "black",
                marginTop: "",
              }}
            >
              <select
                style={{
                  borderRadius: "10px",
                  border: "2px solid black",
                  padding: "",
                }}
                required
                className="form-control shadow-none"
                {...register("rating")}
              >
                <option>Select Rating</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </select>
            </Form.Group>
            {/* </TextField> */}
            <Button className="mode" type="submit" variant="contained">
              Booking
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingReview;
