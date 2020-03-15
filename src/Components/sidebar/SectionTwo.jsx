
import React from "react";
import { Link } from "react-router-dom";
import '../sidebar/otro.css'

const SectionTwo = () => {
  return (
    <div className="bar">
      <div className="img-bar">
        <img
          className="profile"
          src="https://uploads.codesandbox.io/uploads/user/22ccb5c1-a714-4b5f-b2a4-9926bcf71ffc/_Psm-noPic.jpeg"
          alt="profile"
        />
      </div>
      <Link exact to="/info"><span class="fas fa-circle-notch"></span>Información</Link>
      <Link to="/variedades"><span class="fas fa-circle-notch"></span>Variedades</Link>
      <Link to="/suscripcion" ><span class="fas fa-circle-notch"></span>Suscribete</Link>
    </div>
  );
};

export default SectionTwo;
