import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <NavInnercontainer>
      <LeftNav>
        <img src="/logo.png" alt="WCCCF" />
        <Name>WCCCF UNIBEN</Name>
      </LeftNav>
    </NavInnercontainer>
  );
}

export default NavBar;

const NavInnercontainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Use justify-content to create space between elements */
  color: #1e1e1e;
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  img {
    width: 64px;
    height: 64px;
    background: url(logo.png), lightgray 50% / cover no-repeat;
  }
`;

const Name = styled.p`
  width: 101px;
  color: #1e1e1e;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
