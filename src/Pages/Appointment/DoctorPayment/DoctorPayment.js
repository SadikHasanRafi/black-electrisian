import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {useParams} from 'react-router';
import { Autocomplete, Button, CardMedia, Grid, Paper, TextField, Toolbar, Typography } from "@mui/material";
// import { countries } from "../../";

import useAuth from '../../../Hooks/useAuth';
import { Box } from '@mui/system';
// import useAuth from '../../../../hooks/useAuth';
// import './Payment.css'


const DoctorPayment = () => {
    const{appointmentId}=useParams()
    const [payment,setPayment]=useState({})
    const [currency,setCurrency]=useState()
    const {user} = useAuth();
    const {price,patientName,serViceName,date,time}=payment;
    console.log(payment.price)
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    useEffect(()=>{
       fetch(`https://black-electrisian.onrender.com/appointments/${appointmentId}`)
       .then(res=>res.json())
       .then(data=>setPayment(data))
    },[appointmentId])

    const purchage =()=>{
    
     const order={
      cus_name:patientName,
      cus_email:user.email,
      product_name:serViceName,
      total_amount:price,
      date:date,
      time:time
     }
      // console.log(order);
      fetch(`https://black-electrisian.onrender.com/initPost`, {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(order)
      })
      .then(res=>res.json())
      .then(data=>{
        window.location.replace(data)
      })
    };

    // const onSubmit = (data) => {
    //   const paymentData = {
    //     ...data,
    //     cus_name:patientName,
    //     cus_email:user.email,
    //     product_name:serViceName,
    //     total_amount:price,
    //     cartProducts: [...cartProducts],
    //     status: "Pending",
    //   };
    //   axios
    //     .post('https://black-electrisian.onrender.com/initvalue', paymentData)
    //     .then((res) => {
    //       window.location.replace(res?.data);
    //       // localStorage.removeItem('productCart');
    //     })
    //     .then(data=>console.log(data))
    //     .catch((error) => {
    //       console.log(error);
    //     });
  
    // };

    // useEffect(() => {
    //   fetch("/Currency.json")
    //     .then((res) => res.json())
    //     .then((data) => setCurrency(data));
    // }, []);
  

    return (
        <div>
           <div className='bank'>
           <h2>Please Payment: <span className='nogod'>{patientName}</span></h2>
          <h2>  Price: $<span className='nogod'>{payment.price}</span></h2>
          <h3>Payment <span className='nogod'>Card</span> System</h3>

        {/* {
            payment?.price &&
            <Elements stripe={stripePromise}>
            <CheckoutForm
            payment={payment}
            />
          </Elements>
        } */}
           </div>


        {/* bkash  */}
        <div className='mobiles'>
          <h2>Payment For <span className='nogod'>Mobile</span> Banking: <span className='nogod'>Nogod</span> <span className='nogod'>Bikash</span> <span className='nogod'>Rocket</span></h2>
          <button onClick={purchage} className="kash">Pay Bikash</button>
        </div>
       

{/* start  */}

<div>
<Box>

    

     
{/* <h1>{date}</h1> */}





</Box>
</div>



        </div>
    );
};

export default DoctorPayment;





