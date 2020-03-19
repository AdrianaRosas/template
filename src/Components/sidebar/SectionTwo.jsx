
import React from "react";
import { Link } from "react-router-dom";
import '../sidebar/otro.css'

const SectionTwo = () => {
  return (
    <div className="bar">
      <div className="img-bar">
        <img
          className="profile"
          src="https://image.flaticon.com/icons/svg/1087/1087420.svg"
          alt="profile"
          
        />
      </div>
      <div className="links-sidebar">
        <div className="link">
            <Link exact to="/info"><span class="fas fa-circle-notch"></span>Información</Link>
         </div>
         <div className="link">
            <Link to="/variedades"><span class="fas fa-circle-notch"></span>Variedades</Link>
         </div>
         <div className="link">
            <Link to="/suscripcion" ><span class="fas fa-circle-notch"></span>Suscríbete</Link>
         </div>
      </div>
    </div>
  );
};

export default SectionTwo;
