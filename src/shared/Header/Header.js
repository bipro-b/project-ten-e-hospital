import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css"
import logo from '../../images/logo.png';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    }
    const { user, logOut } = useAuth();
    return (
        <div className="header w-100">
            <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' />
                    <img style={{ width: "35px" }} className="position-absolute top-0 start-5" src={logo} alt="" />
                    <Navbar.Brand className="position-absolute top-0 start-50 text-info ">e-Hospital</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
                        <NavLink to="/about" activeStyle={activeStyle}>Our Doctors</NavLink>
                        <NavLink to="/enroll" activeStyle={activeStyle}>Enroll Now</NavLink>
                        {/* <NavLink to="/about" activeStyle={activeStyle}>About Us</NavLink>
                        <NavLink to="/services" activeStyle={activeStyle}>Services</NavLink>
                        <NavLink to="/enroll" activeStyle={activeStyle}>Enroll Now</NavLink> */}
                        {user.email && <span style={{ color: 'white' }}>  {user.displayName} </span>}
                        {
                            user.email ?
                                <button onClick={logOut}>log Out</button> :
                                <NavLink to="/login">Log in</NavLink>
                        }
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;