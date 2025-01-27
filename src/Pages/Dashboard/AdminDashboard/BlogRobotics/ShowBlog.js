import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';
// import useAuth from '../../../../hooks/useAuth';

const ShowBlog = () => {
    const [service,setService]=useState([])
    const{user}=useAuth()
    const[control,setControl]=useState(false)
// const email=user?.email

    useEffect(()=>{
        fetch(`http://localhost:5000/showBlog`)
        .then(res=>res.json())
        .then(data=>{
            setService(data)
        })
    },[])

   

  
    return (
        <div>
            <Header></Header>
            <h1>Blog</h1>
            <div className="container">
                <div className="shadow p-3">

                {
                        service?.map((offers)=>(
                            <div className=" row mb-5 mt-5 col-sm-12 image-card ">
           
                            <div className="col-lg-6">
                               
                                <div class="c">
                                    <h3>{offers?.BlogName}</h3>
                                    <h4>{offers?.Equipment}</h4>
                                    <h6 class="">{offers?.description}.</h6>
                                  
                                 
                                  
                                 
                                </div>
                    
                    
                            </div>
                            <div className="col-lg-6">
                            <img className="image-design" height="280" width="280" src={offers?.img} class="card-img-top" alt="..." />
                            </div>
                        </div>
                        
                       
                        ))
                    }

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShowBlog;