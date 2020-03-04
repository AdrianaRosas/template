import React from "react";
import { Link } from "react-router-dom";
import '../sidebar/Sidebar.css';
import Brand from "../../Nav/Brand";


const SidebarContain = () => {
  return (
    <div className="side-container">
          <div className="logo-side">
            <Brand />
           </div>  
        <div className="buttons">
      <ul class="sidebar-menu">
        {/* <li class="sidebar-active"><a href="#"><span class="fas fa-circle-notch"></span>Dashboard</a></li> */}
        <li><a href="#"><span class="fas fa-circle-notch"></span>Calendar</a></li>
        <li><a href="#"><span class="fas fa-circle-notch"></span>Leads</a></li>
        <li><a href="#"><span class="fas fa-circle-notch"></span>Invoices</a></li>
        <li><a href="#"><span class="fas fa-circle-notch"></span>Payments</a></li>
      </ul>
    </div>
    </div>
  );
};

export default SidebarContain;


{/* <div className="bar">
    //  <div className="logo-side">
    //    <Brand />
    //    </div> 
      
    //   <div className="links-cont-side">
    //     <a href="#" className="links-sidebar">Uno</a>
    //     <a href="#" className="links-sidebar">Dos</a>
    //     <a href="#" className="links-sidebar">Tres</a>
    //     <a href="#" className="links-sidebar">Cuatro</a>
    //     <a href="#" className="links-sidebar">Cinco</a>
    //   </div>
    //   <Link exact to="/">
    //     Home
    //   </Link>
    //   <Link to="/Geog">Geography</Link>
    //   <Link to="/us1">U.S. History I</Link>
    //   <Link to="/us2">U.S. History 2</Link>
    //   <Link to="/utahStudies">Utah Studies</Link>
    //   <Link to="/worldCiv">World Civilizations</Link>
    // </div> */}