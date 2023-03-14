import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./style.css";

function ServiceCard({
    img, 
    location,
    line,
    alt,
}) {

    return (
        <Col className="CardCol">
        <Card
          className="text-center wholeCard"
          style={{ width: "20rem", height: "22rem" }}
        >
    
                <Card.Img className="cardImg" src={img} alt={alt}></Card.Img>
  
          <Card.Body>
          <Card.Subtitle>{location}</Card.Subtitle>

            <Card.Text>{line}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

    )
}

export default ServiceCard;