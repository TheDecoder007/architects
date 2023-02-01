import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
// import Card from "react-bootstrap/Card";

// import coverImage from "../../assets/photos/FacePic.png";

const About = () => {
  return (
    <Container fluid className="aboutCont" id="about">
      <Row className="aboutMe">
        <h3 className="text-center sectionHead">Hibbert & Rosa Architects</h3>
      </Row>
      <Row className="text-center">
        {/* <Col className="AboutCard">
          <Card className="AboutCrd">
            <Card.Header className="cardHeader" as="h5">
              <video autoPlay loop muted id="video" className="headerVid">
                <source src={Video3} type="video/mp4" />
              </video>
              <div className="cardTitle">TheDecoder</div>
            </Card.Header>

            <Card.Img variant="bottom" src={coverImage} alt="cover" />
          </Card>
        </Col> */}

        <Col className="AboutMe">
          <p>
            <h3>About Us:</h3>
            Established in 1996 by Thomas F. Hibbard and Carmelo Rosa, Hibbard &
            Rosa Architects, L.L.C. is the successor firm to Seb J. Passanesi,
            Architects. Located in Middletown, Connecticut for over 60 years, we
            have provided services for a full range of projects. Our clients
            include a cross-section from retail, commercial, industrial, and
            residential developers, to religious and government institutions.
            Since its inception, our firm has been dedicated to providing
            quality architecture design and service. Our firm is experienced in
            providing services for new construction, renovations, adaptive use
            designs, and historic preservation. We firmly believe our success is
            the result of the close relationships developed with our clients
            from the conceptual stage of the design process through construction
            documents and building construction. 
            <br />
            Our reputation for quality and
            service has resulted in repeat business and positive referrals. We
            invite you to browse a sampling of our work. We thank you for
            allowing us to introduce you to Hibbard & Rosa Architects, L.L.C.
            and we look forward to hearing from you in the future.
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
