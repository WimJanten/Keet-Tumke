import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #459cff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-size: 1rem;
  top: 0;
  width: 100%;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  position: absolute;
  z-index: 1000;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  margin-left: 25px;
  font-weight: bold;
  text-decoration: none;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 90%;
`;
export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #bfbfbf;
    transition: 0.3s all ease-in-out;
  }
`;
