import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />

                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />


                </form>


                <p>Already have an account?<Link to="/login">Google Sign In</Link> </p>
            </div>

        </div>
    );
};

export default Register;