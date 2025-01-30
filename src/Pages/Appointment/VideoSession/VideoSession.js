// import React from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../../Shared/Footer/Footer';
// import Header from '../../Shared/Header/Header';
// import './VideoSession.css'
// const VideoSession = () => {

//     const [roomcode,setRoomcode]=useState("");
//     const navigate=useNavigate();

//     const handleFormsubmit=(e)=>{
//         e.preventDefault();
//         navigate(`/room/${roomcode}`)
//     }
//     return (
//         <div className='videosession' style={{background:""}}>
//       {/* <Header></Header> */}

//    <div className="container">
//    <div className='row'>
//         <div className="col-md-7 mt-5">
//         <img height="350" width="450" src="https://png.pngtree.com/png-vector/20200408/ourlarge/pngtree-doctor-attending-video-call-in-telemedicine-png-image_2178299.jpg"/>
//         </div>
//         <div className="col-md-5 new-video">
//         <form
//             onSubmit={handleFormsubmit}
//              className='sessions'>
//                 <div className='mt-5'>
//                     <label className='rooms mb-4'>Enter room code</label>
//                     <input
//                     value={roomcode}
//                     onChange={(e)=> setRoomcode(e.target.value)}
//                      type="text" required placeholder="Enter room code"/>
//                 </div>

//                 <button className='mt-3 btn-submit' type='submit'>Enter Room</button>
//             </form>
//         </div>
//       </div>
//    </div>

//             {/* <Footer></Footer> */}
//         </div>
//     );
// };

// export default VideoSession;
