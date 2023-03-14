import React from "react";
import ServiceCard from "../components/Services/ServiceCard";
import {residential} from "../components/Services/Data/residentialData"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";


function Residential() {


  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">Residential</h3>
      </Row>
      <Row className="CardRow">
{residential.map(residential => {
  return <ServiceCard key={residential.line} {...residential}/>
})}
      </Row>
    </Container>
  );
}

export default Residential;