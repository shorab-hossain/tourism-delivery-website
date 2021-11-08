import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import ('./Register.css')

const Register = () => {
    const history = useHistory();
    const handleSubmit = e =>{
        e.preventDefault()
        history.push('/SingleUser')
    }
    return (
        <div className="Login-form">
            <div>
                <h1>Register: Create Account</h1>
                <form  onSubmit={handleSubmit}>
                    <input type="email" className="px-4 mb-3  py-2 rounded shadow" placeholder="Your Email" /><br />
                    <input className="px-4 mb-3  py-2 rounded shadow" type="Password" placeholder="your Password" /><br />
                    <input className="px-4 mb-3  py-2 rounded shadow" type="Password" placeholder="Re-enter password" /><br />
                    <input className="bg-primary text-light rounded py-2 px-4 mb-3 " type="submit" value="submit" />
                </form>
                <p>Already have an account?<Link to="/Login">Login</Link></p>
                <div className="mb-3">-----------or--------</div>
                <button className='btn-warning rounded py-2 mb-3'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;