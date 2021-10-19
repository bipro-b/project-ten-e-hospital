
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Your email" />
                    <br />
                    <input type="password" placeholder="Your password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john ? <Link to="/register">create your Account.</Link></p>

                <div>...............or.....................</div>
                <button onClick={handleGoogleLogin} className="btn btn-primary">
                    Google Sign In
                </button>
            </div>

        </div>
    );
};

export default Login;
