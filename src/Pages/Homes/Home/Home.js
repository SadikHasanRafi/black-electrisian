import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banners from '../Banner/Banners';
import Bonus from '../Bonus/Bonus';
import BuyerProducts from '../BuyerProducts/BuyerProducts';
import Choose from '../Choose/Choose';
import Farmer from '../Electrician/ElectricianDatas';
import HealthyFood from '../NewElectrician/NewElectrician';
import Offer from '../Offer/Offer';
import Patner from '../Patner/Patner';
import Categories from './Categories/Categories';
import TrandingProduct from '../TrandingProduct/TrandingProduct';
import TrandingData from '../TrandingProduct/TrandingData';
import Banner from '../Banner/Banner';

import ElectricianDatas from '../Electrician/ElectricianDatas';
// import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div style={{background:"black"}}>
            <Header></Header>
            <Banners></Banners>
            <Bonus></Bonus>
            <BuyerProducts></BuyerProducts>
            <Categories></Categories>
            <HealthyFood></HealthyFood>
            <TrandingData></TrandingData>
            <div className='mt-5'>
            <Choose></Choose>
            </div>
            <ElectricianDatas></ElectricianDatas>
            <Offer></Offer>
            {/* <Patner></Patner> */}
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;