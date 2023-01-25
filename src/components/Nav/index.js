import React, { useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";


function TopNav({ activeTab, changeActiveTab}) {
    
    
    useEffect(() => {
        document.title = (activeTab);
    });

    return (

    );
};

export default TopNav;