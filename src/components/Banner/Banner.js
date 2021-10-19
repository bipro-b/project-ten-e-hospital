import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="row">
                <div className="col-md-6 first-part">
                    <h2>Welcome to</h2>
                    <h2> <span className="text-info">E-Hospital</span> service point.</h2>
                    <h4>Come  here to get better tratement for emergeny 🚨.</h4>
                    <p>Our online hospital platform is for the people who suffer in different diseases and who are not able to come hospital emergency. Scecially the rural people who are not able to go MBBS doctors for those people this platform is very helpful. </p>
                    <h4>We hope you will be safe. </h4>
                    <Link to="/about">
                        <button className="btn btn-primary">About Us</button>
                    </Link>
                </div>
                <div className="col-md-6 second-part">
                    <img className="img img-fluid" src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner; <h3>From banner</h3>