import React, { useEffect, useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

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
        <>
            <Header></Header>
            <div className="mx-auto">
                <Container>
                    <Col className="ms-5">
                        <Card className="card h-100 w-50">
                            <Card.Img style={{ height: '250px' }} variant="top" src={contactDetails?.img} />
                            <Card.Body>
                                <Card.Title>Diseases: {contactDetails?.diseases}
                                </Card.Title>
                                <p> {contactDetails?.description}</p>
                                <p> cell phone: {contactDetails?.phone}</p>
                                <Link to="/enroll"> <button style={{ alignItems: 'center', marginLeft: "40px" }} className="btn btn-primary ms-40px">Enroll Now</button></Link>
                            </Card.Body>



                        </Card>


                    </Col>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Contact;