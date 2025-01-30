import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../../ComponentCart/Cart";
import { CartContext } from "../../contexts/CartContext";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
// import Cart from '../../Components/Cart';
// import { CartContext } from '../../Context/CartContext';

const OrderReview = () => {
  const [cart, setCart] = useContext(CartContext);
  let navigate = useNavigate();

  const handleRemoveToCart = (id) => {
    const getDb = localStorage.getItem("productCart");
    const removeCartParse = JSON.parse(getDb);
    const newCart = removeCartParse.filter((product) => product._id !== id);
    localStorage.setItem("productCart", JSON.stringify(newCart));
    setCart(() => newCart);
  };

  const handlePaymentGoToPage = () => {
    return navigate("/payment");
  };

  return (
    <div style={{ background: "black" }}>
      <Header></Header>

      <Container>
        <br />
        <Grid container spacing={2} columns={{ xs: 12, sm: 6, md: 6 }}>
          <Grid item xs={12} sm={3} md={3}>
            {cart.map((cart) => (
              <Box sx={{ pb: 3 }} key={cart._id}>
                <Paper
                  sx={{
                    p: 1,
                    margin: "auto",
                    maxWidth: 500,
                    flexGrow: 1,
                    background: "#032831",
                    boxShadow: "0px 14px 22px rgb(42 135 158 / 30%)",
                  }}
                >
                  <Grid
                    container
                    spacing={2}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={2} sm={4} md={7}>
                      <CardMedia
                        component="img"
                        sx={{ objectFit: "cover", height: 200, width: "200" }}
                        alt="complex"
                        src={cart?.img}
                      />
                    </Grid>
                    <Grid item xs={2} sm={4} md={5} pl={2} my={3}>
                      <Box style={{ textAlign: "left" }}>
                        <Typography
                          variant="h6"
                          sx={{ fontSize: "12px", fontWeight: 900 }}
                        >
                          {cart?.bookName}
                        </Typography>

                        <br />

                        <Typography variant="body">
                          <span style={{ fontWeight: 700, color: "white" }}>
                            {" "}
                            Product:{" "}
                          </span>
                          <span style={{ color: "white" }}>
                            {" "}
                            {cart?.productName}
                          </span>
                        </Typography>
                        <br />
                        <Typography variant="body">
                          <span style={{ fontWeight: 700, color: "white" }}>
                            {" "}
                            Price:
                          </span>
                          <span style={{ color: "white" }}>
                            {" "}
                            {cart?.ProductPrice}
                          </span>
                          {/* {cart?.ProductPrice} */}
                        </Typography>
                        <br />
                        <Typography variant="body">
                          <span style={{ fontWeight: 700, color: "white" }}>
                            {" "}
                            Quantity:
                          </span>
                          <span style={{ color: "white" }}>
                            {" "}
                            {cart?.quantity}
                          </span>
                          {/* {cart?.quantity} */}
                        </Typography>
                      </Box>

                      <Button
                        style={{
                          textAlign: "left",
                          marginLeft: "-120px",
                          color: "white",
                        }}
                        onClick={() => handleRemoveToCart(cart._id)}
                        color="error"
                      >
                        Remove
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} sm={3} md={3} style={{ backgroundColor: "white" }}>
            <Cart style={{ backgroundColor: "#032831" }}>
              <Button
                onClick={handlePaymentGoToPage}
                sx={{
                  width: 1,
                  backgroundColor: "#032831",
                  color: "white",
                  marginRight: "10px",
                }}
              >
                Order Now
              </Button>
            </Cart>
          </Grid>
        </Grid>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default OrderReview;
