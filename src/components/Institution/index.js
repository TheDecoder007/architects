import React from "react";
import ServiceCard from "../components/Services/ServiceCard";
import { institution } from "../components/Services/Data/institutionData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Institution() {
  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">Institution</h3>
        <h5 className="text-center subText">
          Hibbard & Rosa Architects, L.L.C. has provided a wide variety of
          design solutions to our clients of public organizations, including
          religious institutions, universities, and hospitals. Services provided
          include new construction, interior and exterior renovations, historic
          preservation, and code review. We work closely with our clients and
          carefully tailor each project to meet their individual needs.
        </h5>
      </Row>
      <Row className="CardRow">
        {institution.map((institution) => {
          return <ServiceCard key={institution.line} {...institution} />;
        })}
      </Row>
    </Container>
  );
}

export default Institution;