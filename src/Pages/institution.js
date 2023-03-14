import React from "react";
import ServiceCard from "../components/Services/ServiceCard";
import {institution} from "../components/Services/Data/institutionData"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";


function Institution() {


  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">Institution</h3>
      </Row>
      <Row className="CardRow">
{institution.map(institution => {
  return <ServiceCard key={institution.line} {...institution}/>
})}
      </Row>
    </Container>
  );
}

export default Institution;