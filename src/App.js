import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/index.css";
import Container from "react-bootstrap/Container";
// import Projects from "./components/Projects";
import About from "./components/About";
import TopNav from "./components/Nav";
// import Contact from "./components/Contact";
import PageFooter from "./components/Footer";
import Hero from "./components/Hero";
import Nav2 from "./components/Nav2";

function App() {
  
  const [activeTab, setActiveTab] = useState("Services");

  const currentPage = () => {
    if (activeTab === "About") return <About />;
    // if (activeTab === "Services") return <Services />;
  //   if (activeTab === "Contact") return <Contact />;
  };

  const changeActiveTab = (tab) => setActiveTab(tab);

  return (
<Container fluid className="mainContainer">
      <Nav2 activeTab={activeTab} changeActiveTab={changeActiveTab} />
      <Hero></Hero>
      {currentPage()}
      <PageFooter />
    </Container>

  );
}

export default App;
