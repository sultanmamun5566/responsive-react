import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { id,name, img, price, time } = service;
    return (
        <div className='col-lg-4 col-sm-6 col-12'>
            <div className='service'>
                
            <img className='img' src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price:{price}</h5>
            <p>time:{time}</p>
                <Link to={`/booking/${id}`}>
                <button className='btn btn-warning'>book {name.toLowerCase()}</button>
                </Link>
                
            
            </div>
        </div>
    );
};

export default Service;