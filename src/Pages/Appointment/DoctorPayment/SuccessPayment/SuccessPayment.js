import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory, useNavigate } from "react-router";
import swal from "sweetalert2";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import "./SuccessPayment.css";
import Header from "../../../Shared/Header/Header";
import Footer from "../../../Shared/Footer/Footer";
import { baseUrl } from "../../../../constants/urls";

const SuccessPayment = () => {
  const { id } = useParams();
  console.log(id);
  let navigate = useNavigate();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/ordersdata/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [id]);

  const valid = () => {
    console.log("valid");
    const datas = {
      tran_id: id,
      val_id: product?.val_id,
    };
    axios
      .post(`${baseUrl}/validateData`, datas)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert('Thank you. your payment successfully');
          swal("Good job!", "Your payment successfully !", "success");
          navigate.push("/");
        }
      });
    // fetch(`https://doctor-backends.up.railway.app/validate`,{
    //     method:'POST',
    //     headers:{
    //         'content-type':'application.json'
    //     },
    //     body:JSON.stringify(datas)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data)
    // })
  };

  return (
    <div>
      <Header></Header>

      <div>
        <h1>
          You have <span className="ment">payment</span> paid{" "}
        </h1>

        <div>
          {/* start  */}

          <Container>
            {/* <Grid item xs={2} sm={4} md={4}> */}
            <Card
              className="allow"
              sx={{
                minWidth: 275,
                border: 0,
                boxShadow: 0,
                background: "rgb(66, 78, 78)",
                color: "white",
              }}
            >
              <CardContent style={{ textAlign: "" }}>
                {/* <Typography variant="h5">
           {country.Active}
        </Typography>
         */}
                <h1>Customer Name: {product?.cus_name}</h1>

                <h3>Customer Email: {product?.cus_email}</h3>
                <h4>Service Name: {product?.product_name}</h4>
                {/* <h1>{product?.cus_name}</h1> */}
                <h4>Total Amount: {product?.total_amount}</h4>
                <h4>Total Amount: {product?.time}</h4>
                <h4>Total Amount: {product?.date}</h4>

                <button onClick={valid} className="but">
                  {" "}
                  Payment Confirm{" "}
                </button>
              </CardContent>
              <CardActions></CardActions>
            </Card>

            {/* </Grid> */}
          </Container>

          {/* end  */}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SuccessPayment;
