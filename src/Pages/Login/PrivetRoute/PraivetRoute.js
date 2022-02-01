import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const PraivetRoute = ({ children }) => {
    const { users, isLoading } = useFirebase();
    if (isLoading) {
        return  <Spinner animation="border" variant="danger" />
    }

    return (
        users.email ? children : <Navigate to='/login'>
            
        </Navigate> 
    );
};

export default PraivetRoute;