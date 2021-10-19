import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const goBackHandle = () => {
        history.push(`/home`);

    }
    return (
        <div>
            <h2>4O4</h2>
            <h3>Page not found</h3>
            <br />
            <button onClick={goBackHandle} className="btn btn-primary" >Go back </button>
        </div>
    );
};

export default NotFound; <h2>4O4</h2>