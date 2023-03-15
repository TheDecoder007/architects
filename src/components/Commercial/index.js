import React from "react";
import ServiceCard from "../Services/ServiceCard";
import { commercial } from "../Services/Data/commercialData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Commercial() {
  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">Commercial</h3>
        <h5 className="text-center subText">
          Hibbard & Rosa Architects, L.L.C. has extensive experience in
          commercial and retail design. Our firm has provided professional
          sevices for projects of all sizes from small local commercial projects
          up to the largest commercial developers and retailers in the north
          east. Our projects include both new construction and the adaptation of
          existing buildings.
        </h5>
      </Row>
      <Row className="CardRow">
        {commercial.map((commercial) => {
          return <ServiceCard key={commercial.line} {...commercial} />;
        })}
      </Row>
    </Container>
  );
}

export default Commercial;