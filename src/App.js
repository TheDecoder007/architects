import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/index.css";
import Container from "react-bootstrap/Container";
// import Projects from "./components/Projects";
import About from "./components/About";
// import TopNav from "./components/Nav";
import Contact from "./components/Contact";
import PageFooter from "./components/Footer";
import Hero from "./components/Hero";
import Nav2 from "./components/Nav2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Commercial from "./Pages/commercial";
import Historic from "./Pages/historic";
import Institution from "./Pages/institution";
import Municipal from "./Pages/municipal";
import Residential from "./Pages/residential";

function App() {
  const [activeTab, setActiveTab] = useState("About");

  const currentPage = () => {
    if (activeTab === "About") return <About />;
    if (activeTab === "Contact") return <Contact />;
    // if (activeTab === "Services") return <Services />;
  };

  const changeActiveTab = (tab) => setActiveTab(tab);

  return (
    <Container fluid className="mainContainer">
      <Nav2 activeTab={activeTab} changeActiveTab={changeActiveTab} />
      <Hero></Hero>
      <Router>
        <Routes>
          {/* maybe need to be uppercase */}
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/historic" element={<Historic />} />
          <Route path="/institution" element={<Institution />} />
          <Route path="/municipal" element={<Municipal />} />
          <Route path="/residential" element={<Residential />} />
        </Routes>
      </Router>

      {currentPage()}
      <PageFooter />
    </Container>
  );
}

export default App;
