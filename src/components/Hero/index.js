import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

// import Residential1 from "../../assets/photos/residential/residence1p.png";
// import Residential2 from "../../assets/photos/residential/residence2.jpg";
// import Residential3 from "../../assets/photos/residential/residence3.jpg";
// import Residential4 from "../../assets/photos/residential/residence4.jpg";
// import Residential5 from "../../assets/photos/residential/residence5.jpg";

function Hero() {
  return (
    <Container fluid className="Hero">
      <Row className="CarouselRow">
        <Carousel fade className="Carousel">
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={require("../../assets/photos/residential/residence4.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Residential</h3>
              <p>Something fancy about this house</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={require("../../assets/photos/commercial/BedBathRutlandVT.jpg")}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Commercial</h3>
              <p>Bed Bath & Beyond, Vermont</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={require("../../assets/photos/municipal/CTstateFacilityHartford.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Municipal</h3>
              <p>
                CT State facility, Hartford
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={require("../../assets/photos/institution/StSebsMiddletown.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Institution</h3>
              <p>
                St. Sebastians Church, Middletown
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={require("../../assets/photos/preservation/NewingtonVetsHospital.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Historic Preservation</h3>
              <p>
                Newington Veterans Hospital
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default Hero;
