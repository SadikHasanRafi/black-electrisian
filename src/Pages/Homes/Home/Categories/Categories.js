// import React from 'react';
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Avatar, Box, Container, Rating, Typography, Paper } from "@mui/material";
// import "./TestimonialSlider.css";
import './Categories.css'

// import required modules
import { FreeMode, Pagination,Autoplay } from "swiper";
import { Link } from "react-router-dom";
// import useAuth from "../../ManyPages/hooks/useAuth";

const Categories = () => {
//  const {user}=useAuth()
//   const [review,setReview]=useState([])
//   useEffect(()=>{
//     fetch('http://localhost:5000/review')
//     .then(res=>res.json())
//     .then(data=>setReview(data))
//   },[])
  return (
    <div data-aos="fade-up" className="container style-cate ">
         <h1 style={{fontSize:"3em" , color: "white", fontWeight:"700",fontStyle: 'italic'}} className="categories-style">Categories</h1>
         <hr className='' style={{  width: '10%', height: '5px', backgroundColor: 'white', display:"inline-block", border:0}} />
     <div className="row">
      <div className="">
      <Swiper
         className="mySwiper"
         slidesPerView={6}
         spaceBetween={30}
         freeMode={true}
         // pagination={{
         //   clickable: true,
         // }}
         autoplay={{
           delay: 2000
         }}
        
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          }}
       
         
         
        
         modules={[FreeMode, Pagination,Autoplay]}
        
       
       
       >



  

  
        
      
 
         
 
         
 
 
 
         <>
        
        
             <div>

              

                <Swiper>


                <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/drill">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://st2.depositphotos.com/12982378/48267/i/450/depositphotos_482674902-stock-photo-cropped-view-workman-electric-drill.jpg'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}> Electric Drill </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>



   {/* 2nd  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/Voltage">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://housing.com/news/wp-content/uploads/2023/04/KAIWEETS-HT100-Non-Contact-Voltage-Tester-Pen-and-KAIWEETS-VT500-Voltage-Tester_-12V-300V-Non-Contact-and-Contact-Voltage-Pen-with-NCV-review-The-Gadgeteer.png'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}> Voltage Tester </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 3rd  */}


   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/light">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://images.unsplash.com/photo-1532007271951-c487760934ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpZ2h0JTIwYnVsYnxlbnwwfHwwfHx8MA%3D%3D'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}> Light </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 4th  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/fan">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://img.freepik.com/free-photo/ceiling-fan-decoration-interior-room_74190-8490.jpg'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}> Fan </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 5th  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
<Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/multimeter">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://t3.ftcdn.net/jpg/01/86/70/44/360_F_186704450_FgOmsNEU5T5nxVuREZFZ3DK4ywjeRAQX.jpg'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}>  Multimeter </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 6th  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
<Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/electric">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://thumbs.dreamstime.com/b/electric-cables-tar-fuse-box-there-lot-electrical-74116773.jpg'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}> electrical </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


           


        




          







          





             
             {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}

                </Swiper>
             {/* <h1>{reviews._id}</h1> */}
           
             </div>
          
         </>
      
       </Swiper>
      </div>

     </div>
      
    </div>
  );
};

export default Categories;