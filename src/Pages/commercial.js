import React from "react";
import ServiceCard from "./ServiceCard";
import {commercial} from "../components/Services/Data/commercialData"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function Commercial() {


  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">Commercial</h3>
      </Row>
      <Row className="CardRow">
{commercial.map(commercial => {
  return <ServiceCard key={commercial.line} {...commercial}/>
})}
      </Row>
    </Container>
  );
}

export default Commercial;
