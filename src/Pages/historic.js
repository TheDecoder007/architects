import React from "react";
import ServiceCard from "../components/Services/ServiceCard";
import {historic} from "../components/Services/Data/historicData"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";


function Historical() {


  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">Historical Preservation</h3>
      </Row>
      <Row className="CardRow">
{historic.map(historic => {
  return <ServiceCard key={historic.line} {...historic}/>
})}
      </Row>
    </Container>
  );
}

export default Historical;