import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import logo from '../images/logo.png';

const NavBar = () => {
  
  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top" >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/" style={{color: 'white'}}>Expresso Code</Navbar.Brand>
          <Nav.Link href="/posts">All Posts</Nav.Link>
          <Button variant="outline-secondary">Log In</Button>{' '}
          <Button variant="secondary">Sign Up</Button>{' '}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;