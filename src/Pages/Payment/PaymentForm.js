/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Autocomplete,
  Button,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import Backdrop from "@mui/material/Backdrop";

import useAuth from "../../Hooks/useAuth";
import { Box } from "@mui/system";

import CartCalculation from "../../Hook/UseCartCallculation";
import axios from "axios";
// import Cart from "../../Components/Cart";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Header from "../../Shared/Header/Header";
// import CartDrawer from '../../Components/CartDrawer';
import "./PaymentForm.css";
import { countries } from "./CountryData";
import { baseUrl } from "../../constants/urls";

const PaymentFrom = () => {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const {date}=props.date
  const { cartProducts, grandtotal } = CartCalculation();
  const [currency, setCurrency] = useState();
  const [work, setWork] = useState([]);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // useEffect(()=>{

  // },[])

  useEffect(() => {
    reset({
      cus_name: user.displayName,
      cus_email: user.email,
      date: new Date().toLocaleDateString(),
    });
  }, [reset, user.displayName, user.email]);

  const onSubmit = (data) => {
    const paymentData = {
      ...data,
      total_amount: grandtotal,
      cartProducts: [...cartProducts],
      status: "Pending",
    };
    axios
      .post(baseUrl+"/init", paymentData)
      .then((res) => {
        window.location.replace(res?.data);
        localStorage.removeItem("productCart");
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch("Currency.json")
      .then((res) => res.json())
      .then((data) => setCurrency(data));
  }, []);

  const fetchData = () => {
    fetch(baseUrl+"/postBuyer")
      .then((res) => res.json())
      // .then(data => setWork(data))
      .then((data) => {
        setWork(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleOnchange = (e) => {
    if ((e.target.value = "weekly")) {
      this.setState({
        disabled: true,
      });
    }
  };

  return (
    <div>
      {/* <Header></Header> */}

      <Box>
        {/* <h1>{date}</h1> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 8 }}
            className="newform text-white"
          >
            <Grid item xs={4} sm={4} md={4} className="newform text-white">
              <TextField
                label="Full Name"
                variant="filled"
                // className="newform"
                color="primary"
                className="text-white"
                // style={{color:"white !important"}}
                focused
                size="small"
                fullWidth
                {...register("cus_name", { required: true })}
              />

              {/* <span className="text-white"> */}
              {errors.cus_name && (
                <span className="text-white">This field is required</span>
              )}
              {/* </span> */}
            </Grid>
            <Grid item xs={4} sm={4} md={4} className="text-white">
              <TextField
                label="Your Email"
                color="primary"
                variant="filled"
                className="text-white"
                fullWidth
                focused
                size="small"
                {...register("cus_email", { required: true })}
              />
              {errors.cus_email && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <TextField
                label="Date"
                color="primary"
                variant="filled"
                fullWidth
                focused
                size="small"
                {...register("date", { required: true })}
              />
              {errors.date && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Autocomplete
                id="country-select-demo"
                size="small"
                disableClearable
                options={currency}
                autoHighlight
                getOptionLabel={(option) => option.code}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    label="Currency"
                    color="primary"
                    variant="filled"
                    fullWidth
                    focused
                    size="small"
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                    {...register("currency", { required: true })}
                  />
                )}
              />
              {errors.currency && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <TextField
                label="Address"
                color="primary"
                variant="filled"
                fullWidth
                focused
                size="small"
                {...register("cus_add1", { required: true })}
              />
              {errors.cus_add1 && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Autocomplete
                id="country-select-demo"
                options={countries}
                fullWidth
                autoHighlight
                size="small"
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    label="County"
                    color="primary"
                    variant="filled"
                    fullWidth
                    focused
                    size="small"
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                    {...register("cus_country", { required: true })}
                  />
                )}
              />
              {errors.cus_country && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <TextField
                label="City"
                color="primary"
                variant="filled"
                fullWidth
                focused
                size="small"
                {...register("cus_city", { required: true })}
              />
              {errors.cus_city && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <TextField
                label="State"
                color="primary"
                variant="filled"
                fullWidth
                focused
                size="small"
                {...register("cus_state", { required: true })}
              />
              {errors.cus_state && <span>This field is required</span>}
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <TextField
                label="Post Code"
                color="primary"
                variant="filled"
                type="number"
                fullWidth
                focused
                size="small"
                {...register("cus_postcode", { required: true })}
              />
              {/* {errors.cus_state && <span>This field is required</span>} */}
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <Autocomplete
                id="country-select-demo"
                size="small"
                freeSolo
                disableClearable
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.phone}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    label="Phone"
                    color="primary"
                    variant="filled"
                    fullWidth
                    focused
                    size="small"
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                    {...register("cus_phone", { required: true })}
                  />
                )}
              />
              {errors.cus_phone && <span>This field is required</span>}
            </Grid>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            {/* <TextField */}

            {/* schedule design  */}
            {/* /> */}

            {/* {errors.cus_postcode && <span>This field is required</span>} */}
          </Grid>
          <Toolbar />

          {/* schedule        */}

          <Button
            className="buttons-new mt-5"
            style={{
              background: "#032831",
              color: "white",
              marginBottom: "100px",
              padding: "10px 20px",
              fontSize: "20px",
            }}
            type="submit"
            sx={{ width: "50%" }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default PaymentFrom;
