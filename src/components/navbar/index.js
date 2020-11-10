import React from "react";
import { Nav, Logo, Link } from "./navbar.js";

export default function Navbar({ children, ...restProps }) {
  return (
    <Nav {...restProps}>
      <Logo to="/">SNEAK</Logo>
      <Link to="/">Discover</Link>
      <Link to="/">Browse</Link>
      <Link to="/">Styles</Link>
      {children}
    </Nav>
  );
}

Navbar.Logo = function NavbarLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Navbar.Link = function NavbarLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

//<Nav {...restProps}>{children}</Nav>
