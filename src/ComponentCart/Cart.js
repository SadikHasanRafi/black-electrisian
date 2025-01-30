import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import CartCalculation from "../Hook/UseCartCallculation";
// import CartCalculation from '../Hooks/UseCartCalculation';

const Cart = (props) => {
  const { shipping, tax, totalQuantity, total, grandtotal, cartProducts } =
    CartCalculation();
  console.log(cartProducts);

  return (
    <List sx={{ pt: 0 }}>
      <ListItem
        className="me-5"
        sx={{ backgroundColor: "#000", color: "#fff", marginRight: "90px" }}
      >
        <Typography
          className="me-5"
          style={{ marginRight: "10px" }}
          variant="h5"
        >
          Order Summary{" "}
        </Typography>
      </ListItem>
      <Divider />

      <ListItem>
        <Typography style={{ color: "#032831" }}>
          Total Quantity: {totalQuantity}{" "}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography style={{ color: "#032831" }}>
          Total: {total.toFixed(2)} Taka
        </Typography>
      </ListItem>
      <ListItem>
        <Typography style={{ color: "#032831" }}>
          Shipping: {shipping.toFixed(2)} Taka
        </Typography>
      </ListItem>
      <ListItem>
        <Typography style={{ color: "#032831" }}>
          Tax: {tax.toFixed(2)} Taka
        </Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon>
          <Typography style={{ color: "#032831" }}>
            Grand Total: {grandtotal.toFixed(2)} Taka
          </Typography>
        </ListItemIcon>
      </ListItem>
      <ListItem>{props.children}</ListItem>
    </List>
  );
};

export default Cart;
