import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand 
          href="/" 
          className="mx-auto"  
        >
          My Task Tracker Application 
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
