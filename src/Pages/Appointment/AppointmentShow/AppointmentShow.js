import React, { useEffect, useState } from "react";
// import useAuth from '../../../hooks/useAuth';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AppointmentShow = ({ date }) => {
  console.log(date);
  const { user } = useAuth();
  const [userAppointment, setUserAppointment] = useState([]);

  useEffect(() => {
    const url = `https://black-electrisian.onrender.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserAppointment(data);
        console.log(data);
      });
  }, [date]);
  return (
    <div>
      <h3>Appointment: {userAppointment.length}</h3>

      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Service</TableCell>
              <TableCell align="right">Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userAppointment.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.serViceName}</TableCell>
                <TableCell align="right">
                  {row.payment ? (
                    "paid"
                  ) : (
                    <Link to={`/dashboard/payment/${row._id}`}>
                      {" "}
                      <button>Pay</button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AppointmentShow;
