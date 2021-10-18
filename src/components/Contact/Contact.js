import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Contact = () => {
    // const { serviceId } = useParams();
    // const [details, setDetails] = useState(' ');
    // const [contactDetails, setContactDetails] = useState(' ');
    // useEffect(() => {
    //     fetch('/services.json')
    //         .then(res => res.json())
    //         .then(data => setDetails(data));
    // }, [])


    // useEffect(() => {
    //     const foundDoctor = details.filter(
    //         (service) => service.serviceId === serviceId
    //     );
    //     setContactDetails(foundDoctor);
    // }, [])

    return (
        <div>
            <h2>From contact  </h2>
        </div>
    );
};

export default Contact;