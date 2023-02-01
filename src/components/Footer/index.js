import React from "react";
import Row from "react-bootstrap/Row";
// import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import "./style.css"
import footerImg from "../../assets/photos/Footer.jpg";

function PageFooter() {
  return (

    // <Row className="FooterRow">
      <footer className="Footer">
        <Image className="footerVid" src={footerImg} alt="footer image">
          {/* <source src={footerImg} /> */}
        </Image>
      </footer>
  );
}

export default PageFooter;
