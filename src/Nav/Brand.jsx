import React from "react";
import styled from "styled-components";
import tealogo from '../images/food-and-restaurant.svg'

// import logo from "../../assets/logo-min.png";

const Brand = () => {
  return <Image src={tealogo} alt="tea" />;
};

export default Brand;

const Image = styled.img`
  // background: violet;
  width: 10%;
  height: 85%;
  margin: 0;
`;
