import React from 'react';
import Header from '../../shared/Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h3>From home </h3>
            <Services></Services>
        </div>
    );
};

export default Home;