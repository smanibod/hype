import styled from "styled-components/macro";
import { Link as ReactLink } from "react-router-dom";

export const Nav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
  font-family: "Roboto Mono", monospace;
  display: flex;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  transition: all 600ms ease 0s;
  background: white;
  margin: 0px auto;
  padding: 30px 0px;
  justify-content: space-between;
  z-index: 1;
`;

export const Logo = styled.a`
  height: 32px;
  margin-right: 70%;
  margin-left: 20px;
  text-decoration: none;
  color: black;
  font-size: 30px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: black;
  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
  &:last-of-type {
    margin-right: 50px;
  }
`;
