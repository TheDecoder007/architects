import React from "react";
import ServiceCard from "./ProjectCard";
import {commercialData} from "../components/Services/Data/commercialData"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function Commercial() {


  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">My Projects</h3>
      </Row>
      <Row className="CardRow">
{commercialData.map(project => {
  return <ServiceCard key={project.title} {...project}/>
})}
      </Row>
    </Container>
  );
}

export default Commercial;
