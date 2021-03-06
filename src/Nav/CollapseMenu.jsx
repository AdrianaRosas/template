import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0, 0, 2],
              output: [0, 0, 0, -100]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinks>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              link n1
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              link n2
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              link n3
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              link n4
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              link n5
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index:20;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
