import React from "react";
import { Container } from "./feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
