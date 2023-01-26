import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import Residential1 from "../../assets/photos/residential/residence1.jpg";
import Residential2 from "../../assets/photos/residential/residence2.jpg";
import Residential3 from "../../assets/photos/residential/residence3.jpg";
import Residential4 from "../../assets/photos/residential/residence4.jpg";
import Residential5 from "../../assets/photos/residential/residence5.jpg";
import Residential6 from "../../assets/photos/residential/residence6.jpg";

function Hero() {
  return (
    <Container fluid>
      <Row>
        <Carousel>
            
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../assets/photos/residential/residence1.jpg"
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
              src="holder.js/800x400?text=Second slide&bg=282c34"
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
              src="holder.js/800x400?text=Third slide&bg=20232a"
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
