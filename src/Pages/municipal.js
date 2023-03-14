import React from "react";
import ServiceCard from "../components/Services/ServiceCard";
import {municipal} from "../components/Services/Data/municipalData"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";


function Municipal() {


  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">Municipal</h3>
      </Row>
      <Row className="CardRow">
{municipal.map(municipal => {
  return <ServiceCard key={municipal.line} {...municipal}/>
})}
      </Row>
    </Container>
  );
}

export default Municipal;