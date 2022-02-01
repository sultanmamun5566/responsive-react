import React from 'react';
import { useParams } from 'react-router-dom';


const Booking = () => {
    const {serviceId}=useParams()
    console.log(serviceId);
    return (
        <div>
            <h1>This ius booking: {serviceId} </h1>
        
        </div>
    );
};

export default Booking;