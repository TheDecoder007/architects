import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Carm = () => {
    return (
      <Container fluid className="aboutCont" id="about">
        <Row className="aboutMe">
          <h3 className="text-center sectionHead">Carmelo Rosa</h3>
        </Row>
        <Row className="text-center">
  
          <Col className="AboutMe">
            <p>
              <h3>Experience</h3>
            Hibbard & Rosa Architects, L.L.C. 1996 - Present
Middletown, CT
Principal

Seb J. Passanesi, P.C. 1992-1996
Middletown, CT
Project Manager

              <h3>Education</h3>

              <h3>Memberships</h3>

              <h3>Licenses</h3>


              <h3>Clients</h3>


            </p>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Carm;