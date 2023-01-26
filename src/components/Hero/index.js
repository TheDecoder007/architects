import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

// import Residential1 from "../../assets/photos/residential/residence1p.png";
// import Residential2 from "../../assets/photos/residential/residence2.jpg";
// import Residential3 from "../../assets/photos/residential/residence3.jpg";
// import Residential4 from "../../assets/photos/residential/residence4.jpg";
// import Residential5 from "../../assets/photos/residential/residence5.jpg";

function Hero() {
  return (
    <Container fluid className="Hero">
      <Row>
        <Carousel>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/photos/residential/residence1p.png")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/photos/residential/residence2.jpg")}

              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/photos/residential/residence3.jpg")}

              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/photos/residential/residence4.jpg")}

              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/photos/residential/residence5.jpg")}

              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          
        </Carousel>
      </Row>
    </Container>
  );
}

export default Hero;
