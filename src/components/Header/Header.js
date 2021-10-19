import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Header.css';
const Header = () => {
    return (
        <div>
        <Navbar className="header-navbar fixed-top" expand='sm' variant="light"  >
    <Container>
    <Navbar.Brand href="#home" className="brand-name">Power Fitness</Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
    <NavLink to="/home" className="nav-link">Home</NavLink>
      <NavLink to="/services" className="nav-link">Services</NavLink>
      <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
      <Navbar.Text>
        Signed in as: <br /> <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>

        <>
       
        </>
        </div>
    );
};

export default Header;