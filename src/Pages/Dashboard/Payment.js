import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L26jvB60Q33shzCF5XRhUE3dReqFs5nl26BnGDa4UxYwG4qn35kYy1TFIUOj09Dt4ICCeROooGYd448ELYHt4hH0017VNCB22')

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appoinment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
                    <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                        <div class="card-body">
                            <p className="text-success font-bold">{appoinment.patientName}</p>
                            <h2 class="card-title">Pay for: {appoinment.treatment}</h2>
                            <p>Your appoinment: <span className='text-orange-700'>{appoinment.date}</span> at {appoinment.slot}</p>
                         <p>Please pay: ${appoinment.price}</p>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                        </div>
                    </div>
                </div>
            
    );
};

export default Payment;