import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div>
             <Header></Header>
             <Banner></Banner>
             <Services></Services>
             <Pricing></Pricing>
             <About></About>
          
        </div>
    );
};

export default Home;