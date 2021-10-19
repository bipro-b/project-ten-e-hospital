import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Contact = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [contactDetails, setContactDetails] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    // console.log(details);
    // const b = details.filter(sv => sv.id === serviceId);
    // console.log(b[0]);
    // const found = details.filter(serv => serv.id === serviceId);
    useEffect(() => {
        const foundDoctor = details.find(
            serv => serv.id === serviceId
        );
        setContactDetails(foundDoctor);
    }, [details, serviceId])
    console.log(contactDetails);
    return (
        <div>
            <h2>From con {contactDetails?.description} </h2>
        </div>
    );
};

export default Contact;