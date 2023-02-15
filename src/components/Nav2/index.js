import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import "./style.css";

function Nav2({ activeTab, changeActiveTab }) {
  useEffect(() => {
    document.title = activeTab;
  });

  return (
    
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Row>
          <Navbar.Brand href="#about" onClick={() => changeActiveTab("About")}>
            Hibbard & Rosa Architects
          </Navbar.Brand>
        </Row>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navCollapse">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => changeActiveTab("About")}
              href="#about"
              className={activeTab === "About" ? "active-tab" : "not-active"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => changeActiveTab("Contact Us")}
              href="#contact"
              className={activeTab === "Contact" ? "active-tab" : "not-active"}
            >
              Contact Us
            </Nav.Link>
            <NavDropdown title="Our Services" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => changeActiveTab("Residential")}
                href="#residential"
                className={
                  activeTab === "Residential" ? "active-tab" : "not-active"
                }
              >
                Residential
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeActiveTab("Municipal")} href="#municipal" className={activeTab === "Municipal" ? "active-tab" : "not-active"}>Municipal</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeActiveTab("Commercial")} href="#commercial" className={activeTab === "Commercial" ? "active-tab" : "not-active"}>Commercial</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeActiveTab("Institution")} href="#institution" className={activeTab === "Institution" ? "active-tab" : "not-active"}>
                Institution
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeActiveTab("Historical Preservation")} href="#preservation" className={activeTab === "Historical Preservation" ? "active-tab" : "not-active"}>
                Historical Preservation
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav2;
