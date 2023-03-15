import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/index.css";
import Container from "react-bootstrap/Container";
import PageFooter from "./components/Footer";
import Hero from "./components/Hero";
import Nav2 from "./components/Nav2";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Commercial from "./components/commercial";
import Historic from "./components/historic";
import Institution from "./components/institution";
import Municipal from "./components/municipal";
import Residential from "./components/residential";

function App() {
  const [activeTab, setActiveTab] = useState("H&R Architects");

  const currentPage = () => {
    if (activeTab === "About") return <About />;
      if (activeTab === "Contact") return <Contact />;
      if (activeTab === "Commercial") return <Commercial />;
      if (activeTab === "Historic") return <Historic />;
      if (activeTab === "Institution") return <Institution />;
      if (activeTab === "Municipal") return <Municipal />;
      if (activeTab === "Residential") return <Residential />;
    };
    
    const changeActiveTab = (tab) => setActiveTab(tab);

  return (
    <Container fluid className="mainContainer">
      <Nav2 activeTab={activeTab} changeActiveTab={changeActiveTab} />
      <Hero></Hero>
      {/* <Router>
        <Routes>
        <Route path="/architects" element={<About />} />
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/historic" element={<Historic />} />
          <Route path="/institution" element={<Institution />} />
          <Route path="/municipal" element={<Municipal />} />
          <Route path="/residential" element={<Residential />} />
        </Routes>
      </Router> */}

      {currentPage()}
      <PageFooter />
    </Container>
  );
}

export default App;
