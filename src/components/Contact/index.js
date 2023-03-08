import React from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./style.css";
import carmRes from "../../Pages/carmResume"
// import Aos from "aos";
import { Link } from "react-router-dom";

const Contact = () => {

  return (
    // <Container fluid >


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
    
    <Card.Link type="email" className="contactEmail" href="mailto:tom@hra.bz">Tom@hra.bz</Card.Link>

  </Card.Text>
            </Card.Body>
          </Card>
              <Card.Link href="#tomResume">My Resume</Card.Link>
        </Col>
{/* </Row>
<Row> */}
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
    
    <Card.Link type="email" className="contactEmail" href="mailto:carm@hra.bz">Carm@hra.bz</Card.Link>

  </Card.Text>
            </Card.Body>
          </Card>
              <Card.Link href="#carmResume">My Resume</Card.Link>
        </Col>
      </Row>
              </Container>

              // </Container>
  );
};

export default Contact;
