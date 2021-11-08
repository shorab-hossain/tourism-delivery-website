import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import ('./Login.css')

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="Login-form">
            <div className="p-5">
                <h1>Please Login</h1>
                <form >
                    <input type="email" className="px-4 mb-3  py-2 rounded shadow" placeholder="Your Email" /><br />
                    <input className="px-4 mb-3  py-2 rounded shadow" type="Password" placeholder="your Password" /><br />
                    <input className="bg-primary text-light rounded py-2 px-4 mb-3 " type="submit" value="submit" />
                </form>
                <p>New to User? <Link to="/register">Create Account</Link> </p>
                <div className="mb-3">-----------or--------</div>
                <button onClick={signInUsingGoogle} className='btn-warning rounded py-2'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;