import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Services></Services>
             <Pricing></Pricing>
        </div>
    );
};

export default Home;