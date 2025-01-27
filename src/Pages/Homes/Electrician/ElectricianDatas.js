import React from 'react';
import './ElectricianDatas.css'
const ElectricianDatas = () => {
    return (
        <div>
            <div className="container mb-5 p-3">
                  <h1  className=" mb-5 mt-5 organic" style={{fontStyle: 'italic',fontWeight:"700"}}>We are Professional Electrician</h1>
            <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">

            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle" style={{fontStyle: 'italic'}}>Farmer Name</h2>
              <h6 className="tittle" style={{fontStyle: 'italic'}}>Jamal Hasan</h6>
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src='https://img.freepik.com/premium-photo/electrical-engineer-measures-voltage-current-power-line-with-tester_271853-1240.jpg?w=2000' class="card-img-top" alt="..." />


                          </div>
            </div>

            {/* 2nd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle">Virat Hasan</h2>
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src='https://img.freepik.com/premium-photo/checking-operating-voltage-levels-solar-panel-switchgear-compartment_179755-13199.jpg' class="card-img-top" alt="..." />


                          </div>
            </div>


            {/* 3rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle">Mikel Hossion</h2>
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src='https://blogs.stthom.edu/wp-content/uploads/2022/08/BeYourBold_Blog_Engineering-1024x684.jpg' class="card-img-top" alt="..." />


                          </div>
            </div>
            </div>
                
            </div>
        </div>
    );
};

export default ElectricianDatas;