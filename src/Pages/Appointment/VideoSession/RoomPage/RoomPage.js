import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';
const RoomPage = () => {

    const {roomId}=useParams();


    const myMeeting=async (element) =>{
        const appID = 1641399368 ;
        const serverSecret = "d79badfe3578dc6c09edff204041fa1e";
        const kitToken= ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "nuruzaman"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
               },
        })
    }
    return (
       <div style={{background:"black"}}>
        <Header></Header>
         <h3 className='mt-5 mb-5' style={{color:"white", fontSize:"25px"}}>This is the video call Session</h3>
        <div>
            <div ref={myMeeting} />
        </div>

        <Footer></Footer>
       </div>
    );
};

export default RoomPage;