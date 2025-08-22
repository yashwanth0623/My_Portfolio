import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-custom" role="navigation" aria-label="Main Navigation">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          M YASHWANTH
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" className="navbar-toggle-custom" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
