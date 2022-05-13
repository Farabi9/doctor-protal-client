import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        
            <div class="hero min-h-screen px-12">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda <br /> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary-500 to-primary-500">Get Started</button>
                    </div>
                </div>
            </div>
       
    );
};

export default Banner;