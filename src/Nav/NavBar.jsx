import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Brand from "./Brand";
import BurgerMenu from "./BurguerMenu";
import CollapseMenu from "./CollapseMenu";




function NavContain(props){
  return(
    <>
    <ContainerNav>
      <Brand />
        <FlexContainer>
          <NavLinks>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
          </FlexContainer>
          </ContainerNav>
        <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}/>
      </>
  )
}



const headerRef = React.createRef();
function Nav(props) {
  const [navbarOpen, setnavbarOpen] = useState(false);
    
    const handleNavbar = () => {
      setnavbarOpen(!navbarOpen);
    }
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const range = 50;
    const offset = headerHeight / 2;

    const didScrollPage = e => {
      let calc = 5 - (window.scrollY - offset + range) / range;

      if (calc < 1) {
        calc = 1;
      } else if (calc > 0) {
        calc = 0;
      }

      setOpacity(calc);
    };

    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);
  

  return (
    <>
      <NavBar   ref={headerRef} style={{ opacity: opacity }}/>
      <NavContain navbarState={navbarOpen} handleNavbar={handleNavbar}/>    
    </>
  );

};


export default Nav;


const ContainerNav = styled.div`
height: 100%;
top: 0;
width: 100%;
background: #ffff;
// background: pink;
justify-content: center;
display: flex;
align-items: center;
`

const NavBar = styled.nav`
// position: fixed;
// top: 0;
// width: 50%;
// box-shadow: 0px 3px 6px #00000038;
// transition: 1s;
// background-color: red;
`;

const FlexContainer = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  padding: 0 ;
  justify-content: center;
  align-items: center;
  // background: green;
  z-index: 30;
`;

const NavLinks = styled.ul`
  list-style: none;
  margin-top: 0;
  width: 85%;
  height: 100%;
  margin-left: 0;
  display: flex;
  margin-right: 0px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  // background: gray;

  & a {
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 2px;
  height: 80%;
  color: #0A4716;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  margin: 5px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bolder;
  text-transform: uppercase;
  overflow:hidden;
  border-style: none;
  background-color: transparent;
  background-image: linear-gradient(#73DDA3, #73DDA3);
  background-size: 0 2px, auto;
  background-repeat: no-repeat;
  background-position: center bottom 30%;
  outline:none;
  z-index: 30;
  transition: all .2s ease-out;

  &:hover {
    color:#73DDA3;
    background-size: calc(30% - 1em) 2px, auto;
}


    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  z-index: 30;

  @media (min-width: 769px) {
    display: none;
    z-index: 30;
  }
`;
