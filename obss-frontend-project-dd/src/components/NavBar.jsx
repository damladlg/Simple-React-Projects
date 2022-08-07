import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" style={{ color: "#5CB85C" }}>
          conduit
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/login">
              Sign in
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/signup">
              Sign up
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/newArticle">
              New Article
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/settings">
              Settings
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/profile">
              User
            </Nav.Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
