import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const LogoContainer = styled.div`
  width: auto;

  img {
    width: 100%;
    box-shadow: inset 1px -1px 23px 3px rgba(0, 0, 0, 0.75);
  }
`;

const Link = styled.div`
  font-size: 1rem;
  color: #ee0979;
  width: 100%;
  cursor: pointer;
  height: 2rem;
  height: 100%;
  text-align: center;

  i {
    margin-left: 0.5rem;
    font-size: 4rem;
    margin-top: 2rem;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <Link active>
        <i className="fab fa-opencart" />
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
