import React from "react";
import ServiceCard from "../Services/ServiceCard";
import { residential } from "../Services/Data/residentialData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Residential() {
  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">Residential</h3>
        <h5 className="text-center subText">
          Hibbard & Rosa Architects, L.L.C. residential design experience
          includes work for developers, government and institutional entities,
          and the individual. Our projects included both new construction and
          renovations. In all cases, we strive to provide our clients with an
          innovative, efficient and cost effective solution to their design
          needs.
        </h5>
      </Row>
      <Row className="CardRow">
        {residential.map((residential) => {
          return <ServiceCard key={residential.line} {...residential} />;
        })}
      </Row>
    </Container>
  );
}

export default Residential;