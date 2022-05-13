import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                  <h3 className='text-xl text-primary font-bold'>
                      Appoinment
                  </h3>
                  <h2 className='text-3xl text-white'>
                      Make an Appinment Today
                  </h2>
                  <p className='text-white'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus accusantium tenetur ullam blanditiis sit quam quasi tempora! Aliquam incidunt accusamus, eaque dolor aspernatur illum hic, reprehenderit optio assumenda ullam ipsa aperiam pariatur tempore, temporibus sapiente laborum quo rem consequuntur eveniet.
                  </p>
                  <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;