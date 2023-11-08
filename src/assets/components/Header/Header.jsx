import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <>
      {/* <!--navbar--> */}
      <Navbar className="fixed-top " collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <span className="fw-bold text-secondary">
              <i className="bi bi-book-half"></i>
              Knowledge Cafe
            </span>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="align-items-center">
              <Nav.Link href="/about Us">About Us</Nav.Link>
              <Nav.Link href="/reviews">Reviews</Nav.Link>
              <Nav.Link href="/getInTouch">Get in Touch</Nav.Link>
              <Nav.Link className="ms-2 d-none d-md-inline" href="#pricing">
              <img
                  className="user rounded-circle"
                  src="https://placebeard.it/250/250"
                  alt=""
                />
              </Nav.Link>
             
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
