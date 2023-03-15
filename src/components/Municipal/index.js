import React from "react";
import ServiceCard from "../components/Services/ServiceCard";
import { municipal } from "../components/Services/Data/municipalData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Municipal() {
  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">Municipal</h3>
        <h5 className="text-center subText">
          Hibbard & Rosa Architects, L.L.C. provides a full range of design
          services for our municipal clients, including interior and exterior
          renovations. Our firm has extensive experience in roof replacement and
          exterior renovation work including masonry restoration and historic
          preservation. Other work includes code upgrades, renovation and
          reconfiguration of interior spaces and HVAC/ mechanical improvements.
          More recently, Hibbard & Rosa Architects has partnered with several
          municipal clients in providing photovoltaic roof systems to their
          existing buildings. Green construction and energy efficiency are
          concerns that are brought to the table of any design discussion.
        </h5>
      </Row>
      <Row className="CardRow">
        {municipal.map((municipal) => {
          return <ServiceCard key={municipal.line} {...municipal} />;
        })}
      </Row>
    </Container>
  );
}

export default Municipal;