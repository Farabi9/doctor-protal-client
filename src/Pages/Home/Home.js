import React from 'react';
import Banner from './Banner';
import Info from './Info';
import ServiceBanner from './ServiceBanner';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default Home;