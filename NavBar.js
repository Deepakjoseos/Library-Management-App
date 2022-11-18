import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';  
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar className='navbar navbar-dark bg-primary' expand="md">  
    <Container>  
    <NavLink className="navbar-brand fw-bold fs-4 navbar-logo" to="/" exact><Navbar.Brand href="#home">Library Management System</Navbar.Brand></NavLink>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="ms-auto px-1">  
        <NavLink className="nav-link" to="/" exact><Button className="px-3 me-2" variant="dark">Login</Button>  </NavLink>        
        <NavLink className="nav-link" to="/" exact><Button className="px-2 me-2" variant="dark">Sign-up</Button>  </NavLink>        
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
  )
}

export default NavBar