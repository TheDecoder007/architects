import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/index.css";
import Container from "react-bootstrap/Container";
import Projects from "./components/Projects";
import About from "./components/About";
import TopNav from "./components/Nav";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import PageFooter from "./components/Footer";

function App() {
  
  const [activeTab, setActiveTab] = useState("Projects");

  const currentPage = () => {
    if (activeTab === "About") return <About />;
    if (activeTab === "Projects") return <Projects />;
    if (activeTab === "Contact") return <Contact />;
  };

  const changeActiveTab = (tab) => setActiveTab(tab);

  return (
<Container fluid className="mainContainer">
      <TopNav activeTab={activeTab} changeActiveTab={changeActiveTab} />
      <Hero></Hero>
      {currentPage()}
      <PageFooter />
    </Container>

  );
}

export default App;
