import React from 'react';

import { Nav, NavbarContainer, NavLogo, LinkContainer, NavLink } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Keet Tumke</NavLogo>
        </NavbarContainer>
        <LinkContainer>
          <NavLink to="/admin">Admin</NavLink>
        </LinkContainer>
      </Nav>
    </>
  );
};

export default Navbar;
