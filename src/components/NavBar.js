import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import logo from "../images/logo.png";
import { logOut } from "../services/authService";
import { getTopicsFromApi } from "../services/topicService";

const NavBar = () => {
  const [topics, setTopics] = useState([]);
  
  useEffect(() => {
    getTopics();
  }, []);

  const getTopics = async () => {
    const response = await getTopicsFromApi();
    setTopics(response.data);
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top">
        <Container style={{marginRight: '5px'}}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginLeft: '-100px'
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
          <NavDropdown
            style={{ color: "white" }}
            title="Topics"
            id="basic-nav-dropdown"
          >
          <NavDropdown.Item 
          href='/topics'>
            All Topics
          </NavDropdown.Item>
            {topics &&
              topics.map((topic) => {
                return (
                  <NavDropdown.Item
                    key={topic._id}
                    href={`/topic/${topic._id}`}
                  >
                    {topic.name}
                  </NavDropdown.Item>
                );
              })}
          </NavDropdown>
          <Nav.Link style={{ color: "#faedcd" }} href="/posts">
            All Posts
          </Nav.Link>
          <Nav.Link style={{ color: "#faedcd" }} href="/createpost">
            Create Post
          </Nav.Link>
          <Nav.Link style={{ color: "#faedcd" }} href="/admin">
            Admin Home
          </Nav.Link>
          <span style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button variant="outline-info" href="/login" style={{marginRight: '5px'}}>
              Log In
            </Button>{" "}
            <Button
              variant="dark"
              style={{ backgroundColor: "#faedcd", color: "black", marginRight: '5px' }}
              href="/signup"
            >
              Sign Up
            </Button>{" "}
            <Button
              style={{ backgroundColor: "#d4a373", marginRight: '5px' }}
              variant="dark"
              onClick={logOut}
            >
              Log Out
            </Button>{" "}
          </span>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
