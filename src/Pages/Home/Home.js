import React from 'react';
import Banner from './Banner';
import ContractUs from './ContractUs';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import ServiceBanner from './ServiceBanner';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <ServiceBanner></ServiceBanner>
           <MakeAppoinment></MakeAppoinment>
           <Testimonials></Testimonials>
           <ContractUs></ContractUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;