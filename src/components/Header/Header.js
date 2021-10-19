

import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink,} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Header.css';
const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div className="mb-5">
        <Navbar className="header-navbar fixed-top" collapseOnSelect expand='lg' variant="light"  >
    <Container>
    <Navbar.Brand href="#home" className="brand-name">Power Fitness</Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
    <NavLink to="/home" className="nav-link">Home</NavLink>
      <NavLink to="/services" className="nav-link">Services</NavLink>
      <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
      {user?.email? 
        <Button onClick={logOut} variant="light">LogOut</Button>:
        <NavLink to="/login" className="nav-link">Login</NavLink>
        }
      <Navbar.Text>
        Signed in as: <br /> <a href="#login">{user?.displayName}</a>
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