import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./style.css";

function ServiceCard({
    img, 
    line,
    alt,
}) {

    return (
        <Col className="CardCol">
        <Card
          className="text-center wholeCard"
          style={{ width: "27rem", height: "34rem" }}
        >
                <Card.Img src={img} alt={alt}></Card.Img>
  
          <Card.Body>
            <Card.Text>{line}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

    )
}

export default ServiceCard;