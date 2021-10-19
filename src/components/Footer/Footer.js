import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTwitter } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
const Footer = () => {
    return (
        <div>
      <h1 className="footer-title">POWER FITNESS</h1>
    <Navbar className="footer-nav" expand='sm' expand='md' variant="dark">
    <Container>
    <Nav className="mx-auto">
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/services'>SERVICE</NavLink>
      <NavLink to='/pricing'>PRICING</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <NavLink to='/contact'>CONTACT</NavLink>
    </Nav>
    </Container>
  </Navbar>
  <hr className="m-0 bg-light" />
      <div className="bg-black p-5 ">
        <p>Copyright @2021 All Rights Reserved | THis Website is Made by FA RAkib</p>
      </div>
        </div>
    );
};

export default Footer;