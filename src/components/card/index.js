import React from "react";
import { Container, Image, Text, Info } from "./card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Image = function CardImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Info = function CardInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
