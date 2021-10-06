import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import logo from "../images/logo.png";
import { logOut } from "../services/authService";
import { getTopicsFromApi } from "../services/topicService";

const NavBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics();
  }, [])

  const getTopics = async () => {
    const response = await getTopicsFromApi();
    setTopics(response.data);
  }

  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top">
        <Container>
          <span style={{display: 'flex', alignItems: 'center'}}>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="/" style={{ color: "white" }}>
              Expresso Code
            </Navbar.Brand>
          </span>
          <NavDropdown title="Topics" id="basic-nav-dropdown">
                {topics && topics.map(topic => {
                  return <NavDropdown.Item key={topic._id} href={`/topic/${topic._id}`}>
                    {topic.name}
                  </NavDropdown.Item>
                })}
          </NavDropdown>
          <Nav.Link href="/posts">All Posts</Nav.Link>
          <Nav.Link href="/createpost">Create Post</Nav.Link>
          <Button variant="outline-secondary" href="/login">Log In</Button>{" "}
          <Button variant="secondary" href="/signup">Sign Up</Button>{" "}
          <Button variant="info" onClick={logOut}>Log Out</Button>{" "}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
