import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import logo from "../images/logo.png";
import { isAuthenticated, logOut } from "../services/authService";
import { getTopicsFromApi } from "../services/topicService";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top">
        <Container style={{ marginRight: "5px" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginLeft: "-100px",
            }}
          >
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="/" style={{ color: "#faedcd" }}>
              Expresso Code
            </Navbar.Brand>
          </span>
          <Nav.Link style={{ color: "#faedcd" }} href="/topics">
            Topics
          </Nav.Link>
          <Nav.Link style={{ color: "#faedcd" }} href="/posts">
            All Posts
          </Nav.Link>
          <Nav.Link style={{ color: "#faedcd" }} href="/createpost">
            Create Post
          </Nav.Link>
          <Nav.Link style={{ color: "#faedcd" }} href="/admin">
            Admin Home
          </Nav.Link>
          <span style={{ display: "flex", justifyContent: "flex-end" }}>
            {isAuthenticated() ? (
              <Button
                style={{ backgroundColor: "#d4a373", marginRight: "5px" }}
                variant="dark"
                onClick={logOut}
              >
                Log Out
              </Button>
            ) : (
              <>
                <Button
                  variant="outline-info"
                  href="/login"
                  style={{ marginRight: "5px" }}
                >
                  Log In
                </Button>
                <Button
                  variant="dark"
                  style={{
                    backgroundColor: "#faedcd",
                    color: "black",
                    marginRight: "5px",
                  }}
                  href="/signup"
                >
                  Sign Up
                </Button>
              </>
            )}
          </span>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
