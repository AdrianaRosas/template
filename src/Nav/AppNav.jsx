import React, { useState, useEffect } from "react";
import Nav from "./NavBar";

  const AppNav = () => {
    const [navbarOpen, setnavbarOpen] = useState(false);
    
    const handleNavbar = () => {
      setnavbarOpen(!navbarOpen);
    }
    return (
      <>
      <Nav navbarState={navbarOpen} handleNavbar={handleNavbar} />
    </>
  );
};


export default AppNav;