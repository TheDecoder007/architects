import React from "react";
// import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import "./style.css"
import footerImg from "../../assets/photos/Footer2.jpg";

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
