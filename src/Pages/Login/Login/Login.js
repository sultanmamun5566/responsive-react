import React from 'react';
import useAuth from '../../../context/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    // const { signInUsingGoogle } = useAuth();
    // const { signInUsingGoogle } = useFirebase();
    const {signInUingGoogle } = useFirebase();


    return (
        <div>
            <h2>plase Login</h2>
            <button onClick={signInUingGoogle} className='btn btn-warning'>Google sign In</button>
        </div>
    );
};

export default Login;