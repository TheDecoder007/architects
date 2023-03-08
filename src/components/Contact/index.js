import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./style.css";
// import Aos from "aos";
import { Link } from "react-router-dom";
import ModalTom from "../ModalTom";

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="ContactCont">
      <Row>
        <h3 className="text-center sectionHead">
          Our Resumes & Contact Information
        </h3>
      </Row>
      {/* </Container>


<Container fluid> */}

      <Row className="CardRow">
        <Col className="colSolo">
          <Card className="cardSolo">
            <Card.Img
              src={require("./../../assets/photos/Tom.jpg")}
              className="images"
            />
            <Card.Body>
              <Card.Title>Thomas F. Hibbard</Card.Title>
              <Card.Text>
                <h6 type="tel">Tel: 860-346-1809 ext. 701</h6>

                <Card.Link
                  type="email"
                  className="contactEmail"
                  href="mailto:tom@hra.bz"
                >
                  Tom@hra.bz
                </Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* MODAL FOR RESUME */}
          {/* <> */}
            <Button onClick={ModalTom}>My Resume</Button>
            {/* <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Thomas F. Hibbard Resume</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  <h5>Experience</h5>
                  Hibbard & Rosa Architects, L.L.C. 1996 - Present Middletown,
                  CT Principal Seb J. Passanesi, P.C. 1992-1996 Middletown, CT
                  Project Manager, Vice President
                  <h5>Education</h5>
                  Catholic University of America Washington D.C. B.S.
                  Architecture 1981
                  <h5>Memberships</h5>
                  American Institute of Architects (AIA) International Code
                  Council (ICC) GSA Registered Vendor
                  <h5>Licenses</h5>
                  State of Connecticut
                  <h5>Military Experience</h5>
                  U.S. Navy 1982-1986 U.S. Navy Reserves 1986-2004 Commander
                  <h5>Clients</h5>- Town of East Haven, CT - City of Middletown,
                  CT - Town of Suffield, CT - State of Connecticut; Department
                  of Public Works - Town of Windsor Locks, CT - City of New
                  London, CT - Town of Bloomfield, CT - City of Waterbury, CT -
                  Town of Stratford, CT - Town of Portland, CT - Middletown
                  Housing Authority - Alderhouse Residential Communities, Inc. -
                  The Connection, Inc. - Town of Cromwell, CT - City of Meriden,
                  CT - City of Enfield, CT - City of Norwalk, CT - Town of West
                  Hartford, CT - Town of Oxford, CT - Chase Enterprises, Inc. -
                  DBS, Inc. - South Fire District, Middletown, CT - ASML
                  Lithography Division
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal> */}
          {/* </> */}
        </Col>

        <Col className="colSolo">
          <Card className="cardSolo">
            <Card.Img
              src={require("./../../assets/photos/Carmelo.jpg")}
              className="images"
            />
            <Card.Body>
              <Card.Title>Carmelo Rosa</Card.Title>
              <Card.Text>
                <h6 type="tel">Tel: 860-346-1809 ext. 702</h6>

                <Card.Link
                  type="email"
                  className="contactEmail"
                  href="mailto:carm@hra.bz"
                >
                  Carm@hra.bz
                </Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* MODAL FOR RESUME           */}
          <>
            <Button onClick={handleShow}>My Resume</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Carmelo Rosa Resume</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  <h5>Experience</h5>
                  Hibbard & Rosa Architects, L.L.C. 1996 - Present Middletown,
                  CT Principal Seb J. Passanesi, P.C. 1992-1996 Middletown, CT
                  Project Manager
                  <h5>Education</h5>
                  Roger Williams University Bristol, R.I. B.S. Architecture 1987
                  Minor in Civil Engineering
                  <h5>Memberships</h5>
                  American Institute of Architects (AIA) International Code
                  Council (ICC) GSA Registered Vendor Licensed in Twelve
                  Additional States
                  <h5>Licenses</h5>
                  States of Connecticut, New York, Massachusetts, Rhode Island,
                  Vermont
                  <h5>Clients</h5>- DBS, Inc. - O & G Industries - Chase
                  Enterprises, Inc. - Cornerstone Properties, Inc. - Borghesi
                  Building & Engineering, Inc. - City of Middletown, CT -
                  Weslyan University, Middletown, CT - State of Connecticut -
                  U.S. Attorneys - Safe Home Security - Airport Auto Body - LAZ
                  Parking - Stamford Housing Authority - Saint Elizabeth Manor -
                  Riverhouse Condominiums - Foxboro Town Houses - Haddam
                  Killingworth Board of Education - Middletown Board of
                  Education - Queent Street Plaza, Southington - Department of
                  Social Services
                </p>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button> */}
              </Modal.Footer>
            </Modal>
          </>

        </Col>
      </Row>
      <Row className="CardRow">
        <Col className="colSolo">
          <h5>Company Info</h5>

          <h6>Hibbard & Rosa Architects, L.L.C.</h6>
          <h6>100 Roverview Center, suite 272</h6>
          <h6>292 Main Street Middletown, CT 06457</h6>
          <h6>Tel: 860-346-1809</h6>
          <h6>Fax: 860-346-1809</h6>
        </Col>
      </Row>
    </Container>

    // </Container>
  );
};

export default Contact;
