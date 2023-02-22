import React from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./style.css";
import Aos from "aos";
import { Link } from "react-router-dom";




 const Contact = () => {

    return (
<Container fluid className="mainCont">

<Container fluid className="subCont">
<Row>
<h3 className="text-center sectionHead">
        Our Resumes and Contact Information
      </h3>
</Row>
</Container>

<Row className="CardRow">
    <Col className="colSolo">
    <Card className="cardSolo">
              <Card.Img
                src={require("./../../assets/photos/Tom.jpg")}
                className="images"
              />
              <Card.Body>
                <Card.Title>Thomas F. Hibbard</Card.Title>
                <Link to= "#tom">
                <Button className="AllBtn">
                  My Resume
                </Button>
                </Link>
              </Card.Body>
            </Card>
    </Col>

    <Col className="colSolo">
    <Card className="cardSolo">
              <Card.Img
                src={require("./../../assets/photos/Carmelo.jpg")}
                className="images"
              />
              <Card.Body>
                <Card.Title>Carmelo Rosa</Card.Title>
                <Link to= "#tom">
                <Button className="AllBtn">
                  My Resume
                </Button>
                </Link>
              </Card.Body>
            </Card>
    </Col>

</Row>


</Container>
    );
 };


 export default Contact;