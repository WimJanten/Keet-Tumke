import styled from 'styled-components';

export const Nav = styled.nav`
  background: #459cff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 1rem;
  top: 0;
  width: 100%;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 1000;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 25px;
  font-weight: bold;
  text-decoration: none;
`;
