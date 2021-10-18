import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Header.css';
const Header = () => {
    return (
        <div>
              <Navbar bg="dark" variant="light" fixed="top" >
    <Container>
    <Navbar.Brand href="#home">Power fiteness</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <NavLink to="/home">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
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