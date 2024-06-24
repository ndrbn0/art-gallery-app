import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #e19093;
  text-decoration: none; // Remove underline
  font-weight: bold;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffa500;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    color: #ffc525;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

const Navigation = () => {
  return (
    <Nav>
      <StyledLink href="/art-pieces">Pieces</StyledLink>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces-favorites">Favorite</StyledLink>
    </Nav>
  );
};

export default Navigation;
