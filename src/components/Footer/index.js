import React from "react";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";

import Video4 from "../../assets/photos/Footer.jpg";

function PageFooter() {

    return(
        <footer className="Footer">
        <video autoPlay loop muted id="video" className="footerVid">
          <source src={Video4} type="video/mp4" />
        </video>
        </footer>
    );
};


export default PageFooter;
