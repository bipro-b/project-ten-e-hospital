import React from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const Meet = () => {
    const { user } = useAuth();
    return (
        <div>
            <Header></Header>
            <h2>Hey {user?.displayName}</h2>
            <img src={user?.photoURL} alt="" />
            <h3>Now join the bellow link</h3>
            <h4>Google Meet:<span style={{ color: 'blue' }}>https://meet.google.com/ugb-yazv-zyc</span> </h4>
            <h4>Zoom link : <span style={{ color: 'blue' }}>https://zoom.us/j/2630858591?pwd=RmxIVm1wbVkrb29aaHZpdXBGYW9MZz09
            </span>

            </h4>
            <Footer></Footer>
        </div>
    );
};

export default Meet;