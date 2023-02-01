import React, { useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";


function TopNav({ activeTab, changeActiveTab}) {
    
    
    useEffect(() => {
        document.title = (activeTab);
    });

    return (
        <Container id="NavContainer" className="NavContainer">
          <Navbar className="NavBar" expand="lg">
            <Row>

            <Navbar.Brand
              className="NavBrand"
              onClick={() => changeActiveTab("About")}
              href="#about"
              >
              Hibbard & Rosa Architects
            </Navbar.Brand>
            <Navbar.Toggle
              className="navToggle navBtn"
              aria-controls="basic-navbar-nav"
              />
              </Row>

              <Row>

            <Navbar.Collapse className="navToggle" id="basic-navbar-nav">
              <Nav className="me-auto NavLinks">
                <Nav.Link
                  onClick={() => changeActiveTab("Services")}
                  href="#Services"
                  className={activeTab === "Services" ? "active-tab" : "not-active"}
                >
                  Our Services
                </Nav.Link>
                <Nav.Link
                  onClick={() => changeActiveTab("About")}
                  href="#about"
                  className={activeTab === "About" ? "active-tab" : "not-active"}
                  >
                  About
                </Nav.Link>
                <Nav.Link
                  onClick={() => changeActiveTab("Contact")}
                  href="#contact"
                  className={activeTab === "Contact" ? "active-tab" : "not-active"}
                  >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
                    </Row>
          </Navbar>
        </Container>
    );
};

export default TopNav;