import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmenrtBanner from './AppoinmenrtBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <AppoinmenrtBanner date={date} setDate={setDate}></AppoinmenrtBanner>
            <AvailableAppoinment date={date}></AvailableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;