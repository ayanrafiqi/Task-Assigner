import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link}>Task Assigner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {!userInfo && (
                <Nav.Link as={Link} to="/">
                  Login
                </Nav.Link>
              )}
              {userInfo && userInfo.username === "admin" ? (
                <>
                  <Nav.Link as={Link} to="/admin">
                    Create User
                  </Nav.Link>
                  <Nav.Link as={Link} to="/users">
                    Users
                  </Nav.Link>
                  <Nav.Link onClick={logoutHandler}>Log out</Nav.Link>
                </>
              ) : (
                userInfo && (
                  <>
                    <Nav.Link as={Link} to="/profile">
                      Hello {userInfo.username}
                    </Nav.Link>

                    <Nav.Link onClick={logoutHandler}>Log out</Nav.Link>
                  </>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
