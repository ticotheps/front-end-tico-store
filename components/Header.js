import Nav from "./Nav";
import Link from "next/link";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-10deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.slategrey};
    color: ${props => props.theme.turquoise};
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const Header = () => (
  <div>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>The Tico Store</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
